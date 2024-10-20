import { IHelperGetTemplateInput } from './IHelperGetTemplateInput';

export interface IHelperGetTemplate {
	(args: IHelperGetTemplateInput): string;
}
