import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirService } from '@app/services/fileService';
import { ICommonPathStr } from '@app/interfaces/common';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';

describe('OutDirService', (): void => {
	describe('getOutDirType', (): void => {
		describe("should return the expected 'outDirTypeEnum'", (): void => {
			test("when 'getOutDirType' is called after 'isValid'", (): void => {
				/*
				 * Arrange
				 */
				const dirPathStr: ICommonPathStr = CONSTS_PATHS_APP_ROOT;
				const outDirTypeEnumExpected: OutDirTypeEnum = OutDirTypeEnum.OUT_DIR_INTERFACES;

				/*
				 * Act
				 */
				const outDirService: IFileServiceOutDir = OutDirService({
					dirPathStr,
					outDirTypeEnum: outDirTypeEnumExpected,
				});
				outDirService.isValid();
				const outDirTypeEnumFound: OutDirTypeEnum = outDirService.getOutDirType();

				/*
				 * Assert
				 */
				expect(outDirTypeEnumFound).toBe(outDirTypeEnumExpected);
			});
		});
	});
});
