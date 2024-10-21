import { interfaceGenerator } from '@app/core/codeGenerators';
import { IArgsParserDef } from '@app/interfaces/args/parserDefs';
import { parserDefIterPositive } from '@test/fixtures/args/parserDefs';
import {
	parseInterfaceIterPositiveUcfirst,
	parseOutputInterfaceIterPositiveUcfirst,
	parserInterfaceIterPositiveUcfirst,
} from '@test/fixtures/core/generators/interfaceGenerator';

describe('unit', () => {
	describe('core', () => {
		describe('codeGenerators', () => {
			describe('interfaceGenerator', () => {
				describe('positive', () => {
					describe("should produce interfaces based upon the 'parserIter' templates", () => {
						test("when 'parserDef.type' is 'ParserTypeEnum.ITER'", () => {
							/*
							 * Arrange
							 */
							const parserDef: IArgsParserDef = parserDefIterPositive;

							/*
							 * Act
							 */
							const { parseOutputInterface, parseInterface, parserInterface } = interfaceGenerator({
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
