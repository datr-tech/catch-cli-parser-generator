import { DefTypeEnum } from '@app/config/enums';
import {
	ICommonJson,
	ICommonJsonDef,
	ICommonJsonDir,
	ICommonJsonStr,
} from '@app/interfaces/common';
import { jsonDefFake, jsonDefPayloadLeafFake, jsonDirFake } from '@test/doubles/fakes';

describe('CLI', (): void => {
	describe("should return the expected 'exitCode' and 'stderr'", (): void => {
		test("when 'json' does not contain a valid 'dirs' property", (): void => {
			/*
			 * Arrange
			 */
			const jsonDef: ICommonJsonDef = jsonDefFake({
				name: 'JSON_DEF_TEST',
				payload: jsonDefPayloadLeafFake(),
				type: DefTypeEnum.DEF_TYPE_LEAF,
			});
			const json: ICommonJson = {
				defs: [jsonDef],
				dirs: undefined,
			};

			/*
			 * Expected
			 */
			const exitCodeExpected = 1;
			const stderrExpected = "Invalid 'jsonObj.dirs'";

			/*
			 * Act
			 */
			const argument: ICommonJsonStr = JSON.stringify(json);
			const { code, stderr } = global.jestRunDistCLI({ argument, silent: true });

			/*
			 * Assert
			 */
			expect(stderr).toContain(stderrExpected);
			expect(code).toBe(exitCodeExpected);
		});
		test("when 'json' does not contain a valid 'dirs' property", (): void => {
			/*
			 * Arrange
			 */
			const jsonDir: ICommonJsonDir = jsonDirFake();
			const json: ICommonJson = {
				defs: undefined,
				dirs: [jsonDir],
			};

			/*
			 * Expected
			 */
			const exitCodeExpected = 1;
			const stderrExpected = "Invalid 'jsonObj.defs'";

			/*
			 * Act
			 */
			const argument: ICommonJsonStr = JSON.stringify(json);
			const { code, stderr } = global.jestRunDistCLI({ argument, silent: true });

			/*
			 * Assert
			 */
			expect(stderr).toContain(stderrExpected);
			expect(code).toBe(exitCodeExpected);
		});
		test("when 'json' contains neither valid 'defs' nor 'dirs' properties", (): void => {
			/*
			 * Arrange
			 */
			const json: ICommonJson = {
				defs: undefined,
				dirs: undefined,
			};

			/*
			 * Expected
			 */
			const exitCodeExpected = 1;
			const stderrExpected = "Invalid 'jsonObj.defs'";

			/*
			 * Act
			 */
			const argument: ICommonJsonStr = JSON.stringify(json);
			const { code, stderr } = global.jestRunDistCLI({ argument, silent: true });

			/*
			 * Assert
			 */
			expect(stderr).toContain(stderrExpected);
			expect(code).toBe(exitCodeExpected);
		});
	});
});
