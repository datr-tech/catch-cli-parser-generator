import { OutDirTypeEnum } from '@app/config/enums';
import { OutDirService } from '@app/services/fileService';
import { ICommonPathStr } from '@app/interfaces/common';

describe('OutDirService', (): void => {
	describe('constructor', (): void => {
		describe('should throw the expected error', (): void => {
			test("when receiving an empty 'dirPathStr'", (): void => {
				/*
				 * Arrange
				 */
				const dirPathStr: ICommonPathStr = '';
				const outDirTypeEnum: OutDirTypeEnum = OutDirTypeEnum.OUT_DIR_INTERFACES;
				const errorExpected = "Invalid 'dirPathStr'";

				/*
				 * Act
				 */
				const handler = (): void => {
					OutDirService({
						dirPathStr,
						outDirTypeEnum,
					});
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
