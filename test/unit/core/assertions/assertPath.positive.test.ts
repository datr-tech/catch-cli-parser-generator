import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { assertPath } from '@app/core/assertions';

let path: string;

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertPath', () => {
				describe('positive', () => {
					describe('should return undefined', () => {
						beforeAll(() => {
							const timestamp = Date.now();
							const templateName = `assertTemplatePath.positive.${timestamp}.txt`;
							path = `${CONSTS_PATHS_APP_ROOT}/${templateName}`;
							global.jestTouchFileSync(templateName);
						});
						afterAll(() => {
							global.jestRemoveFileSync(path);
						});
						test("when 'templatePath' is a valid path", () => {
							const response = assertPath({ path });
							expect(response).toBeUndefined();
						});
					});
				});
			});
		});
	});
});
