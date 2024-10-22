import { generateInterface } from '@app/core/generators';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import { parserDefIterPositive } from '@test/fixtures/data/parserDefs';
import {
	parseInterfaceIterPositiveUcfirst,
	parseOutputInterfaceIterPositiveUcfirst,
	parserInterfaceIterPositiveUcfirst,
} from '@test/fixtures/core/generators/generateInterface';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateInterface', () => {
				describe('positive', () => {
					describe("should produce interfaces based upon the 'parserIter' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.ITER'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IDataParserDef = parserDefIterPositive;

							/*
							 * Act
							 */
							const { parseOutputInterface, parseInterface, parserInterface } = generateInterface({
								parserDef,
							});

							const parseInterfaceFound = parseInterface.trim();
							const parseInterfaceExpected = parseInterfaceIterPositiveUcfirst.trim();
							const parseOutputInterfaceFound = parseOutputInterface.trim();
							const parseOutputInterfaceExpected = parseOutputInterfaceIterPositiveUcfirst.trim();
							const parserInterfaceFound = parserInterface.trim();
							const parserInterfaceExpected = parserInterfaceIterPositiveUcfirst.trim();

							/*
							 * Assert
							 */
							expect(parseInterfaceFound).toBe(parseInterfaceExpected);
							expect(parseOutputInterfaceFound).toBe(parseOutputInterfaceExpected);
							expect(parserInterfaceFound).toBe(parserInterfaceExpected);
						});
					});
				});
			});
		});
	});
});
