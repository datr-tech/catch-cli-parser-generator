import { generateParser } from '@app/core/generators';
import { IDataParserDefLeaf } from '@app/interfaces/data/parserDefs';
import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';
import { parserCodeLeafPositive } from '@test/fixtures/core/generators/generateParser';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateParser', () => {
				describe('positive', () => {
					describe("should produce templateCodeGenerators based upon the 'parserLeaf' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.LEAF'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IDataParserDefLeaf = parserDefLeafPositive;

							/*
							 * Act
							 */
							const { parserCode } = generateParser({ parserDef });
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeLeafPositive.trim();
							/*
							 * Assert
							 */
							expect(parserCodeFound).toBe(parserCodeExpected);
						});
					});
				});
			});
		});
	});
});
