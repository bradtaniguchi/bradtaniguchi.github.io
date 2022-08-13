# Internal Client

This project is used to display data within a github-page app using nextjs.

## Building for static export

Run the following to build a static build:

```bash
npx nx run internal-client:export
```

## Serving

Run the following to use next to serve the project locally:

```bash
npx nx run internal-client:serve
```

This does not include the statically built files that are usually added during the actual build.

## Scripts

### get-meta-data

This script is used to get meta-data for a given static markdown file using
front-matter. This primarily exists for testing.

```bash
nx run internal-client:get-meta-data --path=apps/internal-client/static/projects/fcc-calculator.md
```
