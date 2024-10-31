import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { DefTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { deriveFileNameTemplateHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { DirService, FileNameService, TemplateFilePathService } from '@app/services/fileService';
import { ICommonBool, ICommonJsonDef, ICommonPathStr } from '@app/interfaces/common';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('TemplateFilePathService', (): void => {
	describe('isValid', (): void => {
		describe('should return true', (): void => {
			test('when the expected template has been found', (): void => {
				/*
				 * Arrange
				 */
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name: 'TEST_JSON_DEF',
					type: DefTypeEnum.DEF_TYPE_ITER,
				});
				const defModel: IModelDef = DefModel({ jsonDef });
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
				const isValidFound: ICommonBool = templateFilePathService.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(true);
			});
		});
	});
});
