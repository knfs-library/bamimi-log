
const transport = {
	options: {
		"console": (msg, level = 'info') => {
			switch (level) {
				case 'fatal':
				case 'error':
					console.error(msg);
					break;
				case 'warn':
					console.warn(msg);
					break;
				case 'info':
					console.info(msg);
					break;
				case 'debug':
					console.debug(msg);
					break;
				case 'trace':
					console.trace(msg);
					break;
				case 'all':
					console.log(msg);
					break;
			}
		}
	},
	handle(transports) {
		const validTransports = Object.keys(transport.options);
		if (!transports.every(element => validTransports.includes(element))) {
			throw new Error(`Invalid transport: ${validTransports.toString()}`);
		}

		return function (msg, level = 'info') {
			for (const t of transports) {
				transport.options[t](msg, level)
			}
		};
	}
}

module.exports = transport