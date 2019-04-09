# Browser Extension Template

## Changelog

See the [changelog](CHANGELOG.md).

## Development

Extension uses Webpack to bundle and build sources.

Install dependencies:
```bash
npm install
```

Run in auto-refresh mode - this will refresh not only bundle on every change,
but also reload extension and refresh current page:

```bash
npm run watch
```

Add extension at [chrome://extensions/](chrome://extensions/)
using "load unpacked" button and selecting `dist` directory. 

For the auto-refresh to work background page must be active.
To assure it, open inspector for "background page" item
from "inspect views" section in extension details.

## Build for Chrome Web Store

```bash
npm run build
```

`release.zip` file is generated in the `dist/` directory.
