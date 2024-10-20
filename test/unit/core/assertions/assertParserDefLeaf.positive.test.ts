import { assertParserDefLeaf } from '@app/core/assertions';
import { IArgsParserDef } from '@app/interfaces/args/parserDefs';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('assertions', () => {
			describe('parserDefs', () => {
				describe('assertParserDefLeaf', () => {
					describe('positive', () => {
						describe('should return undefined', () => {
							test("when 'parserDef' (leaf) is valid", () => {
								/*
								 * Arrange
								 */
								const parserDef: IArgsParserDef = parserDefLeafPositive;

								/*
								 * Act
								 */
								const response = assertParserDefLeaf({ parserDef });

								/*
								 * Assert
								 */
								expect(response).toBeUndefined();
							});
							test("when 'parserDef.type' is NOT equal to ParserTypeEnum.LEAF", () => {
								/*
								 * Arrange
								 */
								const parserDef: IArgsParserDef = parserDefStemPositive;

								/*
								 * Act
								 */
								const response = assertParserDefLeaf({ parserDef });

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
