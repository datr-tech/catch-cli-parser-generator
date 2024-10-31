import { TemplateTypeEnum } from '@app/config/enums';
import { deriveFileNameCodeHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { FileNameService } from '@app/services/fileService';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IHelperDeriveFileName } from '@app/interfaces/helpers';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('FileNameService', () => {
	describe('constructor', () => {
		describe('should throw an error', () => {
			test("when receiving an in valid 'defModel'", () => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: undefined, useDefaultName: false });
				const defModel: IModelDef = DefModel({ jsonDef });
				const getFileNameHelper: IHelperDeriveFileName = deriveFileNameCodeHelper;
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;
				const errorExpected = "Invalid 'defModel'";

				/*
				 * Act
				 */
				const handler = (): void => {
					FileNameService({
						defModel,
						getFileNameHelper,
						templateTypeEnum,
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
