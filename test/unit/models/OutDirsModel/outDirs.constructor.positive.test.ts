import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirsModel } from '@app/models';
import { ICommonJson, ICommonJsonDef } from '@app/interfaces/common';
import { IModelOutDirs } from '@app/interfaces/models/OutDirsModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('OutDirsModel', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test("when receiving a 'json' object describing two dirs", (): void => {
				/*
				 * Arrange
				 */
				const numOutDirModelsExpected = 2;
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const json: ICommonJson = {
					defs: [jsonDef],
					dirs: [
						{
							path: 'TEST_PATH_ONE',
							type: OutDirTypeEnum.OUT_DIR_PARSERS,
						},
						{
							path: 'TEST_PATH_TWO',
							type: OutDirTypeEnum.OUT_DIR_INTERFACES,
						},
					],
				};

				/*
				 * Act
				 */
				const outDirsModel: IModelOutDirs = OutDirsModel({ json });
				const numOutDirModelsFound: number = outDirsModel._getNumOutDirModels();

				/*
				 * Assert
				 */
				expect(outDirsModel).toBeTruthy();
				expect(numOutDirModelsFound).toBe(numOutDirModelsExpected);
			});
		});
	});
});
