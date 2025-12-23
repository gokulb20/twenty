#!/bin/bash

# Script to replace all "Twenty" text references with "Crewm8"

echo "Replacing text references..."

# Replace in TypeScript/JavaScript files
find /home/user/twenty/packages -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/dist/*" \
  -not -path "*/build/*" \
  -exec sed -i -E \
    -e 's/"Twenty"/"Crewm8"/g' \
    -e "s/'Twenty'/'Crewm8'/g" \
    -e 's/Welcome to Twenty/Welcome to Crewm8/g' \
    -e 's/twenty\.com/crewm8.com/g' \
    -e 's/Twenty CRM/Crewm8/g' \
    -e 's/twentyhq/crewm8/g' \
    {} \;

# Replace in JSON files (except package-lock.json)
find /home/user/twenty/packages -type f -name "*.json" \
  -not -name "package-lock.json" \
  -not -path "*/node_modules/*" \
  -not -path "*/dist/*" \
  -exec sed -i -E \
    -e 's/"Twenty"/"Crewm8"/g' \
    -e 's/twenty\.com/crewm8.com/g' \
    {} \;

# Replace in Markdown files
find /home/user/twenty -type f -name "*.md" \
  -not -path "*/node_modules/*" \
  -exec sed -i -E \
    -e 's/Twenty CRM/Crewm8/g' \
    -e 's/# Twenty/# Crewm8/g' \
    -e 's/twenty\.com/crewm8.com/g' \
    -e 's/twentyhq/crewm8/g' \
    {} \;

echo "Text replacement complete!"
