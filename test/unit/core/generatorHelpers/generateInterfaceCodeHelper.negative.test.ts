import { generateInterfaceCodeHelper } from '@app/core/generatorHelpers';
import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generatorHelpers', () => {
				describe('generateInterfaceCodeHelper', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test("when 'name' does not refer to a valid file", () => {
								/*
								 * Arrange
								 */
								const errorExpected = "'path' does not identify a valid file object";
								const timestamp = Date.now();
								const name = `getTemplateHelperInterface.${timestamp}.txt`;
								const parserDef = parserDefLeafPositive;

								/*
								 * Act
								 */
								const handler = () => {
									generateInterfaceCodeHelper({
										parserDef,
										name,
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
