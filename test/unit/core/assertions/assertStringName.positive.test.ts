import { assertStringName } from '@app/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertStringName', () => {
				describe('positive', () => {
					describe('should return undefined', () => {
						test("when 'parserName' is a valid string", () => {
							/*
							 * Arrange
							 */
							const name = 'TEST_NAME';

							/*
							 * Act
							 */
							const response = assertStringName({ name });

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
