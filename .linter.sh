#!/bin/bash
cd /home/kavia/workspace/code-generation/elegantnote-74428-main-container-for-elegantnote-74428-74433/core_component_for_elegantnote
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

