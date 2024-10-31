import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirService } from '@app/services/fileService';
import { ICommonPathStr } from '@app/interfaces/common';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';

describe('OutDirService', (): void => {
	describe('constructor', (): void => {
		describe('should instantiate', (): void => {
			test("when receiving a 'dirPathStr' and  an 'outDirTypeEnum", (): void => {
				/*
				 * Arrange
				 */
				const dirPathStr: ICommonPathStr = CONSTS_PATHS_APP_ROOT;
				const outDirTypeEnum: OutDirTypeEnum = OutDirTypeEnum.OUT_DIR_INTERFACES;

				/*
				 * Act
				 */
				const outDirService: IFileServiceOutDir = OutDirService({
					dirPathStr,
					outDirTypeEnum,
				});

				/*
				 * Assert
				 */
				expect(outDirService).toBeTruthy();
			});
		});
	});
});
