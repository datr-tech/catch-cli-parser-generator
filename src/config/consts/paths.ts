import { resolve } from 'node:path';

export const CONSTS_PATHS_APP_ROOT = resolve('./');
export const CONSTS_PATHS_TEMPLATES_DIR = resolve(`${CONSTS_PATHS_APP_ROOT}`, 'src/core/templates');
export const CONSTS_PATHS_TEST_DIR = resolve(`${CONSTS_PATHS_APP_ROOT}`, 'test');
