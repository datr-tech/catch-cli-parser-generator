import { OutDirTypeEnum } from '@app/config/enums';
import { templateTypeHelper } from '@app/helpers';
import { templateTypeHelperPositiveFixture } from '@test/fixtures/helpers';
import { IFixtureTemplateTypeHelperPositive } from '@test/fixtures/interfaces/helpers';

describe('templateTypeHelper', () => {
	describe("should return the expected 'outDirTypeEnum'", () => {
		test.each(templateTypeHelperPositiveFixture)(
			"when 'templateTypeEnum' is $templateTypeEnum",
			({ outDirTypeEnumExpected, templateTypeEnum }: IFixtureTemplateTypeHelperPositive): void => {
				/*
				 * Act
				 */
				const outDirTypeEnumFound: OutDirTypeEnum = templateTypeHelper.getOutDirType({
					templateTypeEnum,
				});

				/*
				 * Assert
				 */
				expect(outDirTypeEnumFound).toBe(outDirTypeEnumExpected);
			},
		);
	});
});
