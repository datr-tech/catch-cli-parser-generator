import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { assertTemplatePath } from '@app/core/assertions';

let templatePath: string;

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertTemplatePath', () => {
				describe('positive', () => {
					describe('should return undefined', () => {
						beforeAll(() => {
							const timestamp = Date.now();
							const templateName = `assertTemplatePath.positive.${timestamp}.txt`;
							templatePath = `${CONSTS_PATHS_APP_ROOT}/${templateName}`;
							global.jestTouchFileSync(templateName);
						});
						afterAll(() => {
							global.jestRemoveFileSync(templatePath);
						});
						test("when 'templatePath' is a valid path", () => {
							const response = assertTemplatePath({ templatePath });
							expect(response).toBeUndefined();
						});
					});
				});
			});
		});
	});
});
