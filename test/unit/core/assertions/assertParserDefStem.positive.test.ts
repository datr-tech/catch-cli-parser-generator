import { assertParserDefStem } from '@app/core/assertions';
import { IParserDef } from '@app/interfaces/args/parserDefs';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('parserDefs', () => {
				describe('assertParserDefStem', () => {
					describe('positive', () => {
						describe('should return undefined', () => {
							test("when 'parserDef' (stem) is valid", () => {
								/*
								 * Arrange
								 */
								const parserDef: IParserDef = parserDefStemPositive;

								/*
								 * Act
								 */
								const response = assertParserDefStem({ parserDef });

								/*
								 * Assert
								 */
								expect(response).toBeUndefined();
							});
							test("when 'parserDef.type' is NOT equal to ParserTypeEnum.STEM", () => {
								/*
								 * Arrange
								 */
								const parserDef: IParserDef = parserDefLeafPositive;

								/*
								 * Act
								 */
								const response = assertParserDefStem({ parserDef });

								/*
								 * Assert
								 */
								expect(response).toBeUndefined();
							});
						});
					});
				});
			});
		});
	});
});
