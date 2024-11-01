import { DefModel } from '@app/models';
import { ICommonJsonDef, ICommonJsonDefPayload } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { jsonDefFake } from '@test/doubles/fakes';

describe('DefModel', (): void => {
	describe('getPayload', (): void => {
		describe("should return the expected 'payload' property type", (): void => {
			test("when 'isValid' is called before 'getPayload'", (): void => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = jsonDefFake({
					name: 'TEST_JSON_DEF',
				});
				const payloadExpected: ICommonJsonDefPayload = jsonDef.payload;

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
