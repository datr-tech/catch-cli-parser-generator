import { getTemplateHelperInterfaceParseOutput } from '@app/core/helpers';
import { parserDefLeafNegativeElClass } from '@test/fixtures/core/generators/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateHelperInterfaceParseOutput', () => {
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
									getTemplateHelperInterfaceParseOutput({
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
