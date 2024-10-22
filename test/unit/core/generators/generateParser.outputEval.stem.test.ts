import ts from 'typescript';
import { ParserTypeEnum, IParserBuilderIterOutput } from '@datr.tech/catch-lib-parser-core';
import { generateParser } from '@app/core/generators';
import { IDataParserDefStem } from '@app/interfaces/data/parserDefs';
import { parserDefStemPositive } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateParser', () => {
				describe('outputEval', () => {
					describe('should return a valid TypeScript', () => {
						test("based upon the 'parserStem' templates", () => {
							/*
							 * Arrange
							 */
							const parserDef: IDataParserDefStem = parserDefStemPositive;

							/*
							 * Act
							 */
							const { parserCode } = generateParser({ parserDef });
							const parserCodeStemJavaScript = ts.transpile(parserCode);
							const parser: IParserBuilderIterOutput = eval(parserCodeStemJavaScript);

							/*
							 * Assert
							 */
							expect(typeof parser.parse).toBe('function');
							expect(parser.parserType).toBe(ParserTypeEnum.STEM);

							const elNameExpected = `${parserDef.el.tag}.${parserDef.el.class}`;
							expect(parser.elName).toBe(elNameExpected);
						});
					});
				});
			});
		});
	});
});
