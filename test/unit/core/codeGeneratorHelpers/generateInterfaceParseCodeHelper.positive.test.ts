import { generateInterfaceParseCodeHelper } from '@app/core/codeGeneratorHelpers';
import { parserDefLeafPositive } from '@test/fixtures/args/parserDefs';
import { parseInterfaceLeafPositive } from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('codeGeneratorHelpers', () => {
				describe('generateInterfaceParseCodeHelper', () => {
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
								const templateFound = generateInterfaceParseCodeHelper({ parserDef });
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
