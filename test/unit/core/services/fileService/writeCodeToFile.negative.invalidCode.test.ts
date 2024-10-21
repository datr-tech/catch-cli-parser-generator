import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { writeCodeToFile } from '@app/core/services/fileService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('writeCodeToFile', () => {
					describe('negative: emptyCode', () => {
						describe("should throw an error concerning the 'code' arg", () => {
							test("when 'code' can not be transpiled", () => {
								// Arrange
								const code = '@\\\\*';
								const timestamp = Date.now();
								const codeFilePath = `${CONSTS_PATHS_TEST_DIR}/writeCodeToFile.negative.invalidCode.${timestamp}.ts`;
								const errorExpected = "'code' could not be transpiled";

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
