import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirsModel } from '@app/models';
import { ICommonBool, ICommonJson, ICommonJsonDef } from '@app/interfaces/common';
import { IModelOutDirs } from '@app/interfaces/models/OutDirsModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('OutDirsModel', (): void => {
	describe('isValid', (): void => {
		describe('should return true', (): void => {
			test("when the single 'child' 'outDir' is valid", (): void => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const json: ICommonJson = {
					defs: [jsonDef],
					dirs: [
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
				const isValidFound: ICommonBool = outDirsModel.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(true);
			});
			test("when the 'child' 'outDirs' are valid", (): void => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const json: ICommonJson = {
					defs: [jsonDef],
					dirs: [
						{
							path: CONSTS_PATHS_APP_ROOT,
							type: OutDirTypeEnum.OUT_DIR_PARSERS,
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
				const isValidFound: ICommonBool = outDirsModel.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(true);
			});
		});
	});
});
