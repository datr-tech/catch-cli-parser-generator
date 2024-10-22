import {
	getParserTemplateName,
	getParserTemplatePath,
	getTemplate,
} from '@app/core/services/templateService';
import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';

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
							const name = getParserTemplateName({ parserDef });
							const path = getParserTemplatePath({ name });
							const templateFound = getTemplate({ path });
							const templateExpected = global.jestReadFileSync(path);

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
