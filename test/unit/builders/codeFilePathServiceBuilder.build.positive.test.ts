import { codeFilePathServiceBuilder } from '@app/builders';
import { templateTypeHelper } from '@app/helpers';
import { ICommonBool } from '@app/interfaces/common';
import { IHelperTemplateType } from '@app/interfaces/helpers';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';
import { codeFilePathServiceBuilderFixture } from '@test/fixtures/helpers';

describe('codeFilePathServiceBuilder', (): void => {
	describe('build', (): void => {
		describe("should build a 'codeFilePathService'", (): void => {
			test("when receiving a 'defModel', an 'outDirsModel' and a 'templateTypeEnum'", (): void => {
				/*
				 * Arrange
				 */
				const { defModelValid, outDirsModelValid, templateTypeEnum } =
					codeFilePathServiceBuilderFixture;
				const isValidExpected = true;

				/*
				 * Act
				 */
				const codeFilePathService: IFileServiceFilePath = codeFilePathServiceBuilder.build({
					defModel: defModelValid,
					outDirsModel: outDirsModelValid,
					templateTypeEnum,
				});
				const isValidFound: ICommonBool = codeFilePathService.isValid();

				/*
				 * Assert
				 */
				expect(codeFilePathService).toBeTruthy();
				expect(isValidFound).toBe(isValidExpected);
			});
			test("when the optional 'templateHelper' is also received", (): void => {
				/*
				 * Arrange
				 */
				const isValidExpected = true;
				const templateHelper: IHelperTemplateType = templateTypeHelper;
				const { defModelValid, outDirsModelValid, templateTypeEnum } =
					codeFilePathServiceBuilderFixture;

				/*
				 * Act
				 */
				const codeFilePathService: IFileServiceFilePath = codeFilePathServiceBuilder.build({
					defModel: defModelValid,
					outDirsModel: outDirsModelValid,
					templateTypeEnum,
					templateHelper,
				});
				const isValidFound: ICommonBool = codeFilePathService.isValid();

				/*
				 * Assert
				 */
				expect(codeFilePathService).toBeTruthy();
				expect(isValidFound).toBe(isValidExpected);
			});
		});
	});
});
