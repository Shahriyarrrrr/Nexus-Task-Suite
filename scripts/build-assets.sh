#!/usr/bin/env bash
set -e
SRC="client"
DIST="dist/assets"
mkdir -p "$DIST/css"
mkdir -p "$DIST/js"
cp -r "$SRC/shared/css" "$DIST/css/shared"
cp -r "$SRC/components" "$DIST/components"
find "$SRC/pages" -name "*.css" -exec cp {} "$DIST/css" \;
find "$SRC/pages" -name "*.js" -exec cp {} "$DIST/js" \;
echo "assets copied to $DIST"
