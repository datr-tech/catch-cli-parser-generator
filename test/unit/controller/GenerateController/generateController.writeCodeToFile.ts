import { GenerateController } from '@app/controllers';
import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DefTypeEnum, OutDirTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { DefModel } from '@app/models';
import {
	ICommonJson,
	ICommonJsonDef,
	ICommonJsonDir,
	ICommonNameStr,
	ICommonPathStr,
} from '@app/interfaces/common';
import {
	IControllerGenerate,
	IControllerGenerateFuncWriteCodeToFileOutput,
} from '@app/interfaces/controllers/GenerateController';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake, jsonDirFake } from '@test/doubles/fakes';

let filePath: ICommonPathStr;
let name: ICommonNameStr;

describe('GenerateController', (): void => {
	describe('writeCodeToFile', (): void => {
		describe('should return status = true', (): void => {
			beforeAll((): void => {
				name = `GenerateController.writeCodeToFile.${Date.now()}`;
				filePath = `${CONSTS_PATHS_APP_ROOT}/${name}Parser.ts`;
			});
			afterEach((): void => {
				global.jestRemoveFileSync(filePath);
			});
			test('when the code has been successfully written to file', (): void => {
				/*
				 * Arrange
				 */
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name,
					type: DefTypeEnum.DEF_TYPE_LEAF,
				});

				const jsonDirParsers: ICommonJsonDir = jsonDirFake({
					path: CONSTS_PATHS_APP_ROOT,
					type: OutDirTypeEnum.OUT_DIR_PARSERS,
				});

				const json: ICommonJson = {
					defs: [jsonDef],
					dirs: [jsonDirParsers],
				};
				const generateController: IControllerGenerate = GenerateController({ json });
				generateController.init();
				generateController.isValid();

				/*
				 * Act
				 */
				const defModel: IModelDef = DefModel({ jsonDef });
				const { status }: IControllerGenerateFuncWriteCodeToFileOutput =
					generateController.writeCodeToFile({
						defModel,
						templateTypeEnum,
					});

				/*
				 * Assert
				 */
				expect(status).toBe(true);
			});
		});
	});
});
