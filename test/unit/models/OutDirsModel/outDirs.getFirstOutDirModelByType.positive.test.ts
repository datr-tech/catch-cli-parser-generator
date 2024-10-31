import { CONSTS_PATHS_APP_ROOT, CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirsModel } from '@app/models';
import { ICommonJson, ICommonJsonDef, ICommonPathStr } from '@app/interfaces/common';
import { IModelOutDirs } from '@app/interfaces/models/OutDirsModel';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('OutDirsModel', (): void => {
	describe('getFirstOutDirModelByType', (): void => {
		describe("should return the expected 'outDirModel'", (): void => {
			test("when the 'outDirTypeEnum' is 'OUT_DIR_PARSERS'", (): void => {
				/*
				 * Arrange
				 */
				const dirPathStrExpected: ICommonPathStr = CONSTS_PATHS_APP_ROOT;
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const json: ICommonJson = {
					defs: [jsonDef],
					dirs: [
						{
							path: CONSTS_PATHS_TEMPLATES_DIR,
							type: OutDirTypeEnum.OUT_DIR_INTERFACES,
						},
						{
							path: CONSTS_PATHS_TEMPLATES_DIR,
							type: OutDirTypeEnum.OUT_DIR_INTERFACES,
						},
						{
							path: CONSTS_PATHS_APP_ROOT,
							type: OutDirTypeEnum.OUT_DIR_PARSERS,
						},
					],
				};

				/*
				 * Act
				 */
				const outDirsModel: IModelOutDirs = OutDirsModel({ json });
				outDirsModel.isValid();
				const outDirModel: IFileServiceOutDir = outDirsModel.getFirstOutDirModelByType({
					outDirType: OutDirTypeEnum.OUT_DIR_PARSERS,
				});
				const dirPathStrFound: ICommonPathStr = outDirModel.getDirPath();

				/*
				 * Assert
				 */
				expect(dirPathStrFound).toBe(dirPathStrExpected);
			});
		});
	});
});
