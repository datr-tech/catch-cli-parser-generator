import { templateDirServiceBuilder } from '@app/builders';
import { CONSTS_PATHS_APP_ROOT, CONSTS_PATHS_TEMPLATES_DIR } from '@app/config/consts/paths';
import { ICommonBool, ICommonPathStr } from '@app/interfaces/common';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';

describe('templateDirServiceBuilder', (): void => {
	describe('build', (): void => {
		describe("should build a 'templateDirService'", (): void => {
			test("when using the default 'dirPathStr'", (): void => {
				/*
				 * Arrange
				 */
				const isValidExpected = true;
				const dirPathStrExpected: ICommonPathStr = CONSTS_PATHS_TEMPLATES_DIR;
				/*
				 * Act
				 */
				const dirService: IFileServiceDir = templateDirServiceBuilder.build();
				const isValidFound: ICommonBool = dirService.isValid();
				const dirPathStrFound: ICommonPathStr = dirService.getDirPath();

				/*
				 * Assert
				 */
				expect(dirService).toBeTruthy();
				expect(isValidFound).toBe(isValidExpected);
				expect(dirPathStrFound).toBe(dirPathStrExpected);
			});
			test("when using a specified 'dirPathStr'", (): void => {
				/*
				 * Arrange
				 */
				const isValidExpected = true;
				const dirPathStrExpected: ICommonPathStr = CONSTS_PATHS_APP_ROOT;
				/*
				 * Act
				 */
				const dirService: IFileServiceDir = templateDirServiceBuilder.build({
					dirPathStr: dirPathStrExpected,
				});
				const isValidFound: ICommonBool = dirService.isValid();
				const dirPathStrFound: ICommonPathStr = dirService.getDirPath();

				/*
				 * Assert
				 */
				expect(dirService).toBeTruthy();
				expect(isValidFound).toBe(isValidExpected);
				expect(dirPathStrFound).toBe(dirPathStrExpected);
			});
		});
	});
});
