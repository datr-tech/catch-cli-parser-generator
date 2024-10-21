import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { getParserCodeFilePath } from '@app/core/services/fileService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('getParserCodeFilePath', () => {
					describe('positive', () => {
						describe('should return a valid path', () => {
							test("when 'parserName' is a non-empty string", () => {
								// Arrange
								const parserName = 'aTestParserName';
								const parserCodeFilePathExpected = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${parserName}.ts`;

								// Act
								const parserCodeFilePathFound = getParserCodeFilePath({ parserName });

								// Assert
								expect(parserCodeFilePathFound).toBe(parserCodeFilePathExpected);
							});
						});
					});
				});
			});
		});
	});
});
