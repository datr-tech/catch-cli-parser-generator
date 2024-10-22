import { CodeTypeEnum } from '@app/config/enums';

export interface IWriterValidateInput {
	code: string;
	name: string;
	outDir?: string;
	codeType?: CodeTypeEnum;
}
