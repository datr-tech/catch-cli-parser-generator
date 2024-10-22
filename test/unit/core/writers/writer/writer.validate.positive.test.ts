import { writer } from '@app/core/writers';

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('writer', () => {
				describe('validate', () => {
					describe('positive', () => {
						describe('should return true', () => {
							test("when 'code' COULD be written to a file named 'name'", () => {
								/*
								 * Arrange
								 */
								const isValidExpected = true;
								const code = 'const testVar = 123;';
								const name = 'writer.validate.positive';

								/*
								 * Act
								 */
								const isValidFound = writer.validate({ code, name });

								/*
								 * Assert
								 */
								expect(isValidFound).toBe(isValidExpected);
							});
						});
					});
				});
			});
		});
	});
});
