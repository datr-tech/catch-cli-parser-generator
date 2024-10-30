import { DefModel } from '@app/models';
import { FileNameService } from '@app/services/fileService';
import { ICommonNameStr } from '@app/interfaces/common';
import { IModelDef } from '@app/interfaces/models/DefModel';
import { IFileServiceFileName } from '@app/interfaces/services/fileService/FileNameService';
import { fileNameServiceGetFileNameFixturePositive } from '@test/fixtures/services/fileService';
import { IFixtureFileNameServiceGetFileNamePositive } from '@test/fixtures/interfaces/services/fileServices';

describe('FileNameService', () => {
	describe('getFileName', () => {
		describe("should return the expected 'fileNameStr'", () => {
			test.each(fileNameServiceGetFileNameFixturePositive)(
				"when 'templateTypeEnum' is $templateTypeEnum",
				({ fileNameStrExpected, getFileNameHelper, jsonDef, templateTypeEnum }: IFixtureFileNameServiceGetFileNamePositive): void => {
				/*
				 * Arrange
				 */
				const defModel: IModelDef = DefModel({ jsonDef });

				/*
				 * Act
				 */
				const fileNameService: IFileServiceFileName = FileNameService({
					defModel,
					getFileNameHelper,
					templateTypeEnum
				});
				fileNameService.isValid();
				const fileNameStrFound: ICommonNameStr = fileNameService.getFileName();

				/*
				 * Assert
				 */
				expect(fileNameStrFound).toBe(fileNameStrExpected);
			});
		});
	});
});