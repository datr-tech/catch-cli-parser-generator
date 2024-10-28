import { IControllerGenerateConstructorInput } from './IControllerGenerateConstructorInput';
import { IControllerGenerate } from '@app/interfaces/controllers/GenerateController/IControllerGenerate';

export interface IControllerGenerateConstructor {
	(args: IControllerGenerateConstructorInput): IControllerGenerate;
}
