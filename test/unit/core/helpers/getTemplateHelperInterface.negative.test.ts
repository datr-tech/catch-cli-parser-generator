import { getTemplateHelperInterface } from '@app/core/helpers';
import { parserDefLeafPositive } from '@test/fixtures/core/generators/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('helpers', () => {
				describe('getTemplateHelperInterface', () => {
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
									getTemplateHelperInterface({
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
