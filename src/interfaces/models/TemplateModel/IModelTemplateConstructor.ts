import { IModelTemplateConstructorInput } from './IModelTemplateConstructorInput';
import { IModelTemplate } from './IModelTemplate';

export interface IModelTemplateConstructor {
	(args: IModelTemplateConstructorInput): IModelTemplate;
}
