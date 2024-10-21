import { writeFileSync } from 'node:fs';
import ts from 'typescript';
import { assertStringCode, assertStringCodeFilePath } from '@app/core/assertions';
import { doesFileExist } from '@app/core/services/fileService';
import { IFileServiceWriteCodeToFile } from '@app/interfaces/core/services/fileService';

export const writeCodeToFile: IFileServiceWriteCodeToFile = ({
	code,
	codeFilePath,
	writeFile = writeFileSync
}) => {
	assertStringCode({ code });
	assertStringCodeFilePath({ codeFilePath });
	const { doesExist } = doesFileExist({ filePath: codeFilePath });

	if (doesExist) {
		throw new TypeError("'codeFilePath' already exists");
	}

	try {
		const codeJavaScript = ts.transpile(code);
		eval(codeJavaScript);
	} catch (error) {
		const { message } = error;
		throw new TypeError(`'code' could not be transpiled: ${message}`);
	}

	try {
		writeFile(codeFilePath, code);
	} catch (error) {
		const { message } = error;
		throw new TypeError(`'code' could not be written to 'codeFilePath': ${message}`);
	}
};
