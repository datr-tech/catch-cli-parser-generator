import { assertString } from '@app/core/assertions';
import { ITransformerStr } from '@app/interfaces/core/transformers';

export const transformStrToUcfirst: ITransformerStr = ({ value, name }) => {
	assertString({ value, name });

	const valueTrimmed = value.trim();

	if (valueTrimmed.length < 2) {
		return value;
	}

	const firstLetterUppercase = valueTrimmed.charAt(0).toUpperCase();
	const remainingLetters = valueTrimmed.slice(1);

	return `${firstLetterUppercase}${remainingLetters}`;
};
