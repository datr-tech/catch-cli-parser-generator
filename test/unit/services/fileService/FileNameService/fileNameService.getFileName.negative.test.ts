import { TemplateTypeEnum } from '@app/config/enums';
import { deriveFileNameCodeHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { FileNameService } from '@app/services/fileService';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('FileNameService', () => {
	describe('getFileName', () => {
		describe('should throw the expected error', () => {
			test("when 'isValid' has not been called", () => {
				/*
				 * Arrange
				 */
				const errorExpected = "Negative 'condition'";
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const defModel: IModelDef = DefModel({ jsonDef });
				const getFileNameHelper: IHelperDeriveFileName = deriveFileNameCodeHelper;
				const templateTypeEnum: TemplateTypeEnum =
					TemplateTypeEnum.TEMPLATE_TYPE_FOR_TESTING_PURPOSES_ONLY;
				const fileNameService: IFileServiceFileName = FileNameService({
					defModel,
					getFileNameHelper,
					templateTypeEnum,
				});

				/*
				 * Act
				 */
				const handler = () => {
					fileNameService.getFileName();
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
