#!/bin/bash

# Script to rebrand all Twenty references to Crewm8

# Find and replace in all package.json files
find /home/user/twenty/packages -name "package.json" -type f -exec sed -i 's/"twenty-/"crewm8-/g' {} \;
find /home/user/twenty/packages -name "package.json" -type f -exec sed -i "s/'twenty-/'crewm8-/g" {} \;
find /home/user/twenty/packages -name "package.json" -type f -exec sed -i 's/twenty-/crewm8-/g' {} \;

# Update create-twenty-app to create-crewm8-app
find /home/user/twenty/packages -name "package.json" -type f -exec sed -i 's/create-twenty-app/create-crewm8-app/g' {} \;

echo "All package.json files have been updated"
