import { generateInterfaceParserCodeHelper } from '@app/core/codeGeneratorHelpers';
import { parserDefLeafPositive } from '@test/fixtures/args/parserDefs';
import { parserInterfaceLeafPositive } from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('codeGeneratorHelpers', () => {
				describe('generateInterfaceParserCodeHelper', () => {
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
								const templateFound = generateInterfaceParserCodeHelper({ parserDef });
								const templateExpected = parserInterfaceLeafPositive.trim();

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
