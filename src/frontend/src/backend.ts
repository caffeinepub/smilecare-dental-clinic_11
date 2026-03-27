import type { Identity } from "@dfinity/agent";
import { useActor } from "./hooks/useActor";
import type { backendInterface } from "./backend.d";

// Re-export for config.ts and useActor.ts compatibility
export type { backendInterface };

export interface CreateActorOptions {
  agentOptions?: {
    identity?: Identity | Promise<Identity>;
    host?: string;
  };
  agent?: unknown;
  processError?: (e: unknown) => never;
}

export class ExternalBlob {
  onProgress?: (progress: number) => void;
  private _url: string;

  constructor(url: string) {
    this._url = url;
  }

  static fromURL(url: string): ExternalBlob {
    return new ExternalBlob(url);
  }

  async getBytes(): Promise<Uint8Array> {
    const response = await fetch(this._url);
    return new Uint8Array(await response.arrayBuffer());
  }
}

export async function createActor(
  _canisterId: string,
  _uploadFile: (file: ExternalBlob) => Promise<Uint8Array>,
  _downloadFile: (bytes: Uint8Array) => Promise<ExternalBlob>,
  _options?: CreateActorOptions,
): Promise<backendInterface> {
  return new Proxy({} as backendInterface, {
    get: () => async () => {},
  });
}

export function useBackend() {
  const { actor, isFetching } = useActor();
  return { actor: actor as unknown as backendInterface | null, isFetching };
}
