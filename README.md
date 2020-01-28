### Installation

`yarn add sentry-stacktrace-fixer`

### Usage

```
import * as Sentry from '@sentry/browser';

import { stripStacktraceFilenamesBeforePrefix } from 'sentry-stacktrace-fixer';

const beforeSend = stripStacktraceFilenamesBeforePrefix(BUNDLE_PREFIX);

if (process.env.NODE_ENV === 'production') {
    Sentry.init({
        dsn: SENTRY_KEY,
        release: PRODUCT + '@' + VERSION,
        beforeSend
    });
}
```