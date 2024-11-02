import { InvalidArgumentError } from 'commander';
import { jsonStrParserHelper } from '@app/helpers';
import { ICommonJson } from '@app/interfaces/common';

export const jsonValidator = (jsonStr: string): ICommonJson => {
	let json: ICommonJson;

	try {
		json = jsonStrParserHelper({ jsonStr });
	} catch (error) {
		const { message } = error;
		throw new InvalidArgumentError(message);
	}

	return json;
};
