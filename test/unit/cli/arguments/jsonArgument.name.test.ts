import { jsonArgument } from '@app/cli/arguments';

describe('cli', () => {
	describe('arguments', () => {
		describe('jsonArgument', () => {
			describe('name', () => {
				test("should be 'json'", () => {
					// Arrange
					const expected = 'json';

					// Act
					const name = jsonArgument.name();

					// Assert
					expect(name).toEqual(expected);
				});
			});
		});
	});
});
