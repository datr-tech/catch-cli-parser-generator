import { generateHandler } from '@app/cli/handlers';
import { ICliCommonGenerateOptions } from '@app/interfaces/cli/commands';
import { IDataJSON } from '@app/interfaces/data';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/data/parserDefs';

describe('unit', () => {
	describe('cli', () => {
		describe('handlers', () => {
			describe('generateHandler', () => {
				describe('negative: parserOutDir', () => {
					test('should throw an error when the code files have not be written to a non-existent dir', () => {
						/*
						 * Arrange
						 */
						const timestamp = Date.now();
						const parserOutDir = `/${timestamp}`;
						const json = {
							parserDefs: [parserDefLeafPositive, parserDefStemPositive],
							out: {
								parserOutDir,
							},
						} as IDataJSON;
						const options = { preFlight: false } as ICliCommonGenerateOptions;

						const errorExpected = "code' could not be written to 'path'";

						/*
						 * Act
						 */
						const handler = () => {
							generateHandler({ json, options });
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
