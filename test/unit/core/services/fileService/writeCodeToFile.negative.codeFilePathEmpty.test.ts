import { writeCodeToFile } from '@app/core/services/fileService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('writeCodeToFile', () => {
					describe('negative: codeFilePathEmpty', () => {
						describe('should throw an error', () => {
							test("when 'codeFilePath' is empty", () => {
								// Arrange
								const code = 'const tempVar = 123;';
								const codeFilePath = '';
								const errorExpected = "Invalid 'codeFilePath'";

								// Act
								const handler = () => {
									writeCodeToFile({ code, codeFilePath });
								};

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
