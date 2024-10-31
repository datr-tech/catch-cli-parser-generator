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

describe('CodeModel', (): void => {
	describe('writeCodeToFile', (): void => {
		describe('should throw the expected error', (): void => {
			test("when not calling 'isValid' before 'writeCodeToFile'", (): void => {
				/*
				 * Arrange
				 */
				const errorExpected = "Negative 'condition'";
				const testName: ICommonNameStr = 'Test';
				const codeStrExpected: ICommonCodeStr = 'TEST_CODE_STR';
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: testName });
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
				const handler = (): void => {
					codeModel.writeCodeToFile({ codeFilePathService });
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
