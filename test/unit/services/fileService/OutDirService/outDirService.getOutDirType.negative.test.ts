import { CONSTS_PATHS_APP_ROOT } from '@app/config/consts/paths';
import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirService } from '@app/services/fileService';
import { ICommonPathStr } from '@app/interfaces/common';
import { IFileServiceOutDir } from '@app/interfaces/services/fileService/OutDirService';

describe('OutDirService', (): void => {
	describe('getOutDirType', (): void => {
		describe('should throw an error', (): void => {
			test("when 'isValid' is not called before 'getOutDirType'", (): void => {
				/*
				 * Arrange
				 */
				const dirPathStr: ICommonPathStr = CONSTS_PATHS_APP_ROOT;
				const outDirTypeEnumExpected: OutDirTypeEnum = OutDirTypeEnum.OUT_DIR_INTERFACES;
				const errorExpected = "Negative 'condition'";

				/*
				 * Act
				 */
				const outDirService: IFileServiceOutDir = OutDirService({
					dirPathStr,
					outDirTypeEnum: outDirTypeEnumExpected,
				});
				const handler = () => {
					outDirService.getOutDirType();
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
