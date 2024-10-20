import { generateInterfaceCodeHelper } from '@app/core/codeGeneratorHelpers';
import { parserDefLeafPositive } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('codeGeneratorHelpers', () => {
				describe('generateInterfaceCodeHelper', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test("when 'templateName' does not refer to a valid file", () => {
								/*
								 * Arrange
								 */
								const errorExpected = "'templatePath' does not identify a valid file object";
								const timestamp = Date.now();
								const templateName = `getTemplateHelperInterface.${timestamp}.txt`;
								const parserDef = parserDefLeafPositive;

								/*
								 * Act
								 */
								const handler = () => {
									generateInterfaceCodeHelper({
										parserDef,
										templateName,
									});
								};

								/*
								 * Assert
								 */
								expect(handler).toThrow(errorExpected);
							});
						});
					});
				});
			});
		});
	});
});
