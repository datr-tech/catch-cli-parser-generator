import { generateCode } from '@app/core/generators';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import { IGeneratorCodeOutputSingle } from '@app/interfaces/core/generators';
import { parserDefLeafPositive } from '@test/fixtures/data/parserDefs';
import { parserCodeLeafPositive } from '@test/fixtures/core/generators/generateParser';
import {
	parseInterfaceLeafPositiveUcfirst,
	parserInterfaceLeafPositiveUcfirst,
	parseOutputInterfaceLeafPositiveUcfirst,
} from '@test/fixtures/core/generators/generateInterface';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateCode', () => {
				describe('positive.single.leaf', () => {
					describe("should produce both templateCodeGenerators and interfaces based upon the 'parserLeaf' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.LEAF'", () => {
							/*
							 * Arrange
							 */
							const parserDefs: IDataParserDef[] = [parserDefLeafPositive];

							/*
							 * Act
							 */
							const responses: IGeneratorCodeOutputSingle[] = generateCode({ parserDefs });
							const { parseInterface, parseOutputInterface, parserCode, parserInterface } =
								responses[0];

							const parseInterfaceFound = parseInterface.trim();
							const parseInterfaceExpected = parseInterfaceLeafPositiveUcfirst.trim();
							const parseOutputInterfaceFound = parseOutputInterface.trim();
							const parseOutputInterfaceExpected = parseOutputInterfaceLeafPositiveUcfirst.trim();
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeLeafPositive.trim();
							const parserInterfaceFound = parserInterface.trim();
							const parserInterfaceExpected = parserInterfaceLeafPositiveUcfirst.trim();

							/*
							 * Assert
							 */
							expect(parseInterfaceFound).toBe(parseInterfaceExpected);
							expect(parseOutputInterfaceFound).toBe(parseOutputInterfaceExpected);
							expect(parserCodeFound).toBe(parserCodeExpected);
							expect(parserInterfaceFound).toBe(parserInterfaceExpected);
						});
					});
				});
			});
		});
	});
});
