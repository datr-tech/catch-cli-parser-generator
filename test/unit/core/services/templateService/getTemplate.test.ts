import {
	getParserTemplateName,
	getParserTemplatePath,
	getTemplate,
} from '@app/core/services/templateService';
import { parserDefLeafPositive } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('templateService', () => {
				describe('getTemplate', () => {
					describe("should return the expected 'templates'", () => {
						test("when 'parserDef' is valid (leaf)", () => {
							/*
							 * Arrange
							 */
							const parserDef = parserDefLeafPositive;

							/*
							 * Act
							 */
							const templateName = getParserTemplateName({ parserDef });
							const templatePath = getParserTemplatePath({ templateName });
							const templateFound = getTemplate({ templatePath });
							const templateExpected = global.jestReadFileSync(templatePath);

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
