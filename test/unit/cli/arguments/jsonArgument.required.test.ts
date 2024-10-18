import { jsonArgument } from '@app/cli/arguments';

describe('cli', () => {
	describe('arguments', () => {
		describe('jsonArgument', () => {
			describe('required', () => {
				test('should be true', () => {
					// Arrange
					const expected = true;

					// Act
					const { required } = jsonArgument;

					// Assert
					expect(required).toEqual(expected);
				});
			});
		});
	});
});
