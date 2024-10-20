import fs from 'node:fs';
import { FileExistTypeEnum } from '@app/config/enums';
import {
	IFileServiceDoesFileExist,
	IFileServiceDoesFileExistOutput,
} from '@app/interfaces/core/services/fileService';

export const doesFileExist: IFileServiceDoesFileExist = ({ filePath }) => {
	const response: IFileServiceDoesFileExistOutput = {
		doesExist: false,
		nonExistentType: undefined,
	};

	if (!filePath) {
		response.nonExistentType = FileExistTypeEnum.INVALID_FILE_PATH;
		return response;
	}

	if (!fs.existsSync(filePath)) {
		response.nonExistentType = FileExistTypeEnum.FILE_NOT_EXISTS;
		return response;
	}

	const fsStats = fs.statSync(filePath);

	if (!fsStats.isFile()) {
		response.nonExistentType = FileExistTypeEnum.ENTITY_NOT_FILE;
		return response;
	}

	response.doesExist = true;
	response.nonExistentType = undefined;

	return response;
};
