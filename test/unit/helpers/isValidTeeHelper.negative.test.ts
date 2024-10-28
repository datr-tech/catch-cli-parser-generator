import { isValidTeeHelper } from '@app/helpers';

describe('isValidTeeHelper', () => {
	describe('should return false and update the received (external) flag', () => {
		test("when the value of the received 'condition' param is false", () => {
			/*
			 * Arrange
			 */
			const validityFlagToUpdate = { value: true };
			const condition = false;

			/*
			 * Act
			 */
			const isValidFound = isValidTeeHelper({
				condition,
				validityFlagToUpdate,
			});

			/*
			 * Assert
			 */
			expect(isValidFound).toBe(false);
			expect(validityFlagToUpdate.value).toBe(false);
		});
	});
});
