declare namespace I18NextKlbBackend {
  export interface BackendOptions {
    allowMultiLoading?: boolean;
    [key: string]: any;
  }

  export class Backend {
    constructor(services: any, options?: BackendOptions);
    init(services: any, options?: BackendOptions): void;
    read(language: string, namespace: string, callback: (err: Error | null, data?: any) => void): void;
    type: string;
    static type: string;
  }
}

export const Backend: typeof I18NextKlbBackend.Backend;

// Helper function to get locale from FW object
export function getLocale(): string | undefined;