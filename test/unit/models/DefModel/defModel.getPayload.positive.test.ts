import { DefModel } from '@app/models';
import { ICommonJsonDef, ICommonJsonDefPayload } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefModel', () => {
	describe('getPayload', () => {
		describe("should return the expected 'payload' property type", () => {
			test("when 'isValid' is called before 'getPayload'", () => {
				/*
				 * Arrange
				 */
				const payloadExpected: ICommonJsonDefPayload = {};
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name: 'TEST_JSON_DEF',
					payload: payloadExpected,
				});

				/*
				 * Act
				 */
				const defModel: IModelDef = DefModel({ jsonDef });
				defModel.isValid();
				const payloadFound: ICommonJsonDefPayload = defModel.getPayload();

				/*
				 * Assert
				 */
				expect(payloadFound).toBe(payloadExpected);
			});
		});
	});
});
