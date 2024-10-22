import { generateInterfaceParserCodeHelper } from '@app/core/generatorHelpers';
import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';
import { parserInterfaceLeafPositive } from '@test/fixtures/core/generators/generateInterface';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generatorHelpers', () => {
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
