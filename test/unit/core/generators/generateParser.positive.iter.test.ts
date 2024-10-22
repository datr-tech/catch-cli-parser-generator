import { ParserTypeEnum } from '@datr.tech/catch-lib-parser-core';
import { generateParser } from '@app/core/generators';
import { IDataParserDefIter } from '@app/interfaces/data/parserDefs';
import { parserCodeIterPositive } from '@test/fixtures/core/generators/generateParser';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateParser', () => {
				describe('positive', () => {
					describe("should produce templateCodeGenerators based upon the 'parserIter' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.ITER'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IDataParserDefIter = {
								parser: 'iter',
								childParser: 'child',
								type: ParserTypeEnum.ITER,
							};

							/*
							 * Act
							 */
							const { parserCode } = generateParser({ parserDef });
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
