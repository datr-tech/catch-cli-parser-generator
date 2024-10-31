import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { DefTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { deriveFileNameTemplateHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { DirService, FileNameService, TemplateFilePathService } from '@app/services/fileService';
import { ICommonJsonDef, ICommonPathStr } from '@app/interfaces/common';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('TemplateFilePathService', (): void => {
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
				const getFileNameHelper: IHelperDeriveFileName = deriveFileNameTemplateHelper;
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
				const templateFilePathService: IFileServiceFilePath = TemplateFilePathService({
					dirService,
					fileNameService,
				});

				/*
				 * Assert
				 */
				expect(templateFilePathService).toBeTruthy();
			});
		});
	});
});
