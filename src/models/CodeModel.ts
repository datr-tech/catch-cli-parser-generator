import fs from 'node:fs';
import { assertCondition } from '@app/assertions';
import { isValidTeeHelper } from '@app/helpers';
import { ICommonBool, ICommonFuncIsValid, ICommonValidityFlag } from '@app/interfaces/common';
import {
	IModelCode,
	IModelCodeConstructor,
	IModelCodeConstructorInput,
	IModelCodeFuncWriteCodeToFile,
	IModelCodeFuncWriteCodeToFileInput
} from '@app/interfaces/models/CodeModel';

/**
 * @public
 *
 * Construct a CodeModel with a 'codeStr'
 *
 * @param {IModelCodeConstructorInput} args
 * @param {ICommonCodeStr} args.codeStr
 * @returns {IModelCode}
 * @constructor
 *
 * @example
 *
 * Instantiate an instance of the CodeModel constructor,
 * and then ensure that it is valid, before attempting to
 * write the code to a file.
 *
 * const codeModel = CodeModel({ codeStr });
 * if (codeModel.isValid()) {
 *   codeModel.writeCodeToPath({ codeFilePathModel });
 * }
 *
 * @example
 *
 * Attempting to write to a file without calling
 * 'isValid', as shown above, will cause an error
 * to be thrown.
 *
 * try {
 *   const codeModel = CodeModel({ codeStr });
 *   codeModel.writeCodeToPath({ codeFilePathModel });
 * } catch(error) {
 *   ... handle error
 * }
 */
export const CodeModel: IModelCodeConstructor = ({
	codeStr
}: IModelCodeConstructorInput): IModelCode => {
	const isCodeStrValidFlag: ICommonValidityFlag = { value: false };

	/**
	 * @public
	 *
	 * Returns true if 'codeStr' is valid. Otherwise, false.
	 *
	 * @returns {ICommonBool}
	 */
	const isValid: ICommonFuncIsValid = (): ICommonBool =>
		isValidTeeHelper({
			condition: !!codeStr,
			validityFlagToUpdate: isCodeStrValidFlag,
		});

	/**
	 * @public
	 *
	 * Write 'codeStr' to the file designated by 'codeFilePathModel'
	 *
	 * @param {IModelCodeFuncWriteCodeToFileInput} args
	 * @param {IModelFilePath} args.codeFilePathModel
	 *
	 * @throws When 'isValid' was not called before 'writeCodeToFile'
	 * @throws When 'codeStr' was not truthy
	 * @throws When 'codeFilePathModel' was not valid
	 */
	const writeCodeToFile: IModelCodeFuncWriteCodeToFile = ({
		codeFilePathModel
	}: IModelCodeFuncWriteCodeToFileInput): void => {
		assertCondition({
			condition: isCodeStrValidFlag.value && codeFilePathModel.isValid(),
		});
		const codeFilePath = codeFilePathModel.getFilePath();
		fs.writeFileSync(codeFilePath, codeStr);
	};

	return { isValid, writeCodeToFile } as IModelCode;
};
