import { getParserCodeFilePath } from '@app/core/services/fileService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('getParserCodeFilePath', () => {
					describe('positive', () => {
						describe('should throw an error', () => {
							test("when 'parserName' is an empty string", () => {
								// Arrange
								const parserName = '';
								const errorExpected = "Invalid 'parserName'";

								// Act
								const handler = () => {
									getParserCodeFilePath({ parserName });
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
