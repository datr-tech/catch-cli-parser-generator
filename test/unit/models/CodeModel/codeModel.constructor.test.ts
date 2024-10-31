import { CodeModel } from '@app/models';
import { ICommonCodeStr } from '@app/interfaces/common';
import { IModelCode } from '@app/interfaces/models/CodeModel';

describe('CodeModel', () => {
	describe('constructor', () => {
		describe('should instantiate', () => {
			test("when receiving a 'codeStr'", () => {
				/*
				 * Arrange
				 */
				const codeStr: ICommonCodeStr = 'TEST_CODE_STR';

				/*
				 * Act
				 */
				const codeModel: IModelCode = CodeModel({ codeStr });

				/*
				 * Assert
				 */
				expect(codeModel).toBeTruthy();
			});
		});
	});
});
