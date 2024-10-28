import { DirModel } from '@app/models';

describe('DirService', () => {
	describe('constructor', () => {
		describe('should instantiate', () => {
			test("when the value of the received 'dirPathStr' param is a non-empty string", () => {
				/*
				 * Arrange
				 */
				const dirPathStr = 'TEST_DIR_PATH';

				/*
				 * Act
				 */
				const dirModel = DirModel({ dirPathStr });

				/*
				 * Assert
				 */
				expect(dirModel).toBeTruthy();
			});
		});
	});
});
