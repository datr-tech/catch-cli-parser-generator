import { generateCode } from '@app/core/generators';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import {
	parserDefLeafPositive,
	parserDefStemNegativeElClass,
} from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateCode', () => {
				describe('negative', () => {
					describe('should throw an error', () => {
						test("when one of the 'parseDef' data is erroneous", () => {
							/*
							 * Arrange
							 */
							const errorExpected = "Invalid 'parserDef.el.class'";
							const parserDefs: IDataParserDef[] = [
								parserDefLeafPositive,
								parserDefStemNegativeElClass,
							];

							/*
							 * Act
							 */
							const handler = () => {
								generateCode({ parserDefs });
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
