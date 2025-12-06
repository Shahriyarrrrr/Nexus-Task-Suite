#!/usr/bin/env bash
set -e
BRANCH=${1:-main}
echo "Building assets"
./scripts/build-assets.sh
echo "Pushing to remote"
git add .
git commit -m "deploy: build assets" || true
git push origin "$BRANCH"
echo "Deployment step complete. If you use a remote CI, it should pick up changes."
