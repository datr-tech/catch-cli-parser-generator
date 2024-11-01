import { codeTemplateModelsBuilder } from '@app/builders';
import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { DefTypeEnum, OutDirTypeEnum, TemplateTypeEnum } from '@app/config/enums';
import {
	ICommonErrorMessageStr,
	ICommonJsonDefPayloadIter,
	ICommonNameStr,
	ICommonPathStr,
} from '@app/interfaces/common';

let defTypeEnum: DefTypeEnum;
let jsonDefName: ICommonNameStr;
let jsonPayload: ICommonJsonDefPayloadIter;
let outDirTypeEnum: OutDirTypeEnum;
let outDirPath: ICommonPathStr;
let templateTypeEnum: TemplateTypeEnum;
let errorExpected: ICommonErrorMessageStr;

describe('codeTemplateModelsBuilder', (): void => {
	describe('build', (): void => {
		describe('should throw the expected error', (): void => {
			beforeAll((): void => {
				defTypeEnum = DefTypeEnum.DEF_TYPE_ITER;
				jsonPayload = {
					childParser: 'Child',
					parser: 'Test',
				};
				outDirTypeEnum = OutDirTypeEnum.OUT_DIR_PARSERS;
				templateTypeEnum = TemplateTypeEnum.TEMPLATE_TYPE_CODE_PARSER;
			});
			test("when receiving an invalid 'jsonDefName'", (): void => {
				/*
				 * Arrange
				 */
				jsonDefName = undefined;
				outDirPath = CONSTS_PATHS_APP_ROOT;
				errorExpected = "'jsonDefName' or 'outDirPath' is invalid";

				/*
				 * Act
				 */
				const handler = (): void => {
					codeTemplateModelsBuilder.build({
						defTypeEnum,
						jsonDefName,
						jsonPayload,
						outDirPath,
						outDirTypeEnum,
						templateTypeEnum,
					});
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
			test("when receiving an invalid 'outDirPath'", (): void => {
				/*
				 * Arrange
				 */
				jsonDefName = 'TEST_JSON_DEF_NAME';
				outDirPath = undefined;
				errorExpected = "'jsonDefName' or 'outDirPath' is invalid";

				/*
				 * Act
				 */
				const handler = (): void => {
					codeTemplateModelsBuilder.build({
						defTypeEnum,
						jsonDefName,
						jsonPayload,
						outDirPath,
						outDirTypeEnum,
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
