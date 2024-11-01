import { DefTypeEnum } from '@app/config/enums';
import { ICommonCodeStr, ICommonDescriptionStr } from '@app/interfaces/common';
import { IModelCode } from '@app/interfaces/models/CodeModel';
import { IFileServiceFilePath } from '@app/interfaces/services/fileService/FilePathService';

export interface IFixtureCodeModel {
	description?: ICommonDescriptionStr;
	type: DefTypeEnum;
	codeModel: IModelCode;
	codeFilePathService: IFileServiceFilePath;
	writtenCodeExpected: ICommonCodeStr;
}
