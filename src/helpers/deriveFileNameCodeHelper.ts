import { assertCondition } from '@app/assertions';
import { deriveFileNameCodeHelperBase } from './deriveFileNameCodeHelperBase';
import { ICommonNameStr } from '@app/interfaces/common';
import { IHelperDeriveFileName, IHelperDeriveFileNameInput } from '@app/interfaces/helpers';

/**
 * @public
 *
 * Derive the name for a code file from the 'defModel'
 * and the template type, 'templateTypeEnum'.
 *
 * @param {IHelperDeriveFileNameInput} args
 * @param {IModelDef} args.defModel
 * @param {TemplateTypeEnum} args.templateTypeEnum
 * @returns {ICommonNameStr}
 */
export const deriveFileNameCodeHelper: IHelperDeriveFileName = ({
	defModel,
	templateTypeEnum,
}: IHelperDeriveFileNameInput): ICommonNameStr => {
	assertCondition({
		condition: defModel.isValid(),
		errorMessage: "Invalid 'defModel'",
	});

	return deriveFileNameCodeHelperBase({
		defNameStr: defModel.getName(),
		templateTypeEnum,
	});
};
