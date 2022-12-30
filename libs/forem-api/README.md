# forem-api

This library was generated with [Nx](https://nx.dev).

## Running unit tests

Run `nx test forem-api` to execute the unit tests via [Jest](https://jestjs.io).

## Running lint

Run `nx lint forem-api` to execute the lint via [ESLint](https://eslint.org/).

## get-articles

This script can be used to get the published articles for a given username from dev.to

```bash
npx nx run forem-api:get-articles --username=bradtaniguchi
```

## get-article

This script can be used to get a single article for the given article id from dev.to

```bash
npx nx run forem-api:get-article --id=1003715
```
