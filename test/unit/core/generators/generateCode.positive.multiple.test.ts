import { generateCode } from '@app/core/generators';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import { IGeneratorCodeOutputSingle } from '@app/interfaces/core/generators';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/data/parserDefs';
import { parserCodeStemPositive } from '@test/fixtures/core/generators/generateParser';
import {
	parseInterfaceStemPositiveUcfirst,
	parserInterfaceStemPositiveUcfirst,
	parseOutputInterfaceStemPositiveUcfirst,
} from '@test/fixtures/core/generators/generateInterface';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateCode', () => {
				describe('positive.multiple', () => {
					describe('should produce both templateCodeGenerators and interfaces', () => {
						test("based upon the 'parserLeaf' and the 'parserStem' templates", () => {
							/*
							 * Arrange
							 */
							const parserDefs: IDataParserDef[] = [parserDefLeafPositive, parserDefStemPositive];

							/*
							 * Act
							 */
							const responses: IGeneratorCodeOutputSingle[] = generateCode({ parserDefs });
							const { parseInterface, parseOutputInterface, parserCode, parserInterface } =
								responses[1];

							const parseInterfaceFound = parseInterface.trim();
							const parseInterfaceExpected = parseInterfaceStemPositiveUcfirst.trim();
							const parseOutputInterfaceFound = parseOutputInterface.trim();
							const parseOutputInterfaceExpected = parseOutputInterfaceStemPositiveUcfirst.trim();
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeStemPositive.trim();
							const parserInterfaceFound = parserInterface.trim();
							const parserInterfaceExpected = parserInterfaceStemPositiveUcfirst.trim();

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
