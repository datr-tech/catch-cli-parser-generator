import { FileExtensionEnum, TemplateNamePrefixEnum } from '@app/config/enums';
import { generateInterfaceCodeHelper } from '@app/core/generatorHelpers';
import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';
import { parseInterfaceLeafPositive } from '@test/fixtures/core/generators/generateInterface';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generatorHelpers', () => {
				describe('generateInterfaceCodeHelper', () => {
					describe('positive', () => {
						describe("should return the expected common interface 'template'", () => {
							test("when 'parserDef' is valid (leaf)", () => {
								/*
								 * Arrange
								 */
								const name = `${TemplateNamePrefixEnum.INTERFACE_PARSE}.${FileExtensionEnum.HBS}`;
								const parserDef = parserDefLeafPositive;

								/*
								 * Act
								 */
								const templateFound = generateInterfaceCodeHelper({
									parserDef,
									name,
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
