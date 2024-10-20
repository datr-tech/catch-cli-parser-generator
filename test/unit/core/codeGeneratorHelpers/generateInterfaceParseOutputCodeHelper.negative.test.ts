import { generateInterfaceParseOutputCodeHelper } from '@app/core/codeGeneratorHelpers';
import { parserDefLeafNegativeElClass } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('codeGeneratorHelpers', () => {
				describe('generateInterfaceParseOutputCodeHelper', () => {
					describe('negative', () => {
						describe('should throw an error', () => {
							test("when 'parserDef' (leaf) is invalid", () => {
								/*
								 * Arrange
								 */
								const errorExpected = "Invalid 'parserDef.el.class'";
								const parserDef = parserDefLeafNegativeElClass;

								/*
								 * Act
								 */
								const handler = () => {
									generateInterfaceParseOutputCodeHelper({
										parserDef,
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
