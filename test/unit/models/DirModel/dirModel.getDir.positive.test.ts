import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DirModel } from '@app/models';

describe('DirService', () => {
	describe('getDir', () => {
		describe('should return true', () => {
			test("when the received 'dirPathStr' param represents an existing dir and the 'isValid' function has been called", () => {
				/*
				 * Arrange
				 */
				const dirPathStr = CONSTS_PATHS_APP_ROOT;
				const dirModel = DirModel({ dirPathStr });

				/*
				 * Act
				 */
				const isValidFound = dirModel.isValid();
				const dirFound = dirModel.getDir();
				/*
				 * Assert
				 */
				expect(isValidFound).toBe(true);
				expect(dirFound).toBe(dirPathStr);
			});
		});
	});
});
