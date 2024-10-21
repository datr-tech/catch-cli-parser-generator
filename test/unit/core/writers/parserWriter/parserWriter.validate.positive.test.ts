import { parserWriter } from '@app/core/writers';

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('parserWriter', () => {
				describe('validate', () => {
					describe('positive', () => {
						describe('should return true', () => {
							test("when 'parserCode' could be written to a file named 'parserName'", () => {
								/*
								 * Arrange
								 */
								const isValidExpected = true;
								const parserCode = 'const testVar = 123;'
								const parserName = 'parserWriter.validate.positive';

								/*
								 * Act
								 */
								const isValidFound = parserWriter.validate({ parserCode, parserName });

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