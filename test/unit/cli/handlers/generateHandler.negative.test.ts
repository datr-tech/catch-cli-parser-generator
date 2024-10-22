import { generateHandler } from '@app/cli/handlers';
import { ICliCommonGenerateOptions } from '@app/interfaces/cli/commands';
import { IDataJSON } from '@app/interfaces/data';
import { parserDefLeafPositive, parserDefStemPositive } from '@test/fixtures/data/parserDefs';
import { writer } from '@app/core/writers';

describe('unit', () => {
	describe('cli', () => {
		describe('handlers', () => {
			describe('generateHandler', () => {
				describe('negative', () => {
					test("should throw an error when the code files have not be written (when 'validate' returns false)", () => {
						/*
						 * Arrange
						 */
						const json = {
							parserDefs: [parserDefLeafPositive, parserDefStemPositive],
						} as IDataJSON;
						const options = { preFlight: false } as ICliCommonGenerateOptions;

						const errorExpected = 'At least one parser wrapper could not be written';
						const write = { ...writer };
						write.validate = () => false;

						/*
						 * Act
						 */
						const handler = () => {
							generateHandler({ json, options, write });
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
