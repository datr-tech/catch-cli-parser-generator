import { CodeModel } from '@app/models';
import { ICommonBool, ICommonCodeStr } from '@app/interfaces/common';
import { IModelCode } from '@app/interfaces/models/CodeModel';

describe('CodeModel', (): void => {
	describe('isValid', (): void => {
		describe('should return false', (): void => {
			test("when receiving an invalid 'codeStr'", (): void => {
				/*
				 * Arrange
				 */
				const codeStr: ICommonCodeStr = undefined;

				/*
				 * Act
				 */
				const codeModel: IModelCode = CodeModel({ codeStr });
				const isValidFound: ICommonBool = codeModel.isValid();

				/*
				 * Assert
				 */
				expect(isValidFound).toBe(false);
			});
		});
	});
});
