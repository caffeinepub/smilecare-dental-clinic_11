import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactLead {
    name: string;
    createdAt: Time;
    message: string;
    phone: string;
}
export interface AppointmentRequest {
    whatsappConfirmation: boolean;
    serviceType: string;
    name: string;
    createdAt: Time;
    preferredDate: string;
    preferredTime: string;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    createAppointment(id: string, appointment: AppointmentRequest): Promise<void>;
    createContactLead(id: string, lead: ContactLead): Promise<void>;
    getAllAppointmentsByTime(): Promise<Array<AppointmentRequest>>;
    getAllContactsByTime(): Promise<Array<ContactLead>>;
    getAppointmentsByDate(date: string): Promise<Array<AppointmentRequest>>;
    getAppointmentsByName(name: string): Promise<Array<AppointmentRequest>>;
}
