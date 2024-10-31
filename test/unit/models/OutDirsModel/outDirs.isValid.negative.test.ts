import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirsModel } from '@app/models';
import { ICommonBool, ICommonJson, ICommonJsonDef } from '@app/interfaces/common';
import { IModelOutDirs } from '@app/interfaces/models/OutDirsModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('OutDirsModel', (): void => {
	describe('isValid', (): void => {
		describe('should return false', (): void => {
			test("when there are no 'child' 'outDirs', because 'json.dirs' is undefined", (): void => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const json: ICommonJson = {
					defs: [jsonDef],
					dirs: undefined,
				};

				/*
				 * Act
				 */
				const outDirsModel: IModelOutDirs = OutDirsModel({ json });
				const isValidFound: ICommonBool = outDirsModel.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(false);
			});
			test("when there are no 'child' 'outDirs', because 'json.dirs' is an empty array", (): void => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const json: ICommonJson = {
					defs: [jsonDef],
					dirs: [],
				};

				/*
				 * Act
				 */
				const outDirsModel: IModelOutDirs = OutDirsModel({ json });
				const isValidFound: ICommonBool = outDirsModel.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(false);
			});
			test("when one or more of the 'child' 'outDirs' are invalid", (): void => {
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
							path: 'AN_INVALID_UNKNOWN_PATH',
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
				expect(isValidFound).toBe(false);
			});
		});
	});
});
