import { isValidTeeHelper } from '@app/helpers';

describe('isValidTeeHelper', () => {
	describe('should return true and update the received (external) flag', () => {
		test("when the value of the received 'condition' param is true", () => {
			/*
			 * Arrange
			 */
			const validityFlagToUpdate = { value: false };
			const condition = true;

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
			expect(isValidFound).toBe(true);
			expect(validityFlagToUpdate.value).toBe(true);
		});
	});
});
