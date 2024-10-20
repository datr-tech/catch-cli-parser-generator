import { FileExtensionEnum, TemplateNamePrefixEnum } from '@app/config/enums';
import { generateInterfaceCodeHelper } from '@app/core/codeGeneratorHelpers';
import { parserDefLeafPositive } from '@test/fixtures/args/parserDefs';
import { parseInterfaceLeafPositive } from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('codeGeneratorHelpers', () => {
				describe('generateInterfaceCodeHelper', () => {
					describe('positive', () => {
						describe("should return the expected common interface 'template'", () => {
							test("when 'parserDef' is valid (leaf)", () => {
								/*
								 * Arrange
								 */
								const templateName = `${TemplateNamePrefixEnum.INTERFACE_PARSE}.${FileExtensionEnum.HBS}`;
								const parserDef = parserDefLeafPositive;

								/*
								 * Act
								 */
								const templateFound = generateInterfaceCodeHelper({
									parserDef,
									templateName,
								});
								const templateExpected = parseInterfaceLeafPositive.trim();

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
