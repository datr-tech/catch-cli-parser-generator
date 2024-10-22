import { generateCode } from '@app/core/generators';
import { IDataParserDef } from '@app/interfaces/data/parserDefs';
import { IGeneratorCodeOutputSingle } from '@app/interfaces/core/generators';
import { parserDefIterPositive } from '@test/fixtures/data/parserDefs';
import { parserCodeIterPositive } from '@test/fixtures/core/generators/generateParser';
import {
	parseInterfaceIterPositiveUcfirst,
	parserInterfaceIterPositiveUcfirst,
	parseOutputInterfaceIterPositiveUcfirst,
} from '@test/fixtures/core/generators/generateInterface';

describe('unit', () => {
	describe('core', () => {
		describe('generators', () => {
			describe('generateCode', () => {
				describe('positive.single.iter', () => {
					describe("should produce both templateCodeGenerators and interfaces based upon the 'parserIter' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.ITER'", () => {
							/*
							 * Arrange
							 */
							const parserDefs: IDataParserDef[] = [parserDefIterPositive];

							/*
							 * Act
							 */
							const responses: IGeneratorCodeOutputSingle[] = generateCode({ parserDefs });
							const { parseInterface, parseOutputInterface, parserCode, parserInterface } =
								responses[0];

							const parseInterfaceFound = parseInterface.trim();
							const parseInterfaceExpected = parseInterfaceIterPositiveUcfirst.trim();
							const parseOutputInterfaceFound = parseOutputInterface.trim();
							const parseOutputInterfaceExpected = parseOutputInterfaceIterPositiveUcfirst.trim();
							const parserCodeFound = parserCode.trim();
							const parserCodeExpected = parserCodeIterPositive.trim();
							const parserInterfaceFound = parserInterface.trim();
							const parserInterfaceExpected = parserInterfaceIterPositiveUcfirst.trim();

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
