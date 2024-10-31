import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirService } from '@app/services/fileService';
import { ICommonPathStr } from '@app/interfaces/common';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';

describe('OutDirService', (): void => {
	describe('getDirPath', (): void => {
		describe("should return the expected 'dirPathStr'", (): void => {
			test("when 'getDirPath' is called after 'isValid'", (): void => {
				/*
				 * Arrange
				 */
				const dirPathStrExpected: ICommonPathStr = CONSTS_PATHS_APP_ROOT;
				const outDirTypeEnum: OutDirTypeEnum = OutDirTypeEnum.OUT_DIR_INTERFACES;

				/*
				 * Act
				 */
				const outDirService: IFileServiceOutDir = OutDirService({
					dirPathStr: dirPathStrExpected,
					outDirTypeEnum,
				});
				outDirService.isValid();
				const dirPathStrFound: ICommonPathStr = outDirService.getDirPath();

				/*
				 * Assert
				 */
				expect(dirPathStrFound).toBe(dirPathStrExpected);
			});
		});
	});
});
