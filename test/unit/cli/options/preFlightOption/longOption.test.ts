import { preFlightOption } from '@app/cli/options';

describe('unit', () => {
	describe('cli', () => {
		describe('options', () => {
			describe('preFlightOption', () => {
				describe('longOption', () => {
					test("should be '--pre-flight", () => {
						/*
						 * Arrange
						 */
						const expected = '--pre-flight';

						/*
						 * Act
						 */
						const { long } = preFlightOption;

						/*
						 * Assert
						 */
						expect(long).toEqual(expected);
					});
				});
			});
		});
	});
});
