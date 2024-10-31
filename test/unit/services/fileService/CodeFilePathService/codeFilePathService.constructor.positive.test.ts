import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { DefTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { deriveFileNameCodeHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { CodeFilePathService, DirService, FileNameService } from '@app/services/fileService';
import { ICommonJsonDef, ICommonPathStr } from '@app/interfaces/common';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('CodeFilePathService', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test("when receiving valid 'dirService' and 'fileNameService' objects", (): void => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name: 'TEST_JSON_DEF',
					type: DefTypeEnum.DEF_TYPE_ITER,
				});
				const defModel: IModelDef = DefModel({ jsonDef });
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;
				const getFileNameHelper: IHelperDeriveFileName = deriveFileNameCodeHelper;
				const fileNameService: IFileServiceFileName = FileNameService({
					defModel,
					getFileNameHelper,
					templateTypeEnum,
				});
				const dirPathStr: ICommonPathStr = CONSTS_PATHS_TEMPLATES_DIR;
				const dirService: IFileServiceDir = DirService({ dirPathStr });

				/*
				 * Act
				 */
				const codeFilePathService: IFileServiceFilePath = CodeFilePathService({
					dirService,
					fileNameService,
				});

				/*
				 * Assert
				 */
				expect(codeFilePathService).toBeTruthy();
			});
		});
	});
});
