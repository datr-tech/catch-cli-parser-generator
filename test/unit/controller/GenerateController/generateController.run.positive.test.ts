import { GenerateController } from '@app/controllers';
import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DefTypeEnum, OutDirTypeEnum } from '@app/config/enums';
import {
	ICommonJson,
	ICommonJsonDef,
	ICommonJsonDir,
	ICommonNameStr,
	ICommonPathStr,
} from '@app/interfaces/common';
import { IModelCodeFuncWriteCodeToFileOutput } from '@app/interfaces/models/CodeModel';
import {
	IControllerGenerate,
	IControllerGenerateFuncWriteCodeToFileOutput,
} from '@app/interfaces/controllers/GenerateController';
import { jsonDefFake, jsonDirFake } from '@test/doubles/fakes';

const filePaths: ICommonPathStr[] = [];
let name: ICommonNameStr;

describe('GenerateController', (): void => {
	describe('run', (): void => {
		describe('should return status = true', (): void => {
			beforeAll((): void => {
				name = `GenerateController.run.${Date.now()}`;
				filePaths.push(`${CONSTS_PATHS_APP_ROOT}/${name}Parser.ts`);
				filePaths.push(`${CONSTS_PATHS_APP_ROOT}/IParse${name}.ts`);
				filePaths.push(`${CONSTS_PATHS_APP_ROOT}/IParse${name}Output.ts`);
				filePaths.push(`${CONSTS_PATHS_APP_ROOT}/IParser${name}.ts`);
			});
			afterEach((): void => {
				filePaths.forEach((filePath: ICommonPathStr): void => {
					global.jestRemoveFileSync(filePath);
				});
			});
			test('when the code has been successfully written to file', (): void => {
				/*
				 * Arrange
				 */
				const numWrittenToFileExpected = 4;
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name,
					type: DefTypeEnum.DEF_TYPE_ITER,
				});

				const jsonDirInterfaces: ICommonJsonDir = jsonDirFake({
					path: CONSTS_PATHS_APP_ROOT,
					type: OutDirTypeEnum.OUT_DIR_INTERFACES,
				});

				const jsonDirParsers: ICommonJsonDir = jsonDirFake({
					path: CONSTS_PATHS_APP_ROOT,
					type: OutDirTypeEnum.OUT_DIR_PARSERS,
				});

				const json: ICommonJson = {
					defs: [jsonDef],
					dirs: [jsonDirInterfaces, jsonDirParsers],
				};

				const generateController: IControllerGenerate = GenerateController({ json });
				generateController.init();
				generateController.isValid();

				/*
				 * Act
				 */
				const haveBeenWritten: IControllerGenerateFuncWriteCodeToFileOutput[] =
					generateController.run();
				const numWrittenToFileFound: number = haveBeenWritten.filter(
					({ status }: IModelCodeFuncWriteCodeToFileOutput): boolean => status === true,
				).length;

				/*
				 * Assert
				 */
				expect(numWrittenToFileFound).toBe(numWrittenToFileExpected);
			});
		});
	});
});
