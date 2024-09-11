import transport from './transports.js';
import format from './format.js';

class Logger {
	static levels = {
		fatal: 0,
		error: 1,
		warn: 2,
		info: 3,
		debug: 4,
		trace: 5,
		all: 6
	};

	constructor(message, level = 'info', options = {
		transports: ['console'],
		formats: ['timestamp']
	}) {
		this.format = format.combine(options.formats);
		this.transport = transport.handle(options.transports);
		this.log(level, message);
	}

	log(level, message) {
		const validLevels = Object.keys(Logger.levels);

		if (!validLevels.includes(level)) {
			throw new Error("Invalid level");
		}

		for (const logLevel of validLevels) {
			if (Logger.levels[level] <= Logger.levels[logLevel]) {
				let msg = {
					level: {
						key: logLevel,
						value: Logger.levels[logLevel]
					},
					message
				};

				msg = this.format(msg);
				this.transport(msg, logLevel);
			}
		}
	}
}

export default Logger;
