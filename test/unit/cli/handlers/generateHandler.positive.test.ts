import { generateHandler } from '@app/cli/handlers';
import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { generateCode } from '@app/core/generators';
import { doesFileExist } from '@app/core/services/fileService';
import { ICliCommonGenerateOptions } from '@app/interfaces/cli/commands';
import { IDataJSON } from '@app/interfaces/data';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/data/parserDefs';

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
						} as IDataJSON;
						const options = { preFlight: false } as ICliCommonGenerateOptions;

						/*
						 * Act
						 */
						const response = generateHandler({ json, options, generator: generateCode });
						const { doesExist: doesExistParserCodeFileLeaf } = doesFileExist({
							path: parserCodePathLeaf,
						});
						const { doesExist: doesExistParserCodeFileStem } = doesFileExist({
							path: parserCodePathStem,
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
