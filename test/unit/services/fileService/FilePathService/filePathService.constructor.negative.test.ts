import { DefTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import { deriveFileNameCodeHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { DirService, FileNameService, FilePathService } from '@app/services/fileService';
import { ICommonErrorMessageStr, ICommonJsonDef, ICommonPathStr } from '@app/interfaces/common';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceDir } from 'src/interfaces/services/fileService/DirService';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('FilePathService', (): void => {
	describe('constructor', (): void => {
		describe('should throw an error', (): void => {
			test("when receiving an invalid 'dirService', as a consequence of an unknown 'dirPathStr'", (): void => {
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
				const dirPathStr: ICommonPathStr = 'UNKNOWN_DIR';
				const dirService: IFileServiceDir = DirService({ dirPathStr });
				const errorExpected: ICommonErrorMessageStr =
					"Either 'dirService' or 'fileNameService' is invalid";

				/*
				 * Act
				 */
				const shouldFileCurrentlyExist = false;
				const handler = (): void => {
					FilePathService({
						dirService,
						fileNameService,
						shouldFileCurrentlyExist,
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
