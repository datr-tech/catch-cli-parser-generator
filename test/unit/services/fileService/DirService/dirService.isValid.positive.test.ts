import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DirService } from '@app/services/fileService';

describe('DirService', () => {
	describe('isValid', () => {
		describe('should return true', () => {
			test("when the value of the received 'dirPathStr' param represents an existing dir", () => {
				/*
				 * Arrange
				 */
				const dirPathStr = CONSTS_PATHS_APP_ROOT;
				const dirService = DirService({ dirPathStr });

				/*
				 * Act
				 */
				const isValidFound = dirService.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(true);
			});
		});
	});
});
