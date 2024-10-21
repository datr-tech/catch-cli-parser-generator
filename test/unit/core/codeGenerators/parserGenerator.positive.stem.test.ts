import { parserGenerator } from '@app/core/codeGenerators';
import { IArgsParserDefStem } from '@app/interfaces/args/parserDefs';
import { parserCodeStemPositive } from '@test/fixtures/core/generators/parserGenerator';
import { parserDefStemPositive } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('parserGenerator', () => {
				describe('positive', () => {
					describe("should produce templateCodeGenerators based upon the 'parserStem' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.STEM'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IArgsParserDefStem = parserDefStemPositive;

							/*
							 * Act
							 */
							const { parserCode } = parserGenerator({ parserDef });
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeStemPositive.trim();

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
