import { TemplateTypeEnum } from '@app/config/enums';
import { codeModelBuilder, templateModelBuilder } from 'src/modelBuilders';
import { DefsModel, OutDirsModel, templateDirModel } from '@app/models';
import {
	IControllerGenerate,
	IControllerGenerateConstructor,
} from '@app/interfaces/controllers/GenerateController';
import { IModelDefs } from '@app/interfaces/models/DefsModel';
import { IModelOutDirs } from '@app/interfaces/models/OutDirsModel';
import { assertCondition } from '@app/assertions';

export const GenerateController: IControllerGenerateConstructor = ({ json }) => {
	let areAllModelsValid = false;
	let defsModel: IModelDefs;
	let outDirsModel: IModelOutDirs;
	let templateTypeEnums: TemplateTypeEnum[];

	const init = () => {
		outDirsModel = OutDirsModel({ json });
		defsModel = DefsModel({ json });
		templateTypeEnums = Object.values(TemplateTypeEnum) as TemplateTypeEnum[];
	};

	const isValid = () => {
		areAllModelsValid =
			outDirsModel.isValid() &&
			defsModel.isValid() &&
			templateDirModel.isValid() &&
			templateTypeEnums.length > 0;

		return areAllModelsValid;
	};

	const run = () => {
		assertCondition({
			condition: areAllModelsValid,
		});

		const defModels = defsModel.getDefs();
		for (const defModel of defModels) {
			for (const templateTypeEnum of templateTypeEnums) {
				const templateModel = templateModelBuilder.build({
					defModel,
					templateDirModel,
					templateTypeEnum,
				});
				codeModelBuilder.build({
					defModel,
					outDirsModel,
					templateModel,
					templateTypeEnum,
				});
			}
		}
	};

	return {
		init,
		isValid,
		run,
	} as IControllerGenerate;
};
