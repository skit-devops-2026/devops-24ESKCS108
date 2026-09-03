#!/bin/bash

set -e

echo "Testing Digital Bank project structure..."

test -f home.html
test -f login.html
test -f signup.html

echo "All project structure tests passed!"