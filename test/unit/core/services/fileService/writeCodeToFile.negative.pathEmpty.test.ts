import { writeCodeToFile } from '@app/core/services/fileService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('writeCodeToFile', () => {
					describe('negative: pathEmpty', () => {
						describe('should throw an error', () => {
							test("when 'path' is empty", () => {
								// Arrange
								const code = 'const tempVar = 123;';
								const path = '';
								const errorExpected = "Invalid 'path'";

								// Act
								const handler = () => {
									writeCodeToFile({ code, path });
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
