import { writeFileSync } from 'node:fs';
import { assertCondition } from '@app/assertions';
import { isValidTeeHelper } from '@app/helpers';
import {
	ICommonBool,
	ICommonCodeStr,
	ICommonFuncIsValid,
	ICommonStr,
	ICommonValidityFlag,
} from '@app/interfaces/common';
import {
	IModelCode,
	IModelCodeConstructor,
	IModelCodeConstructorInput,
	IModelCodeFuncWriteCodeToFile,
	IModelCodeFuncWriteCodeToFileInput,
	IModelCodeFuncWriteCodeToFileOutput,
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
	codeStr,
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
	 * Write 'codeStr' to the file designated by 'codeFilePathModel'.
	 * When successful, the response object will contain:
	 *
	 * @param {IModelCodeFuncWriteCodeToFileInput} args
	 * @param {IFileServiceFilePath} args.codeFilePathService
	 * @returns {IModelCodeFuncWriteCodeToFileOutput} - { message, status }
	 *
	 * @throws When 'isValid' was not called before 'writeCodeToFile'
	 * @throws When 'codeStr' is not truthy
	 * @throws When 'codeFilePathService' is not valid
	 *
	 * @example
	 * When successful, the response object will contain:
	 * {
	 * 		message // The path to which the code was written,
	 * 	  status  // true
	 * }
	 *
	 * @example
	 * If unsuccessful (when calling writeFile), the response object will contain:
	 * {
	 * 		message // The thrown error message,
	 * 	  status  // false
	 * }
	 */
	const writeCodeToFile: IModelCodeFuncWriteCodeToFile = ({
		codeFilePathService,
		writeFile = writeFileSync,
	}: IModelCodeFuncWriteCodeToFileInput): IModelCodeFuncWriteCodeToFileOutput => {
		let message: ICommonStr;
		let status: ICommonBool;
		assertCondition({
			condition: isCodeStrValidFlag.value && codeFilePathService.isValid(),
		});

		const codeFilePath: ICommonCodeStr = codeFilePathService.getFilePath();

		try {
			writeFile(codeFilePath, codeStr);
			message = codeFilePath;
			status = true;
		} catch (error) {
			message = (error as Error).message;
			status = false;
		}

		return { message, status };
	};

	return { isValid, writeCodeToFile } as IModelCode;
};
