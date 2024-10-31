import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DefTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { deriveFileNameCodeHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { DirService, FileNameService, FilePathService } from '@app/services/fileService';
import { ICommonJsonDef, ICommonPathStr } from '@app/interfaces/common';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';
import { jsonDefFake } from '@test/doubles/fakes';

const jsonDef: ICommonJsonDef = jsonDefFake({
	name: 'TEST_JSON_DEF',
	type: DefTypeEnum.DEF_TYPE_ITER,
});

describe('FilePathService', (): void => {
	describe('getFilePath', (): void => {
		describe('should throw an error', (): void => {
			test("when failing to call 'isValid' before 'getFilePath", (): void => {
				/*
				 * Arrange
				 */
				const errorExpected = "Negative 'condition'";
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;
				const getFileNameHelper: IHelperDeriveFileName = deriveFileNameCodeHelper;
				const defModel: IModelDef = DefModel({ jsonDef });
				const fileNameService: IFileServiceFileName = FileNameService({
					defModel,
					getFileNameHelper,
					templateTypeEnum,
				});
				const dirPathStr: ICommonPathStr = CONSTS_PATHS_APP_ROOT;
				const dirService: IFileServiceDir = DirService({ dirPathStr });

				/*
				 * Act
				 */
				const shouldFileCurrentlyExist = false;
				const filePathService: IFileServiceFilePath = FilePathService({
					dirService,
					fileNameService,
					shouldFileCurrentlyExist,
				});
				const handler = (): void => {
					filePathService.getFilePath();
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
