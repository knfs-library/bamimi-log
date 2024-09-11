const format = require('../../lib/cjs/format'); // Thay đổi đường dẫn nếu cần

describe('format.combine', () => {
	it('should combine multiple formats correctly', () => {
		const combinedFormat = format.combine(['timestamp']);
		const result = combinedFormat({ message: 'Hello, world!' });
		expect(result).toHaveProperty('timestamp');
		expect(typeof result.timestamp).toBe('string');
		expect(result.timestamp).toHaveLength(24);
		expect(result).toHaveProperty('message', 'Hello, world!');
	});

	it('should throw an error for invalid formats', () => {
		expect(() => format.combine(['invalidFormat'])).toThrow('Invalid format: timestamp');
	});

	it('should apply formats in order', () => {
		const combinedFormat = format.combine(['timestamp']);
		const result = combinedFormat({ message: 'Testing order' });

		expect(result).toHaveProperty('timestamp');
		expect(result).toHaveProperty('message', 'Testing order');
	});
});
