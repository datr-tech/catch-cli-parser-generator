import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DirService } from '@app/services/fileService';

const timestamp = Date.now();
const fileName = `DirService.isValid.negative.test.${timestamp}`;
const filePath = `${CONSTS_PATHS_APP_ROOT}/${fileName}.txt`;

describe('DirService', () => {
	describe('isValid', () => {
		describe('should return false', () => {
			beforeAll(() => global.jestTouchFileSync(filePath));
			afterAll(() => global.jestRemoveFileSync(filePath));
			test("when the value of the received 'dirPathStr' param does not represents a file system object", () => {
				/*
				 * Arrange
				 */
				const dirPathStr = `/${fileName}`;
				const dirService = DirService({ dirPathStr });

				/*
				 * Act
				 */
				const isValidFound = dirService.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(false);
			});
			test("when the value of the received 'dirPathStr' param represents an existing file", () => {
				/*
				 * Arrange
				 */
				const dirPathStr = filePath;
				const dirService = DirService({ dirPathStr });

				/*
				 * Act
				 */
				const isValidFound = dirService.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(false);
			});
		});
	});
});
