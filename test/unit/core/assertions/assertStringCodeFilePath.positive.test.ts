import { assertStringCodeFilePath } from '@app/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringCode', () => {
				describe('positive', () => {
					describe('should return undefined', () => {
						test("when 'codeFilePath' is a valid string", () => {
							/*
							 * Arrange
							 */
							const codeFilePath = '/a/test/path';

							/*
							 * Act
							 */
							const response = assertStringCodeFilePath({ codeFilePath });

							/*
							 * Assert
							 */
							expect(response).toBeUndefined();
						});
					});
				});
			});
		});
	});
});
