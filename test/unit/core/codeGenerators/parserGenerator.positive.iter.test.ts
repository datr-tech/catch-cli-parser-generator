import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { parserGenerator } from '@app/core/codeGenerators';
import { IArgsParserDefIter } from '@app/interfaces/args/parserDefs';
import { parserCodeIterPositive } from '@test/fixtures/core/generators/parserGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('parserGenerator', () => {
				describe('positive', () => {
					describe("should produce templateCodeGenerators based upon the 'parserIter' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.ITER'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IArgsParserDefIter = {
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
