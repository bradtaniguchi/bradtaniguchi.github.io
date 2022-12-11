# internal-client-e2e

This is the e2e test suite project used to test the internal-client, or the
"client" project that is deployed to github.

<!-- TODO: add notes about testing local production build -->

## Running e2e test suite

```bash
npx nx run internal-client-e2e:e2e
```

This will automatically start the target project, and run tests against it.
Because this can be slow, use the VSCode extension instead.

## Running tests against production deployment

```bash
npx nx run internal-client-e2e:ci-prod
```

## Note about running with VSCode extension.

The extension by default will test against `localhost:4200`, so be sure
to start the dev server for the internal-client with:

```bash
npm run start
```

or more explicitly:

```bash
npx nx run internal-client:serve
```

<!-- TODO: add notes about testing against exported version, and "live" version -->

## ts-check

To run test checks, use:

```bash
npx nx run internal-client-e2e:ts-check
```

## Linting

To run linting use:

```bash
npx nx run internal-client-e2e:lint
```
