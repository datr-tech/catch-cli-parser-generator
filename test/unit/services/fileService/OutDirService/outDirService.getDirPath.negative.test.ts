import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirService } from '@app/services/fileService';
import { ICommonPathStr } from '@app/interfaces/common';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';

describe('OutDirService', (): void => {
	describe('getDirPath', (): void => {
		describe('should throw an error', (): void => {
			test("when 'isValid' is not called before 'getDirPath'", (): void => {
				/*
				 * Arrange
				 */
				const errorExpected = "Negative 'condition'";
				const dirPathStrExpected: ICommonPathStr = CONSTS_PATHS_APP_ROOT;
				const outDirTypeEnum: OutDirTypeEnum = OutDirTypeEnum.OUT_DIR_INTERFACES;

				/*
				 * Act
				 */
				const outDirService: IFileServiceOutDir = OutDirService({
					dirPathStr: dirPathStrExpected,
					outDirTypeEnum,
				});
				const handler = () => {
					outDirService.getDirPath();
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
