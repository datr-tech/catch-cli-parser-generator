import { writeFileSync } from 'node:fs';
import { codeModelFixture } from '@test/fixtures/models';

describe('CodeModel', (): void => {
	describe('writeCodeToFile', (): void => {
		describe('should fail to write any code', (): void => {
			test("when not calling 'isValid' before 'writeCodeToFile'", (): void => {
				/*
				 * Arrange
				 */
				const { codeModel, codeFilePathService } = codeModelFixture[0];
				const messageExpected = 'TEST_ERROR';
				const writeFileSyncMock: typeof writeFileSync = () => {
					throw Error(messageExpected);
				};
				codeFilePathService.isValid();
				codeModel.isValid();

				/*
				 * Act
				 */
				const { message, status } = codeModel.writeCodeToFile({
					codeFilePathService,
					writeFile: writeFileSyncMock,
				});

				/*
				 * Assert
				 */
				expect(message).toBe(messageExpected);
				expect(status).toBe(false);
			});
		});
	});
});
