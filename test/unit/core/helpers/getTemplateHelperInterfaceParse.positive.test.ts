import { getTemplateHelperInterfaceParse } from '@app/core/helpers';
import { parserDefLeafPositive } from '@test/fixtures/core/generators/parserDefs';
import { commonParseCodePositive } from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateHelperInterfaceParse', () => {
					describe('positive', () => {
						describe("should return the expected interface 'template'", () => {
							test("when 'parserDef' is valid (leaf)", () => {
								/*
								 * Arrange
								 */
								const parserDef = parserDefLeafPositive;

								/*
								 * Act
								 */
								const templateFound = getTemplateHelperInterfaceParse({ parserDef });
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
