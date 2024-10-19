import { jsonValidator } from '@app/cli/validators';

describe('unit', () => {
	describe('cli', () => {
		describe('validators', () => {
			describe('jsonValidator', () => {
				describe('negative: should throw an error', () => {
					test("when the input is ''", () => {
						// Arrange
						const name = '';
						const expected = "Invalid 'json";

						// Act
						const handler = () => {
							jsonValidator(name);
						};

						// Assert
						expect(handler).toThrow(expected);
					});
				});
			});
		});
	});
});
