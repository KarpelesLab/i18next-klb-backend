import { BackendModule, Services, ReadCallback, InitOptions } from 'i18next';

export interface BackendOptions {
  allowMultiLoading?: boolean;
  [key: string]: any;
}

export class Backend implements BackendModule {
  constructor(services: Services, options?: BackendOptions);
  init(services: Services, options?: BackendOptions & InitOptions): void;
  read(language: string, namespace: string, callback: ReadCallback): void;
  type: 'backend';
  static type: 'backend';
}

// Helper function to get locale from FW object
export function getLocale(): string | undefined;