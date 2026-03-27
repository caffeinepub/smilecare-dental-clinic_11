import Array "mo:core/Array";
import Int "mo:core/Int";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type AppointmentRequest = {
    createdAt : Time.Time;
    name : Text;
    phone : Text;
    serviceType : Text;
    preferredDate : Text;
    preferredTime : Text;
    whatsappConfirmation : Bool;
  };

  module AppointmentRequest {
    public func compareByTime(a : AppointmentRequest, b : AppointmentRequest) : Order.Order {
      Int.compare(a.createdAt, b.createdAt);
    };
  };

  type ContactLead = {
    createdAt : Time.Time;
    name : Text;
    phone : Text;
    message : Text;
  };

  module ContactLead {
    public func compareByTime(a : ContactLead, b : ContactLead) : Order.Order {
      Int.compare(a.createdAt, b.createdAt);
    };
  };

  let appointmentStore = Map.empty<Text, AppointmentRequest>();
  let contactStore = Map.empty<Text, ContactLead>();

  public shared ({ caller }) func createAppointment(id : Text, appointment : AppointmentRequest) : async () {
    if (appointmentStore.containsKey(id)) {
      Runtime.trap("Entry with ID " # id # " already exists.");
    };
    appointmentStore.add(id, appointment);
  };

  public shared ({ caller }) func createContactLead(id : Text, lead : ContactLead) : async () {
    if (contactStore.containsKey(id)) {
      Runtime.trap("Entry with ID " # id # " already exists.");
    };
    contactStore.add(id, lead);
  };

  public query ({ caller }) func getAllAppointmentsByTime() : async [AppointmentRequest] {
    appointmentStore.values().toArray().sort(AppointmentRequest.compareByTime);
  };

  public query ({ caller }) func getAllContactsByTime() : async [ContactLead] {
    contactStore.values().toArray().sort(ContactLead.compareByTime);
  };

  public query ({ caller }) func getAppointmentsByName(name : Text) : async [AppointmentRequest] {
    appointmentStore.values().toArray().filter(func(app) { app.name == name }).sort(AppointmentRequest.compareByTime);
  };

  public query ({ caller }) func getAppointmentsByDate(date : Text) : async [AppointmentRequest] {
    appointmentStore.values().toArray().filter(func(app) { app.preferredDate == date }).sort(AppointmentRequest.compareByTime);
  };
};
