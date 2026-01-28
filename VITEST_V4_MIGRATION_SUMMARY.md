# Vitest v3 to v4 Migration Summary

## Overview
Successfully upgraded Vitest from v3.2.4 to v4.0.18 across the Quasar monorepo.

## Changes Made

### 1. Package Dependency Updates

**vite-plugin/package.json**
- Updated `vitest` from `^3.2.4` to `^4.0.0`

**ui/testing/package.json**
- Updated `vitest` from `^3.2.4` to `^4.0.0`
- Updated `@vitest/ui` from `^3.2.4` to `^4.0.0`

### 2. Configuration Updates

**vitest.workspace.js**
- Migrated from `defineWorkspace` to `defineConfig` with `projects` array
- This aligns with Vitest 4.0's replacement of `workspace` option with `projects`

**All vitest.config.js files updated with coverage settings:**
- Added `coverage.include` patterns to define which files to include in coverage
- Added `coverage.exclude` patterns to exclude unnecessary files (d.ts, spec files, mock files, etc.)

### 3. Mock Behavior Fixes

**Added `afterEach` hooks with `vi.restoreAllMocks()`:**

1. **vite-plugin/testing/runtime/vitest.setup.js**
   - Added global afterEach hook to restore all mocks after each test

2. **ui/testing/vitest.setup.js**
   - Added global afterEach hook to restore all mocks after each test

3. **vite-plugin/testing/usage/tests/usage.test.js**
   - Added afterEach import and hook to prevent mock state leakage between tests

## Test Results

### vite-plugin tests:
- **Usage tests:** 10 passed (10 tests)
- **Runtime tests:** 75 passed (75 tests)
- **Total:** 85 tests passed

### UI tests:
- **Test files:** 98 passed (98 files)
- **Total tests:** 1050 passed (1050 tests)

## Key Migration Changes Applied

Based on the [Vitest v4 Migration Guide](vitest-v4-migration.md):

1. ✅ **Mock Restoration**: Added `vi.restoreAllMocks()` in afterEach hooks to handle v4's new mock behavior where `restoreAllMocks` only restores spies created with `vi.spyOn` and no longer affects automocks

2. ✅ **Coverage Configuration**: Added explicit `coverage.include` and `coverage.exclude` patterns to prevent coverage issues in v4 where `coverage.all` and `coverage.extensions` options are removed

3. ✅ **Workspace to Projects**: Updated workspace configuration to use the new `projects` format

4. ✅ **Test File Patterns**: No changes needed as test file patterns remained compatible

## Notes

- All tests pass without any failures
- The migration was straightforward with minimal code changes
- The primary issue was mock state leakage between tests, which was resolved by adding proper `afterEach` cleanup hooks
- No changes were needed for snapshot tests, pool options, or reporter configurations as the defaults work well
