import { InvalidArgumentError } from 'commander';

export const jsonValidator = (json: string) => {
	if (!json) {
		throw new InvalidArgumentError("Invalid 'json'");
	}

	return json;
};
