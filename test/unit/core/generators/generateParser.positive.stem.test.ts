import { generateParser } from '@app/core/generators';
import { IDataParserDefStem } from '@app/interfaces/data/parserDefs';
import { parserCodeStemPositive } from '@test/fixtures/core/generators/generateParser';
import { parserDefStemPositive } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateParser', () => {
				describe('positive', () => {
					describe("should produce templateCodeGenerators based upon the 'parserStem' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.STEM'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IDataParserDefStem = parserDefStemPositive;

							/*
							 * Act
							 */
							const { parserCode } = generateParser({ parserDef });
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
