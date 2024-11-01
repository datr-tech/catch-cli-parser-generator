import { TemplateTypeEnum } from '@app/config/enums';
import { DefModel } from '@app/models';
import { FileNameService } from '@app/services/fileService';
import { ICommonBool, ICommonJsonDef } from '@app/interfaces/common';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { jsonDefFake } from '@test/doubles/fakes';
import { getFileNameHelperMock } from '@test/doubles/mocks';

describe('FileNameService', () => {
	describe('isValid', () => {
		describe('should return false', () => {
			test("having derived an empty 'fileNameStr' (when using a mocked version of 'getFileNameHelper')", () => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const defModel: IModelDef = DefModel({ jsonDef });
				const getFileNameHelper: IHelperDeriveFileName = getFileNameHelperMock;
				const templateTypeEnum: TemplateTypeEnum =
					TemplateTypeEnum.TEMPLATE_TYPE_FOR_TESTING_PURPOSES_ONLY;

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
				expect(isValidFound).toBe(false);
			});
		});
	});
});
