import { FileExistTypeEnum } from '@app/config/enums';
import { doesFileExist } from '@app/core/services/fileService';
import { IAssertPath } from '@app/interfaces/core/assertions';

export const assertPath: IAssertPath = ({ path }) => {
	let errorMessage: string;
	const { doesExist, nonExistentType } = doesFileExist({ path });

	if (doesExist) {
		return;
	}

	switch (nonExistentType) {
		case FileExistTypeEnum.INVALID_FILE_PATH:
			errorMessage = "Invalid 'path'";
			break;

		case FileExistTypeEnum.FILE_NOT_EXISTS:
			errorMessage = "'path' does not identify a valid file object";
			break;

		case FileExistTypeEnum.ENTITY_NOT_FILE:
			errorMessage = "'path' does not identify a valid file";
			break;
	}

	throw new TypeError(errorMessage);
};
