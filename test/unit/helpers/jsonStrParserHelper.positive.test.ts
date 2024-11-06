import { jsonStrParserHelper } from '@app/helpers';
import {
	ICommonJson,
	ICommonJsonDef,
	ICommonJsonDir,
	ICommonJsonStr,
} from '@app/interfaces/common';
import { jsonDefFake, jsonDirFake } from '@test/doubles/fakes';

describe('jsonStrParserHelper', (): void => {
	describe("should return a parser version of the received 'jsonStr'", (): void => {
		test("when 'jsonStr' is valid", (): void => {
			/*
			 * Arrange
			 */
			const jsonDef: ICommonJsonDef = jsonDefFake();
			const jsonDir: ICommonJsonDir = jsonDirFake();
			const jsonExpected: ICommonJson = {
				defs: [jsonDef],
				dirs: [jsonDir],
			};
			const jsonStr: ICommonJsonStr = JSON.stringify(jsonExpected);

			/*
			 * Act
			 */
			const jsonFound: ICommonJson = jsonStrParserHelper({ jsonStr });

			/*
			 * Assert
			 */
			expect(jsonFound).toStrictEqual(jsonExpected);
		});
	});
});
