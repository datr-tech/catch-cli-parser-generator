import { writeFileSync } from 'node:fs';
import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { writeCodeToFile } from '@app/core/services/fileService';

const writeFileErrorMessage = 'TEST_ERROR';
let writeFile: jest.Mock<typeof writeFileSync>;

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('writeCodeToFile', () => {
					describe('negative: writeFile', () => {
						describe('should throw an error', () => {
							beforeAll(() => {
								writeFile = jest.fn().mockImplementationOnce(() => {
									throw new Error(writeFileErrorMessage);
								});
							});
							afterAll(() => {
								jest.clearAllMocks();
							});
							test("when 'writeFile' throws an error", () => {
								// Arrange
								const code = 'const testVar = 123;';
								const timestamp = Date.now();
								const path = `${CONSTS_PATHS_TEST_DIR}/writeCodeToFile.negative.writeFile.${timestamp}.ts`;
								const errorExpected = `'code' could not be written to 'path': ${writeFileErrorMessage}`;

								// Act
								const handler = () => {
									writeCodeToFile({ code, path, writeFile });
								};

								// Assert
								expect(handler).toThrow(errorExpected);
								expect(writeFile).toHaveBeenCalledTimes(1);
							});
						});
					});
				});
			});
		});
	});
});
