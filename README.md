# i18next-klb-backend

A backend connector for [i18next](https://www.i18next.com/) that loads translations from KarpelesLab (KLB) systems.

## Installation

```bash
npm install @karpeleslab/i18next-klb-backend
```

## Usage

```javascript
import i18next from 'i18next';
import { Backend } from '@karpeleslab/i18next-klb-backend';
import { getLocale } from "@karpeleslab/klbfw";

i18next
  .use(Backend)
  .init({
    // Backend options
    lng: getLocale(),
    backend: {
      // any custom options
    },

    // i18next recommended options
    load: 'currentOnly',  // recommended to avoid loading special languages
    fallbackLng: false,
    ns: ['translation'],
    defaultNS: 'translation',
  });
```

## TypeScript Support

This package includes TypeScript type definitions:

```typescript
import i18next from 'i18next';
import { Backend, BackendOptions } from '@karpeleslab/i18next-klb-backend';

const options: BackendOptions = {
  allowMultiLoading: false,
  // other options
};

i18next
  .use(Backend)
  .init({
    backend: options,
    // other i18next options
  });
```

## How it works

This backend loads translations from your KLB system by:

1. Using the `FW.i18n` global if available and matching the requested language
2. Fetching from `/l/<language>/_special/locale.json`
3. Falling back to `/_special/locale/<language>.json` if the first fetch fails

The backend expects translations in JSON format with the structure:
```json
{
  "token": "value",
  "another_token": "another value"
}
```

## Features

- Integrates with KLB framework globals (`FW.Locale`, `FW.i18n`, `FW.prefix`)
- Automatically handles language code format (requires 5-character codes like 'en-US')
- Simple interface with minimal configuration
- TypeScript definitions included

## License

MIT