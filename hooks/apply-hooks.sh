#!/usr/bin/env bash

for file in ./hooks/*
do
  if ! grep -q 'apply-hooks' "$file"; then
    file_name="${file##*/}"

    cp ./hooks/$file_name ./.git/hooks/$file_name
    chmod +x ./.git/hooks/$file_name

    echo "Activated $file_name hook"
  fi
done
