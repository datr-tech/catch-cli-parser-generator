import { jsonStrParserHelper } from '@app/helpers';
import { ICommonJson, ICommonJsonDef, ICommonJsonDir, ICommonJsonStr } from '@app/interfaces/common';
import { jsonDefFake, jsonDirFake } from '@test/doubles/fakes';


describe('jsonStrParserHelper', (): void => {
	describe("should throw the expected error", (): void => {
		test("when 'jsonStr' is undefined", (): void => {
			/*
			 * Arrange
			 */
			const errorExpected = "Invalid 'jsonStr'";
			const jsonStr: ICommonJsonStr = undefined;

			/*
			 * Act
			 */
			const handler = (): void => {
				jsonStrParserHelper({ jsonStr });
			}

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'jsonObj' does not contain a valid 'defs' property", (): void => {
			/*
			 * Arrange
			 */
			const errorExpected = "Invalid 'jsonObj.defs'";
			const jsonDir: ICommonJsonDir = jsonDirFake();
			const jsonExpected: ICommonJson = {
				defs: undefined,
				dirs: [jsonDir],
			};
			const jsonStr: ICommonJsonStr = JSON.stringify(jsonExpected);

			/*
			 * Act
			 */
			const handler = (): void => {
				jsonStrParserHelper({ jsonStr });
			}

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'jsonObj' does not contain a valid 'defs' array property", (): void => {
			/*
			 * Arrange
			 */
			const errorExpected = "Invalid 'jsonObj.defs'";
			const jsonDir: ICommonJsonDir = jsonDirFake();
			const jsonExpected = {
				defs: 'INVALID_NON_ARRAY_DEFS',
				dirs: [jsonDir],
			};
			const jsonStr: ICommonJsonStr = JSON.stringify(jsonExpected);

			/*
			 * Act
			 */
			const handler = (): void => {
				jsonStrParserHelper({ jsonStr });
			}

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'jsonObj' does not contain a valid 'dirs' property", (): void => {
			/*
			 * Arrange
			 */
			const errorExpected = "Invalid 'jsonObj.dirs'";
			const jsonDef: ICommonJsonDef = jsonDefFake();
			const jsonExpected: ICommonJson = {
				defs: [jsonDef],
				dirs: undefined,
			};
			const jsonStr: ICommonJsonStr = JSON.stringify(jsonExpected);

			/*
			 * Act
			 */
			const handler = (): void => {
				jsonStrParserHelper({ jsonStr });
			}

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'jsonObj' does not contain a valid 'dirs' array property", (): void => {
			/*
			 * Arrange
			 */
			const errorExpected = "Invalid 'jsonObj.dirs'";
			const jsonDef: ICommonJsonDef = jsonDefFake();
			const jsonExpected = {
				defs: [jsonDef],
				dirs: 'INVALID_NON_ARRAY_DIRS',
			};
			const jsonStr: ICommonJsonStr = JSON.stringify(jsonExpected);

			/*
			 * Act
			 */
			const handler = (): void => {
				jsonStrParserHelper({ jsonStr });
			}

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
		test("when 'jsonStr' can not be parsed", (): void => {
			/*
			 * Arrange
			 */
			const errorExpected = "Invalid 'jsonStr'";
			const jsonStr: ICommonJsonStr = "{ defs,},"

			/*
			 * Act
			 */
			const handler = (): void => {
				jsonStrParserHelper({ jsonStr });
			}

			/*
			 * Assert
			 */
			expect(handler).toThrow(errorExpected);
		});
	});
});
