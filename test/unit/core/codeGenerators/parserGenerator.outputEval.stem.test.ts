import ts from 'typescript';
import { ParserTypeEnum, IParserBuilderIterOutput } from '@datr.tech/catch-lib-parser-core';
import { parserGenerator } from '@app/core/codeGenerators';
import { IArgsParserDefStem } from '@app/interfaces/args/parserDefs';
import { parserDefStemPositive } from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('parserGenerator', () => {
				describe('outputEval', () => {
					describe('should return a valid TypeScript', () => {
						test("based upon the 'parserStem' templates", () => {
							/*
							 * Arrange
							 */
							const parserDef: IArgsParserDefStem = parserDefStemPositive;

							/*
							 * Act
							 */
							const { parserCode } = parserGenerator({ parserDef });
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
