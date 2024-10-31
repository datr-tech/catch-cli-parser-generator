import { TemplateTypeEnum } from '@app/config/enums';
import { DefModel } from '@app/models';
import { CodeFileNameService } from '@app/services/fileService';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('CodeFileNameService', () => {
	describe('constructor', () => {
		describe('should throw an error', () => {
			test("when receiving a invalid 'defModel'", () => {
				/*
				 * Arrange
				 */
				const errorExpected = "Invalid 'defModel'";
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: undefined, useDefaultName: false });
				const defModel: IModelDef = DefModel({ jsonDef });
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;

				/*
				 * Act
				 */
				const handler = (): void => {
					CodeFileNameService({
						defModel,
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
