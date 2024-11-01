import { templateDirServiceBuilder } from '@app/builders';
import { ICommonBool, ICommonPathStr } from '@app/interfaces/common';
import { IFileServiceDir } from '@app/interfaces/services/fileService/DirService';

describe('templateDirServiceBuilder', (): void => {
	describe('build', (): void => {
		describe("should build a 'templateDirService'", (): void => {
			test("when using an unknown 'dirPathStr', though the resulting service will be invalid", (): void => {
				/*
				 * Arrange
				 */
				const isValidExpected = false;
				const dirPathStr: ICommonPathStr = 'INVALID_DIR';
				/*
				 * Act
				 */
				const dirService: IFileServiceDir = templateDirServiceBuilder.build({ dirPathStr });
				const isValidFound: ICommonBool = dirService.isValid();

				/*
				 * Assert
				 */
				expect(dirService).toBeTruthy();
				expect(isValidFound).toBe(isValidExpected);
			});
		});
	});
});
