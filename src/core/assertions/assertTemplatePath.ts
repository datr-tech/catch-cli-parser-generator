import { FileExistTypeEnum } from '@app/config/enums';
import { doesFileExist } from '@app/core/services/fileService';
import { IAssertTemplatePath } from '@app/interfaces/core/assertions';

export const assertTemplatePath: IAssertTemplatePath = ({ templatePath }) => {
	let errorMessage: string;
	const { doesExist, nonExistentType } = doesFileExist({ filePath: templatePath });

	if (doesExist) {
		return;
	}

	switch (nonExistentType) {
		case FileExistTypeEnum.INVALID_FILE_PATH:
			errorMessage = "Invalid 'templatePath'";
			break;

		case FileExistTypeEnum.FILE_NOT_EXISTS:
			errorMessage = "'templatePath' does not identify a valid file object";
			break;

		case FileExistTypeEnum.ENTITY_NOT_FILE:
			errorMessage = "'templatePath' does not identify a valid file";
			break;
	}

	throw new TypeError(errorMessage);
};
