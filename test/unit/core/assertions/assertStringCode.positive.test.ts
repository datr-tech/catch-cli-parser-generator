import { assertStringCode } from '@app/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringCode', () => {
				describe('positive', () => {
					describe('should return undefined', () => {
						test("when 'code' is a valid string", () => {
							/*
							 * Arrange
							 */
							const code = 'const testVar = 123;';

							/*
							 * Act
							 */
							const response = assertStringCode({ code });

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
