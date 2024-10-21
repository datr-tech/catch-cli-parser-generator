import { writeFileSync } from 'node:fs';

export interface IFileServiceWriteCodeToFileInput {
	code: string;
	codeFilePath: string;
	writeFile?: typeof writeFileSync;
}
