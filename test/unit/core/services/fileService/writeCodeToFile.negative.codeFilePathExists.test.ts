import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { writeCodeToFile } from '@app/core/services/fileService';

let codeFilePath: string;

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('writeCodeToFile', () => {
					describe('negative: codeFilePathExists', () => {
						describe("should throw an error concerning the 'codeFilePath' arg", () => {
							beforeAll(() => {
								const timestamp = Date.now();
								codeFilePath = `${CONSTS_PATHS_TEST_DIR}/writeCodeToFile.negative.codeFilePathExists.${timestamp}.ts`;
								global.jestTouchFileSync(codeFilePath);
							});
							afterAll(() => {
								global.jestRemoveFileSync(codeFilePath);
							});
							test("when 'codeFilePath' identifies an existing file", () => {
								// Arrange
								const code = 'const tempVar = 123;';
								const errorExpected = "'codeFilePath' already exists";

								// Act
								const handler = () => {
									writeCodeToFile({ code, codeFilePath });
								}

								// Assert
								expect(handler).toThrow(errorExpected);
							});
						});
					});
				});
			});
		});
	});
});
