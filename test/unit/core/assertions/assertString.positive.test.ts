import { assertString } from '@app/core/assertions';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('assertString', () => {
				describe('positive', () => {
					describe('should return undefined', () => {
						test("when 'value' is a valid string", () => {
							/*
							 * Arrange
							 */
							const value = 'aValidString';
							const name = 'aTestString';

							/*
							 * Act
							 */
							const response = assertString({ value, name });

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
