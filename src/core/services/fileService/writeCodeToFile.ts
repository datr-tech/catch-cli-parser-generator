import { writeFileSync } from 'node:fs';
import ts from 'typescript';
import { assertStringCode, assertStringPath } from '@app/core/assertions';
import { doesFileExist } from '@app/core/services/fileService';
import { IFileServiceWriteCodeToFile } from '@app/interfaces/core/services/fileService';

export const writeCodeToFile: IFileServiceWriteCodeToFile = ({
	code,
	path,
	writeFile = writeFileSync,
}) => {
	assertStringCode({ code });
	assertStringPath({ path });
	const { doesExist } = doesFileExist({ path });

	if (doesExist) {
		throw new TypeError("'path' already exists");
	}

	try {
		const codeJavaScript = ts.transpile(code);
		eval(codeJavaScript);
	} catch (error) {
		const { message } = error;
		throw new TypeError(`'code' could not be transpiled: ${message}`);
	}

	try {
		writeFile(path, code);
	} catch (error) {
		const { message } = error;
		throw new TypeError(`'code' could not be written to 'path': ${message}`);
	}
};
