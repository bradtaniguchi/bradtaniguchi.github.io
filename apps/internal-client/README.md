# Internal Client

This project is used to display data within a github-page app using nextjs.

<!-- whitespace change to trigger build -->

## Building for static export

Run the following to build a static build:

```bash
npx nx run internal-client:export
```

## Serving previously build static export

Run the following to serve the static build, as a kind of "smoke build"

```bash
npx nx run internal-client:smoke
```

**Note** the projects+blog pages don't work here for some reason, you need to redirect to
`localhost:8000/projects.html` instead of just `localhost:8000/projects`

## Serving

Run the following to use next to serve the project locally:

```bash
npx nx run internal-client:serve
```

This does not include the statically built files that are usually added during the actual build.

## Serving the analyzed build

Run the following to run the build analyzer:

```bash
ANALYZE=true npx nx run internal-client:build
```

This will ignore anything related to the sentry bundle however, and open the browser
to the statistics.

## Scripts

### get-meta-data

This script is used to get meta-data for a given static markdown file using
front-matter. This primarily exists for testing.

```bash
npx nx run internal-client:get-meta-data --path=apps/internal-client/static/projects/fcc-calculator.md
```

### validate-static-projects

This script is used to run validation checks on the static
projects folder using front-matter. This primarily exists for testing.

```bash
npx nx run internal-client:validate-static-projects --path=apps/internal-client/static/projects/
```

### validate-blog-posts

This script is used to run validation checks on the static
blog folder using front-matter. This primarily exists for testing.

```bash
npx nx run internal-client:validate-blog-posts --path=apps/internal-client/static/blog/
```

### prod-build shell script

This bash script will go through similar steps to setup the production build and then serve it via `http-server`.

```bash
./apps/internal-client/scripts/prod-build.sh
```
