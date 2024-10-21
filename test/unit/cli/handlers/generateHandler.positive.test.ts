import { generateHandler } from '@app/cli/handlers';
import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { parsersGenerator } from '@app/core/codeGenerators';
import { doesFileExist } from '@app/core/services/fileService';
import { IArgsJSON, IArgsOptions } from '@app/interfaces/args';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/args/parserDefs';

const parserCodePathLeaf = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/leaf.ts`;
const parserCodePathStem = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/stem.ts`;

describe('unit', () => {
	describe('cli', () => {
		describe('handlers', () => {
			describe('generateHandler', () => {
				describe('positive', () => {
					afterAll(() => {
						global.jestRemoveFileSync(parserCodePathLeaf);
						global.jestRemoveFileSync(parserCodePathStem);
					});
					test('should generate two code files', () => {
						/*
						 * Arrange
						 */
						const json = {
							parserDefs: [parserDefLeafPositive, parserDefStemPositive],
						} as IArgsJSON;
						const options = { preFlight: false } as IArgsOptions;

						/*
						 * Act
						 */
						const response = generateHandler({ json, options, generateCode: parsersGenerator });
						const { doesExist: doesExistParserCodeFileLeaf } = doesFileExist({
							filePath: parserCodePathLeaf,
						});
						const { doesExist: doesExistParserCodeFileStem } = doesFileExist({
							filePath: parserCodePathStem,
						});
						/*
						 * Assert
						 */
						expect(response).toBeUndefined();
						expect(doesExistParserCodeFileLeaf).toBe(true);
						expect(doesExistParserCodeFileStem).toBe(true);
					});
				});
			});
		});
	});
});
