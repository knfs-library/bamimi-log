const transport = require('../../lib/cjs/transports');

describe('Transport', () => {
	beforeEach(() => {
		console.error = jest.fn();
		console.warn = jest.fn();
		console.info = jest.fn();
		console.debug = jest.fn();
		console.trace = jest.fn();
		console.log = jest.fn();
	});

	test('should log with error level', () => {
		const logger = transport.handle(['console']);
		logger('Error message', 'error');
		expect(console.error).toHaveBeenCalledWith('Error message');
	});

	test('should log with fatal level', () => {
		const logger = transport.handle(['console']);
		logger('Fatal message', 'fatal');
		expect(console.error).toHaveBeenCalledWith('Fatal message');
	});

	test('should log with warn level', () => {
		const logger = transport.handle(['console']);
		logger('Warn message', 'warn');
		expect(console.warn).toHaveBeenCalledWith('Warn message');
	});

	test('should log with info level', () => {
		const logger = transport.handle(['console']);
		logger('Info message', 'info');
		expect(console.info).toHaveBeenCalledWith('Info message');
	});

	test('should log with debug level', () => {
		const logger = transport.handle(['console']);
		logger('Debug message', 'debug');
		expect(console.debug).toHaveBeenCalledWith('Debug message');
	});

	test('should log with trace level', () => {
		const logger = transport.handle(['console']);
		logger('Trace message', 'trace');
		expect(console.trace).toHaveBeenCalledWith('Trace message');
	});

	test('should log with all level', () => {
		const logger = transport.handle(['console']);
		logger('All message', 'all');
		expect(console.log).toHaveBeenCalledWith('All message');
	});

	test('should throw an error for invalid transport', () => {
		expect(() => transport.handle(['invalidTransport'])).toThrowError('Invalid transport: console');
	});

	test('should handle multiple transports', () => {
		const consoleMock = jest.fn();
		transport.options.console = consoleMock;
		transport.handle(['console'])('Test message', 'info');
		expect(consoleMock).toHaveBeenCalledWith('Test message', 'info');
	});
});