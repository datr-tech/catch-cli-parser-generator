import { FileExtensionEnum, TemplateNamePrefixEnum } from '@app/config/enums';
import { getTemplateHelperInterface } from '@app/core/helpers';
import { parserDefLeafPositive } from '@test/fixtures/core/generators/parserDefs';
import { commonParseCodePositive } from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateHelperInterface', () => {
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
								const templateFound = getTemplateHelperInterface({
									parserDef,
									templateName,
								});
								const templateExpected = commonParseCodePositive.trim();

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
