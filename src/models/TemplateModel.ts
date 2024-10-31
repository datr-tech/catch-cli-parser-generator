import fs from 'node:fs';
import Handlebars, { TemplateDelegate } from 'handlebars';
import { assertCondition } from '@app/assertions';
import { isValidTeeHelper } from '@app/helpers';
import {
	ICommonBool,
	ICommonCodeStr,
	ICommonFuncIsValid,
	ICommonFuncMain,
	ICommonTemplateStr,
	ICommonValidityFlag,
} from '@app/interfaces/common';
import { IModelCode } from '@app/interfaces/models/CodeModel';
import {
	IModelTemplate,
	IModelTemplateConstructor,
	IModelTemplateConstructorInput,
	IModelTemplateFuncGetCodeModel,
	IModelTemplateFuncGetCodeModelInput,
	IModelTemplateFuncGetCodeModelOutput,
} from '@app/interfaces/models/TemplateModel';
import { CodeModel } from './CodeModel';

/**
 * @public
 *
 * Construct a model to represent a template.
 *
 * @param {IModelTemplateConstructorInput} args
 * @param {IFileServiceFilePath} args.templatePathService
 * @returns {IModelTemplate}
 * @constructor
 */
export const TemplateModel: IModelTemplateConstructor = ({
	templatePathService,
}: IModelTemplateConstructorInput): IModelTemplate => {
	const isTemplateValidFlag: ICommonValidityFlag = { value: false };
	let templateContentsStr: ICommonTemplateStr;

	/**
	 * Retrieve a model containing the code derived from the template represented
	 * by 'templatePathModel' and the data definitions contained within 'defModel'.
	 *
	 * @param {IModelTemplateFuncGetCodeModelInput} args
	 * @param {IModelDef} args.defModel
	 * @returns {IModelTemplateFuncGetCodeModelOutput}
	 *
	 * @throws When 'isValid' was not called before 'getCodeModel'
	 * @throws When 'templatePathModel' was not valid
	 */
	const getCodeModel: IModelTemplateFuncGetCodeModel = ({
		defModel,
	}: IModelTemplateFuncGetCodeModelInput): IModelTemplateFuncGetCodeModelOutput => {
		assertCondition({
			condition: isTemplateValidFlag.value,
		});
		const templateFn: TemplateDelegate = Handlebars.compile(templateContentsStr);
		const codeStr: ICommonCodeStr = templateFn(defModel.getPayload());

		return CodeModel({ codeStr }) as IModelCode;
	};

	/**
	 * @public
	 *
	 * Returns true when 'fileNameStr' is truthy. Otherwise, false.
	 *
	 * @returns {ICommonBool}
	 */
	const isValid: ICommonFuncIsValid = (): ICommonBool =>
		isValidTeeHelper({
			condition: !!templateContentsStr,
			validityFlagToUpdate: isTemplateValidFlag,
		});

	/**
	 * @private
	 *
	 * Main is called by default during the construction of a
	 * TemplateModel, and it populates the local 'templateContentsStr'
	 * var when 'templatePathModel' is valid.
	 *
	 * @throws When 'templatePathModel' is not valid
	 */
	const main: ICommonFuncMain = (): void => {
		assertCondition({
			condition: templatePathService.isValid(),
			errorMessage: "Invalid 'templatePathService'",
		});
		templateContentsStr = fs.readFileSync(templatePathService.getFilePath(), 'utf-8');
	};

	main();

	return {
		getCodeModel,
		isValid,
	} as IModelTemplate;
};
