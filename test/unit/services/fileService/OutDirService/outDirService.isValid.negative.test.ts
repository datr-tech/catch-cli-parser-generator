import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirService } from '@app/services/fileService';
import { ICommonBool, ICommonPathStr } from '@app/interfaces/common';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';

describe('OutDirService', (): void => {
	describe('isValid', (): void => {
		describe('should return false', (): void => {
			test("when an invalid 'dirService' has been constructed (within the OutDirService) from the received 'dirPathStr'", (): void => {
				/*
				 * Arrange
				 */
				const dirPathStr: ICommonPathStr = 'UNKNOWN_DIR';
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
				expect(isValidFound).toBe(false);
			});
		});
	});
});
