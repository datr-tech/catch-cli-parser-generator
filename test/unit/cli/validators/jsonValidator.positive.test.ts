import { jsonValidator } from '@app/cli/validators';

describe('unit', () => {
	describe('cli', () => {
		describe('validators', () => {
			describe('jsonValidator', () => {
				describe('positive: should return the input', () => {
					test('when the input is a valid templateNames', () => {
						// Arrange
						const name = 'TEST';

						// Act
						const found = jsonValidator(name);

						// Assert
						expect(found).toEqual(name);
					});
				});
			});
		});
	});
});
