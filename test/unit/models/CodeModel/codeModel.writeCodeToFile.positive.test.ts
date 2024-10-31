import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { TemplateTypeEnum } from '@app/config/enums';
import { CodeModel, DefModel } from '@app/models';
import { CodeFileNameService, CodeFilePathService, DirService } from '@app/services/fileService';
import {
	ICommonCodeStr,
	ICommonJsonDef,
	ICommonNameStr,
	ICommonPathStr,
} from '@app/interfaces/common';
import { IModelCode } from '@app/interfaces/models/CodeModel';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';
import { jsonDefFake } from '@test/doubles/fakes';

let filePath: ICommonPathStr;

describe('CodeModel', (): void => {
	describe('writeCodeToFile', (): void => {
		describe('should write the expected code', (): void => {
			beforeAll((): void => {
				filePath = `${CONSTS_PATHS_APP_ROOT}/TestParser.ts`;
			});
			afterAll((): void => {
				global.jestRemoveFileSync(filePath);
			});
			test("when receiving valid 'codeStr' and 'codeFilePathService' params", (): void => {
				/*
				 * Arrange
				 */
				const codeStrExpected: ICommonCodeStr = 'TEST_CODE_STR';
				const name: ICommonNameStr = 'Test';
				const jsonDef: ICommonJsonDef = jsonDefFake({ name });
				const defModel: IModelDef = DefModel({ jsonDef });
				const dirPathStr: ICommonPathStr = CONSTS_PATHS_APP_ROOT;
				const dirService: IFileServiceDir = DirService({ dirPathStr });
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;
				const codeFileNameService: IFileServiceFileName = CodeFileNameService({
					defModel,
					templateTypeEnum,
				});
				const codeFilePathService: IFileServiceFilePath = CodeFilePathService({
					dirService,
					fileNameService: codeFileNameService,
				});

				/*
				 * Act
				 */
				const codeModel: IModelCode = CodeModel({ codeStr: codeStrExpected });
				codeModel.isValid();
				const response: void = codeModel.writeCodeToFile({ codeFilePathService });
				const codeStrFound: ICommonCodeStr = global.jestReadFileSync(filePath);

				/*
				 * Assert
				 */
				expect(response).toBeUndefined();
				expect(codeStrFound).toBe(codeStrExpected);
			});
		});
	});
});
