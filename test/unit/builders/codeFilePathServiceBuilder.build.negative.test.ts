import { codeFilePathServiceBuilder } from '@app/builders';
import { codeFilePathServiceBuilderFixture } from '@test/fixtures/helpers';

describe('codeFilePathServiceBuilder', (): void => {
	describe('build', (): void => {
		describe('should throw the expected error', (): void => {
			test("when 'defModel' is invalid", (): void => {
				/*
				 * Arrange
				 */
				const { defModelInvalid, outDirsModelValid, templateTypeEnum } =
					codeFilePathServiceBuilderFixture;
				const errorExpected = "Either the 'defModel' or the 'outDirsModel' is invalid";

				/*
				 * Act
				 */
				const handler = (): void => {
					codeFilePathServiceBuilder.build({
						defModel: defModelInvalid,
						outDirsModel: outDirsModelValid,
						templateTypeEnum,
					});
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
			test("when 'outDirsModel' is invalid", (): void => {
				/*
				 * Arrange
				 */
				const { defModelValid, outDirsModelInvalid, templateTypeEnum } =
					codeFilePathServiceBuilderFixture;
				const errorExpected = "Either the 'defModel' or the 'outDirsModel' is invalid";

				/*
				 * Act
				 */
				const handler = (): void => {
					codeFilePathServiceBuilder.build({
						defModel: defModelValid,
						outDirsModel: outDirsModelInvalid,
						templateTypeEnum,
					});
				};

				/*
				 * Assert
				 */
				expect(handler).toThrow(errorExpected);
			});
		});
	});
});
