import { deriveFileNameTemplateHelper } from '@app/helpers';
import { DefTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { CodeFilePathService, DirService, FileNameService } from '@app/services/fileService';
import { DefModel } from '@app/models';
import { ICommonJsonDef, ICommonPathStr } from '@app/interfaces/common';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('CodeFilePathService', (): void => {
	describe('constructor', (): void => {
		describe('should throw an error', (): void => {
			test("when receiving an invalid 'dirService'", (): void => {
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
				const dirPathStr: ICommonPathStr = 'UNKNOWN_DIR';
				const dirService: IFileServiceDir = DirService({ dirPathStr });
				const errorExpected = "Either 'dirService' or 'fileNameService' is invalid";

				/*
				 * Act
				 */
				const handler = (): void => {
					CodeFilePathService({
						dirService,
						fileNameService,
					});
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
