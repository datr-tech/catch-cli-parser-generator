import { parsersGenerator } from '@app/core/generators';
import { IParserDef } from '@app/interfaces/core/generators/parserDefs';
import {
	parserDefLeafPositive,
	parserDefStemNegativeElClass,
} from '@test/fixtures/core/generators/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('parsersGenerator', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test("when one of the 'parseDef' params is erroneous", () => {
							/*
							 * Arrange
							 */
							const errorExpected = "Invalid 'parserDef.el.class'";
							const parserDefs: IParserDef[] = [
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
