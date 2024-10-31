import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirService } from '@app/services/fileService';
import { ICommonBool, ICommonPathStr } from '@app/interfaces/common';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';

describe('OutDirService', (): void => {
	describe('isValid', (): void => {
		describe('should return true', (): void => {
			test("when a valid 'dirService' has been constructed (within the OutDirService) from the received 'dirPathStr'", (): void => {
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
				const isValidFound: ICommonBool = outDirService.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(true);
			});
		});
	});
});
