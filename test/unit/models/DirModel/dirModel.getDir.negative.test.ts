import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DirModel } from '@app/models';

describe('DirService', () => {
	describe('getDir', () => {
		describe('should throw an error', () => {
			test("when the received 'dirPathStr' param represents an existing dir, but the 'isValid' function was been called beforehand", () => {
				/*
				 * Arrange
				 */
				const errorExpected = "Negative 'isDirPathValidFlag'";
				const dirPathStr = CONSTS_PATHS_APP_ROOT;
				const dirModel = DirModel({ dirPathStr });

				/*
				 * Act
				 */
				const handler = () => {
					dirModel.getDir();
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
