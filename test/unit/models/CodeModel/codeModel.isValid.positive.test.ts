import { CodeModel } from '@app/models';
import { ICommonBool, ICommonCodeStr } from '@app/interfaces/common';
import { IModelCode } from '@app/interfaces/models/CodeModel';

describe('CodeModel', (): void => {
	describe('isValid', (): void => {
		describe('should return true', (): void => {
			test("when receiving a valid 'codeStr'", (): void => {
				/*
				 * Arrange
				 */
				const codeStr: ICommonCodeStr = 'TEST_CODE_STR';

				/*
				 * Act
				 */
				const codeModel: IModelCode = CodeModel({ codeStr });
				const isValidFound: ICommonBool = codeModel.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(true);
			});
		});
	});
});
