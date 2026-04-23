---
name: nejlepsi-v-kodu-na-svete
description: 'Create a reusable skill that captures a best-in-code repair workflow for broken YAML or agent customization files.'
argument-hint: 'What code repair or quality task should this skill support?'
disable-model-invocation: true
---

## Overview
This skill helps turn a real debugging session into a reusable workflow for repairing malformed configuration and code files. It is designed to guide the assistant toward the best possible code fix by extracting the process, decision points, and completion checks from a conversation.

## When to use
- You need a skill that fixes broken YAML or agent customization files.
- You want to cleanly separate valid config from injected or stray code.
- You want to produce the best code-quality fix with clear verification steps.

## Workflow
1. Review the current conversation and file context.
2. Identify the exact parser or YAML error messages.
3. Locate the invalid content or malformed line in the file.
4. Decide whether to repair a single line, remove stray trailing content, or rewrite the file section.
5. Apply the fix and verify by checking the corrected file contents.
6. Summarize the final state and recommend follow-up checks.

## Quality criteria
- The output file contains only valid YAML/config content when config is expected.
- No unrelated CSS, HTML, or code is mixed into the YAML block.
- The fix is minimal and preserves the original intended config.
- The result is verified with a targeted content check or parser validation.

## Example prompt
`Vytvoř skill, který opraví poškozený YAML soubor tak, aby z něj odstranil vložené CSS a vrátil čistý konfigurační blok.`

## Suggested follow-ups
- Add `prompt.md` for user-facing instructions if this skill will be used interactively.
- Add `.instructions.md` to constrain behavior to workspace-scoped configuration repairs.
- Add example test cases or common error patterns for malformed YAML / injected content.
