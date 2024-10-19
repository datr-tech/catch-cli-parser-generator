import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { parserGenerator } from '@app/core/generators';
import { IParserDefIter } from '@app/interfaces/core/generators/parserDefs';
import { parserCodeIterPositive } from '@test/fixtures/core/generators/parserGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('parserGenerator', () => {
				describe('positive', () => {
					describe("should produce code based upon the 'parserIter' template", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.ITER'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IParserDefIter = {
								parser: 'iter',
								childParser: 'child',
								type: ParserTypeEnum.ITER,
							};

							/*
							 * Act
							 */
							const { parserCode } = parserGenerator({ parserDef });
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeIterPositive.trim();

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
