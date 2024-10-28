import { isValidTeeHelper } from '@app/helpers/';

describe('isValidTeeHelper', () => {
	describe('should return true and update the received (external) flag', () => {
		test("when the value of the received 'condition' param is true", () => {
			/*
			 * Arrange
			 */
			const validityFlag = { value: false };
			const condition = true;

			/*
			 * Act
			 */
			const isValidFound = isValidTeeHelper({
				condition,
				validityFlag,
			});

			/*
			 * Assert
			 */
			expect(isValidFound).toBe(true);
			expect(validityFlag.value).toBe(true);
		});
	});
});
