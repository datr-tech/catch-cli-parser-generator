import { OutDirsModel } from '@app/models';
import { ICommonJson, ICommonJsonDef } from '@app/interfaces/common';
import { IModelOutDirs } from '@app/interfaces/models/OutDirsModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('OutDirsModel', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test("when receiving a 'json' object describing no dirs", (): void => {
				/*
				 * Arrange
				 */
				const numOutDirModelsExpected = 0;
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const json: ICommonJson = {
					defs: [jsonDef],
					dirs: [],
				};

				/*
				 * Act
				 */
				const outDirsModel: IModelOutDirs = OutDirsModel({ json });
				const numOutDirModelsFound: number = outDirsModel.getNumOutDirModels();

				/*
				 * Assert
				 */
				expect(outDirsModel).toBeTruthy();
				expect(numOutDirModelsFound).toBe(numOutDirModelsExpected);
			});
			test("when 'json.dirs' is undefined", (): void => {
				/*
				 * Arrange
				 */
				const numOutDirModelsExpected = 0;
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const json: ICommonJson = {
					defs: [jsonDef],
					dirs: undefined,
				};

				/*
				 * Act
				 */
				const outDirsModel: IModelOutDirs = OutDirsModel({ json });
				const numOutDirModelsFound: number = outDirsModel.getNumOutDirModels();

				/*
				 * Assert
				 */
				expect(outDirsModel).toBeTruthy();
				expect(numOutDirModelsFound).toBe(numOutDirModelsExpected);
			});
		});
	});
});
