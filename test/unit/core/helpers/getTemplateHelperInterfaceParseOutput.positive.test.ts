import { getTemplateHelperInterfaceParseOutput } from '@app/core/helpers';
import { parserDefStemPositive } from '@test/fixtures/core/generators/parserDefs';
import { parseOutputCodeStemPositive } from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateHelperInterfaceParseOutput', () => {
					describe('positive', () => {
						describe("should return the expected interface 'template'", () => {
							test("when 'parserDef' is valid (stem)", () => {
								/*
								 * Arrange
								 */
								const parserDef = parserDefStemPositive;

								/*
								 * Act
								 */
								const templateFound = getTemplateHelperInterfaceParseOutput({
									parserDef,
								});
								const templateExpected = parseOutputCodeStemPositive.trim();

								/*
								 * Assert
								 */
								expect(templateFound).toBe(templateExpected);
							});
						});
					});
				});
			});
		});
	});
});
