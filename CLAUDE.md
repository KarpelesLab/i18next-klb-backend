# CLAUDE.md for i18next-klb-backend

## Build/Lint/Test Commands
- No tests currently implemented (package.json has placeholder test script)
- No explicit build or lint steps defined

## Code Style Guidelines
- Project is plain JavaScript (no TypeScript)
- Standard ES6+ style with 'use strict' enforcement
- 2-space indentation
- Semicolons required at statement end
- Class-based component structure
- Use const for variable declarations that don't change
- Prefer arrow functions for callbacks
- Single quotes for strings (e.g. 'use strict')
- Use camelCase for variables and functions (e.g. newpfx, allowMultiLoading)
- Error handling via callbacks with (error, data) pattern
- Standard fetch API for HTTP requests with catch clauses
- JSDoc-style comments for documenting code behavior

## Repository Context
- This is a backend connector for i18next translation framework
- Uses KarpelesLab (KLB) system for translation loading
- MIT licensed