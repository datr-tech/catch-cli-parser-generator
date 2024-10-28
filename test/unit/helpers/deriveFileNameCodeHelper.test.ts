import { DefTypeEnum } from '@app/config/enums';
import { deriveFileNameCodeHelper } from '@app/helpers';
import { DefModel } from '@app/models';
import { ICommonJsonDef, ICommonNameStr } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { deriveFileNameCodeHelperPositiveFixture } from '@test/fixtures/helpers';

describe('deriveFileNameCodeHelper', () => {
	describe('should return the expected codeFileName', () => {
		test.each(deriveFileNameCodeHelperPositiveFixture)(
			"when 'templateTypeEnum' is '$templateTypeEnum'",
			({ codeFileNameExpected, jsonDefName, templateTypeEnum }): void => {
				/*
				 * Arrange
				 */
				const jsonDef: ICommonJsonDef = {
					name: jsonDefName,
					payload: {},
					type: DefTypeEnum.DEF_TYPE_STEM,
				};
				const defModel: IModelDef = DefModel({ jsonDef });

				/*
				 * Act
				 */
				const codeFileNameFound: ICommonNameStr = deriveFileNameCodeHelper({
					defModel,
					templateTypeEnum,
				});

				/*
				 * Assert
				 */
				expect(codeFileNameFound).toBe(codeFileNameExpected);
			},
		);
	});
});
