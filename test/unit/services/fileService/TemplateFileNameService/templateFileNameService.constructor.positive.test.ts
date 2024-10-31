import { TemplateTypeEnum } from '@app/config/enums';
import { DefModel } from '@app/models';
import { TemplateFileNameService } from '@app/services/fileService';
import { ICommonJsonDef } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { jsonDefFake } from '@test/doubles/fakes';

describe('TemplateFileNameService', () => {
	describe('constructor', () => {
		describe('should instantiate', () => {
			test("when receiving a valid 'defModel' and a 'templateTypeEnum", () => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({ name: 'TEST_JSON_DEF' });
				const defModel: IModelDef = DefModel({ jsonDef });
				const templateTypeEnum: TemplateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;

				/*
				 * Act
				 */
				const templateFileNameService: IFileServiceFileName = TemplateFileNameService({
					defModel,
					templateTypeEnum,
				});

				/*
				 * Assert
				 */
				expect(templateFileNameService).toBeTruthy();
			});
		});
	});
});
