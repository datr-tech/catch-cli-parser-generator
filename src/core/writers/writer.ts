import { CodeTypeEnum } from '@app/config/enums';
import { assertStringCode } from '@app/core/assertions';
import { doesFileExist, getCodePath, writeCodeToFile } from '@app/core/services/fileService';
import { IWriter, IWriterState } from '@app/interfaces/core/writers';

export const writer: IWriter = (() => {
	const state: IWriterState = {
		isValid: false,
		code: undefined,
		name: undefined,
		path: undefined,
	};

	const validate = ({ code, name, outDir, codeType = CodeTypeEnum.PARSER }) => {
		_initState({ state });
		assertStringCode({ code });

		const path = getCodePath({ name, outDir, codeType });
		const { doesExist } = doesFileExist({ path });
		const isValid = !doesExist;

		if (isValid) {
			_setState({ isValid, code, name, path });
		}

		return isValid;
	};

	const write = () => {
		if (!state.isValid) {
			return false;
		}

		writeCodeToFile({
			code: state.code,
			path: state.path,
		});

		_initState({ state });
		return true;
	};

	const _getState = () => state;

	const _initState = ({ state }) => {
		state.isValid = false;
		state.code = undefined;
		state.name = undefined;
		state.path = undefined;
	};

	const _setState = ({ isValid, code, name, path }) => {
		state.isValid = isValid;
		state.code = code;
		state.name = name;
		state.path = path;
	};

	return { validate, write, _getState };
})();
