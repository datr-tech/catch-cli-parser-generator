import { TemplateTypeEnum } from '@app/config/enums';
import { deriveFileNameCodeHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { FileNameService } from '@app/services/fileService';
import { ICommonBool, ICommonJsonDef } from '@app/interfaces/common';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('FileNameService', () => {
	describe('isValid', () => {
		describe('should return true', () => {
			test("having derived a valid 'fileNameStr'", () => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const defModel: IModelDef = DefModel({ jsonDef });
				const getFileNameHelper: IHelperDeriveFileName = deriveFileNameCodeHelper;
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;

				/*
				 * Act
				 */
				const fileNameService: IFileServiceFileName = FileNameService({
					defModel,
					getFileNameHelper,
					templateTypeEnum,
				});
				const isValidFound: ICommonBool = fileNameService.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(true);
			});
		});
	});
});
