#!/bin/bash
echo "Testing Digital Bank project structure..."

# Check for essential React structure instead of old HTML files
if [ -f "src/App.js" ] && [ -f "public/index.html" ]; then
    echo "React project structure verified!"
    exit 0
else
    echo "Missing React entry files!"
    exit 1
fi