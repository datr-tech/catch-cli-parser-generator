import { generateInterfaceParseOutputCodeHelper } from '@app/core/generatorHelpers';
import { parseOutputInterfaceStemPositive } from '@test/fixtures/core/generators/generateInterface';
import { parserDefStemPositive } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generatorHelpers', () => {
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
