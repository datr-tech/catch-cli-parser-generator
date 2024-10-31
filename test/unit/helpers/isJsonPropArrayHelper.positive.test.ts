import { isJsonPropArrayHelper } from '@app/helpers';
import { ICommonBool, ICommonJson, ICommonJsonDef } from '@app/interfaces/common';
import { jsonDefFake } from '@test/doubles/fakes';

describe('isJsonPropArrayHelper', (): void => {
	describe('should return true', (): void => {
		test("when the received value of 'jsonProp' is an array", (): void => {
			/*
			 * Arrange
			 */
			const jsonDefValidOne: ICommonJsonDef = jsonDefFake({ name: 'VALID_JSON_DEF_1' });
			const jsonDefValidTwo: ICommonJsonDef = jsonDefFake({ name: 'VALID_JSON_DEF_2' });
			const json: ICommonJson = {
				defs: [jsonDefValidOne, jsonDefValidTwo],
				dirs: [],
			};

			/*
			 * Act
			 */
			const response: ICommonBool = isJsonPropArrayHelper({ jsonProp: json.defs });

			/*
			 * Assert
			 */
			expect(response).toBe(true);
		});
	});
});
