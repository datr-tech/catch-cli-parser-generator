import { assertParserDefStem } from '@app/core/assertions';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/data/parserDefs';

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
								const parserDef: IDataParserDef = parserDefStemPositive;

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
								const parserDef: IDataParserDef = parserDefLeafPositive;

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
