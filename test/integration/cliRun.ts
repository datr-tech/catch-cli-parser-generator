test('Attempt 2', () => {
	const spy = jest.spyOn(console, 'log');
	jest.spyOn(process, 'exit').mockImplementationOnce(() => {
		throw new Error('process.exit() was called.')
	});

	expect(() => {
		require('./cli.js');
	}).toThrow('process.exit() was called.');
	expect(spy.mock.calls).toEqual([['Testing...']]);
	expect(process.exit).toHaveBeenCalledWith(0);
});