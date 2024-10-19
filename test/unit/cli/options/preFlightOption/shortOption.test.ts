import { preFlightOption } from '@app/cli/options';

describe('unit', () => {
	describe('cli', () => {
		describe('options', () => {
			describe('preFlightOption', () => {
				describe('shortOption', () => {
					test("should be '-p", () => {
						/*
						 * Arrange
						 */
						const expected = '-p';

						/*
						 * Act
						 */
						const { short } = preFlightOption;

						/*
						 * Assert
						 */
						expect(short).toEqual(expected);
					});
				});
			});
		});
	});
});
