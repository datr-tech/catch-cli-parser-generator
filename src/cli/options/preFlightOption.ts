import { Option } from 'commander';

export const preFlightOption = new Option(
	'-p, --pre-flight',
	'Run the command without performing downstream processing',
);
