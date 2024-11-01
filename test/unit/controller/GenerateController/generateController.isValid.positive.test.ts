import { GenerateController } from '@app/controllers';
import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { OutDirTypeEnum } from '@app/config/enums';
import { ICommonBool, ICommonJson, ICommonJsonDef, ICommonJsonDir } from '@app/interfaces/common';
import { IControllerGenerate } from '@app/interfaces/controllers/GenerateController';
import { jsonDefFake, jsonDirFake } from '@test/doubles/fakes';

describe('GenerateController', (): void => {
	describe('isValid', (): void => {
		describe('should return true', (): void => {
			test("when called after 'init'", (): void => {
				/*
				 * Arrange
				 */
				const isValidExpected = true;
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'JSON_DEFS' });
				const jsonDir: ICommonJsonDir = jsonDirFake({
					path: CONSTS_PATHS_APP_ROOT,
					type: OutDirTypeEnum.OUT_DIR_PARSERS,
				});
				const json: ICommonJson = {
					defs: [jsonDef],
					dirs: [jsonDir],
				};

				/*
				 * Act
				 */
				const generateController: IControllerGenerate = GenerateController({ json });
				generateController.init();
				const isValidFound: ICommonBool = generateController.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(isValidExpected);
			});
		});
	});
});
