import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DirModel } from '@app/models';

describe('DirService', () => {
	describe('isValid', () => {
		describe('should return true', () => {
			test("when the value of the received 'dirPathStr' param represents an existing dir", () => {
				/*
				 * Arrange
				 */
				const dirPathStr = CONSTS_PATHS_APP_ROOT;
				const dirModel = DirModel({ dirPathStr });

				/*
				 * Act
				 */
				const isValidFound = dirModel.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(true);
			});
		});
	});
});
