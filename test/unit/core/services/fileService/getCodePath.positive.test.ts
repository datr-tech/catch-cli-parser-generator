import { CONSTS_PATHS_GENERATED_PARSER_CODE_DIR } from '@app/config/consts/paths';
import { getCodePath } from '@app/core/services/fileService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('getCodePath', () => {
					describe('positive', () => {
						describe('should return a valid path', () => {
							test("when 'name' is a non-empty string", () => {
								// Arrange
								const name = 'aTestNameOne';
								const parserCodeFilePathExpected = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${name}.ts`;

								// Act
								const parserCodeFilePathFound = getCodePath({ name });

								// Assert
								expect(parserCodeFilePathFound).toBe(parserCodeFilePathExpected);
							});
							test("when the optional 'outDir' param has been received", () => {
								// Arrange
								const name = 'aTestNameTwo';
								const outDir = '/an/out/dir/path';
								const parserCodeFilePathExpected = `${outDir}/${name}.ts`;

								// Act
								const parserCodeFilePathFound = getCodePath({ name, outDir });

								// Assert
								expect(parserCodeFilePathFound).toBe(parserCodeFilePathExpected);
							});
							test("when the optional 'outDir' param is an empty string (and the default dir is used instead)", () => {
								// Arrange
								const name = 'aTestNameThree';
								const outDir = '';
								const parserCodeFilePathExpected = `${CONSTS_PATHS_GENERATED_PARSER_CODE_DIR}/${name}.ts`;

								// Act
								const parserCodeFilePathFound = getCodePath({ name, outDir });

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
