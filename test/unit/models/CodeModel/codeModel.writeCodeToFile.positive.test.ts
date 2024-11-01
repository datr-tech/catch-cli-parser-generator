import { ICommonCodeStr, ICommonPathStr } from '@app/interfaces/common';
import { codeModelFixture } from '@test/fixtures/models';
import { IFixtureCodeModel } from '@test/interfaces/fixtures/models';

let filePath: ICommonPathStr;

describe('CodeModel', (): void => {
	describe('writeCodeToFile', (): void => {
		describe('should write the expected code to the expected temporary file (per iteration)', (): void => {
			afterEach((): void => {
				if (filePath) {
					global.jestRemoveFileSync(filePath);
				}
			});
			test.each(codeModelFixture)(
				"for $description with a 'type' value $type",
				({ codeFilePathService, codeModel, writtenCodeExpected }: IFixtureCodeModel): void => {
					/*
					 * Arrange
					 */
					codeFilePathService.isValid();
					codeModel.isValid();
					filePath = codeFilePathService.getFilePath();

					/*
					 * Act
					 */
					const { message, status } = codeModel.writeCodeToFile({
						codeFilePathService,
					});
					const writtenCodeFound: ICommonCodeStr = global.jestReadFileSync(filePath);

					/*
					 * Assert
					 */
					expect(message).toBe(filePath);
					expect(status).toBe(true);
					expect(writtenCodeFound).toBe(writtenCodeExpected);
				},
			);
		});
	});
});
