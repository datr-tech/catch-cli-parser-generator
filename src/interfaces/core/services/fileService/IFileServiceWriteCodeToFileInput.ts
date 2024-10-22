import { IDataCommonCode, IDataCommonPath } from '@app/interfaces/data/common';
import { writeFileSync } from 'node:fs';

export interface IFileServiceWriteCodeToFileInput {
	code: IDataCommonCode;
	path: IDataCommonPath;
	writeFile?: typeof writeFileSync;
}
