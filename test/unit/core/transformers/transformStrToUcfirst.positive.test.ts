import { transformStrToUcfirst } from '@app/core/transformers';
import { transformStrToUcfirstPositiveTestCases } from '@test/fixtures/core/transformers';

describe('unit', () => {
	describe('core', () => {
		describe('transformers', () => {
			describe('transformStrToUcfirst', () => {
				describe('positive', () => {
					test.each(transformStrToUcfirstPositiveTestCases)(
						'$description',
						({ name, value, valueExpected }) => {
							/*
							 * Act
							 */
							const valueFound = transformStrToUcfirst({ name, value });

							/*
							 * Assert
							 */
							expect(valueFound).toBe(valueExpected);
						},
					);
				});
			});
		});
	});
});
