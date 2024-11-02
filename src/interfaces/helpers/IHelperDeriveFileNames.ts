import { IHelperDeriveFileNamesInput } from './IHelperDeriveFileNamesInput';
import { IHelperDeriveFileNamesOutput } from './IHelperDeriveFileNamesOutput';

export interface IHelperDeriveFileNames {
	(args: IHelperDeriveFileNamesInput): IHelperDeriveFileNamesOutput;
}
