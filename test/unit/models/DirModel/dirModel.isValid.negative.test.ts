import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DirModel } from '@app/models';

const timestamp = Date.now();
const fileName = `DirModel.isValid.negative.test.${timestamp}`;
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
				const dirModel = DirModel({ dirPathStr });

				/*
				 * Act
				 */
				const isValidFound = dirModel.isValid();

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
				const dirModel = DirModel({ dirPathStr });

				/*
				 * Act
				 */
				const isValidFound = dirModel.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(false);
			});
		});
	});
});
