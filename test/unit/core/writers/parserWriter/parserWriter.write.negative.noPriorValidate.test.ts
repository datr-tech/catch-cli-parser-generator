import { parserWriter } from '@app/core/writers';

describe('unit', () => {
	describe('core', () => {
		describe('writers', () => {
			describe('parserWriter', () => {
				describe('write', () => {
					describe('negative: noPriorValidate', () => {
						describe('should return false', () => {
							test("when 'validate' had not been called prior to 'write'", () => {
								/*
								 * Arrange
								 */
								const writeResponseExpected = false;

								/*
								 * Act
								 */
								const writeResponseFound = parserWriter.write();

								/*
								 * Assert
								 */
								expect(writeResponseFound).toBe(writeResponseExpected);
							});
						});
					});
				});
			});
		});
	});
});