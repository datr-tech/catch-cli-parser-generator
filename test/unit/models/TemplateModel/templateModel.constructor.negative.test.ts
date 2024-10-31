import { CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { TemplateTypeEnum } from '@app/config/enums';
import { DefModel, TemplateModel } from '@app/models';
import {
	DirService,
	TemplateFileNameService,
	TemplateFilePathService,
} from '@app/services/fileService';
import { ICommonBool, ICommonJsonDef, ICommonPathStr } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('TemplateModel', (): void => {
	describe('constructor', (): void => {
		describe('should throw an error', (): void => {
			test("when 'templatePathService' is invalid", (): void => {
				/*
				 * Arrange
				 */
				const dirPathStr: ICommonPathStr = CONSTS_PATHS_TEMPLATES_DIR;
				const dirService: IFileServiceDir = DirService({ dirPathStr });
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'Test' });
				const defModel: IModelDef = DefModel({ jsonDef });
				const fileNameService: IFileServiceFileName = TemplateFileNameService({
					defModel,
					templateTypeEnum,
				});
				const templatePathService: IFileServiceFilePath = TemplateFilePathService({
					dirService,
					fileNameService,
				});
				templatePathService.isValid = (): ICommonBool => false;
				const errorExpected = "Invalid 'templatePathService'";

				/*
				 * Act
				 */
				const handler = () => {
					TemplateModel({ templatePathService });
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
