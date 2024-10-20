import { generateInterfaceParseOutputCodeHelper } from '@app/core/codeGeneratorHelpers';
import { parserDefStemPositive } from '@test/fixtures/args/parserDefs';
import { parseOutputInterfaceStemPositive } from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('codeGeneratorHelpers', () => {
				describe('generateInterfaceParseOutputCodeHelper', () => {
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
								const templateFound = generateInterfaceParseOutputCodeHelper({
									parserDef,
								});
								const templateExpected = parseOutputInterfaceStemPositive.trim();

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
