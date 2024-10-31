import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { DefTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { DefModel, TemplateModel } from '@app/models';
import {
	DirService,
	TemplateFileNameService,
	TemplateFilePathService,
} from '@app/services/fileService';
import { ICommonBool, ICommonJsonDef, ICommonPathStr } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IModelTemplate } from '@app/interfaces/models/TemplateModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('TemplateModel', (): void => {
	describe('isValid', (): void => {
		describe('should return true', (): void => {
			test("when 'templatePathService' represents a valid template", (): void => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name: 'Test',
					type: DefTypeEnum.DEF_TYPE_ITER,
				});
				const defModel: IModelDef = DefModel({ jsonDef });
				const dirPathStr: ICommonPathStr = CONSTS_PATHS_TEMPLATES_DIR;
				const dirService: IFileServiceDir = DirService({ dirPathStr });
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;
				const fileNameService: IFileServiceFileName = TemplateFileNameService({
					defModel,
					templateTypeEnum,
				});
				const templatePathService: IFileServiceFilePath = TemplateFilePathService({
					dirService,
					fileNameService,
				});

				/*
				 * Act
				 */
				const templateModel: IModelTemplate = TemplateModel({ templatePathService });
				const response: ICommonBool = templateModel.isValid();

				/*
				 * Assert
				 */
				expect(response).toBe(true);
			});
		});
	});
});
