import { parserGenerator } from '@app/core/codeGenerators';
import { IArgsParserDefLeaf } from '@app/interfaces/args/parserDefs';
import { parserDefLeafPositive } from '@test/fixtures/args/parserDefs';
import { parserCodeLeafPositive } from '@test/fixtures/core/generators/parserGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('parserGenerator', () => {
				describe('positive', () => {
					describe("should produce templateCodeGenerators based upon the 'parserLeaf' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.LEAF'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IArgsParserDefLeaf = parserDefLeafPositive;

							/*
							 * Act
							 */
							const { parserCode } = parserGenerator({ parserDef });
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
