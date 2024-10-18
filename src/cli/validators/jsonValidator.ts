import { InvalidArgumentError } from 'commander';

export const jsonValidator = (json: string) => {
	const isValid = json != null && json.trim().length > 0;

	if (!isValid) {
		throw new InvalidArgumentError("'json' should not be empty");
	}

	return json;
};
