import { jsonArgument } from '@app/cli/arguments';

describe('cli', () => {
	describe('arguments', () => {
		describe('jsonArgument', () => {
			describe('description', () => {
				test('should be valid', () => {
					// Arrange
					const expected = 'The JSON definition of the parser to be generated';

					// Act
					const { description } = jsonArgument;

					// Assert
					expect(description).toEqual(expected);
				});
			});
		});
	});
});
