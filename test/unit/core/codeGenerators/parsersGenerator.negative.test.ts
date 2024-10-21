import { parsersGenerator } from '@app/core/codeGenerators';
import { IArgsParserDef } from '@app/interfaces/args/parserDefs';
import {
	parserDefLeafPositive,
	parserDefStemNegativeElClass,
} from '@test/fixtures/args/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('parsersGenerator', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test("when one of the 'parseDef' args is erroneous", () => {
							/*
							 * Arrange
							 */
							const errorExpected = "Invalid 'parserDef.el.class'";
							const parserDefs: IArgsParserDef[] = [
								parserDefLeafPositive,
								parserDefStemNegativeElClass,
							];

							/*
							 * Act
							 */
							const handler = () => {
								parsersGenerator({ parserDefs });
							};

							/*
							 * Assert
							 */
							expect(handler).toThrow(errorExpected);
						});
					});
				});
			});
		});
	});
});
