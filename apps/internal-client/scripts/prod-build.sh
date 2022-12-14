#!/usr/bin/bash

echo "Building production version of internal-client"
npm run clean
npx nx run internal-client:export
cp -r dist/apps/internal-client/exported/* dist/
npx nx graph --file=dist/nx-graph/index.html
npx nx graph --file=dist/nx-graph/graph.json
# Don't build storybooks or docs, to save time
npm run build:config

echo "Serving..."

npx http-server dist
