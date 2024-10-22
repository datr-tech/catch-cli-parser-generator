import { getCodePath } from '@app/core/services/fileService';

describe('unit', () => {
	describe('core', () => {
		describe('services', () => {
			describe('fileService', () => {
				describe('getCodePath', () => {
					describe('positive', () => {
						describe('should throw an error', () => {
							test("when 'name' is an empty string", () => {
								// Arrange
								const name = '';
								const errorExpected = "Invalid 'name'";

								// Act
								const handler = () => {
									getCodePath({ name });
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
