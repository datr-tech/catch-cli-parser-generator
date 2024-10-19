import { preFlightOption } from '@app/cli/options';

describe('unit', () => {
	describe('cli', () => {
		describe('options', () => {
			describe('preFlightOption', () => {
				describe('description', () => {
					test('should be valid', () => {
						// Arrange
						const expected = 'Run the command without performing downstream processing';

						// Act
						const { description } = preFlightOption;

						// Assert
						expect(description).toEqual(expected);
					});
				});
			});
		});
	});
});
