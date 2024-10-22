import { CONSTS_PATHS_TEST_DIR } from '@app/config/consts/paths';
import { writeCodeToFile } from '@app/core/services/fileService';

let path: string;

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('writeCodeToFile', () => {
					describe('negative: pathExists', () => {
						describe("should throw an error concerning the 'path' arg", () => {
							beforeAll(() => {
								const timestamp = Date.now();
								path = `${CONSTS_PATHS_TEST_DIR}/writeCodeToFile.negative.pathExists.${timestamp}.ts`;
								global.jestTouchFileSync(path);
							});
							afterAll(() => {
								global.jestRemoveFileSync(path);
							});
							test("when 'path' identifies an existing file", () => {
								// Arrange
								const code = 'const tempVar = 123;';
								const errorExpected = "'path' already exists";

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
