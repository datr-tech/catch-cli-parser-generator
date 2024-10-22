import ts from 'typescript';
import { ParserTypeEnum, IParserBuilderIterOutput } from '@datr.tech/catch-lib-parser-core';
import { generateParser } from '@app/core/generators';
import { IDataParserDefLeaf } from '@app/interfaces/data/parserDefs';
import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateParser', () => {
				describe('outputEval', () => {
					describe('should return a valid TypeScript', () => {
						test("based upon the 'parserLeaf' templates", () => {
							/*
							 * Arrange
							 */
							const parserDef: IDataParserDefLeaf = parserDefLeafPositive;

							/*
							 * Act
							 */
							const { parserCode } = generateParser({ parserDef });
							const parserCodeLeafJavaScript = ts.transpile(parserCode);
							const parser: IParserBuilderIterOutput = eval(parserCodeLeafJavaScript);

							/*
							 * Assert
							 */
							expect(typeof parser.parse).toBe('function');
							expect(parser.parserType).toBe(ParserTypeEnum.LEAF);

							const elNameExpected = `${parserDef.el.tag}.${parserDef.el.class}`;
							expect(parser.elName).toBe(elNameExpected);
						});
					});
				});
			});
		});
	});
});
