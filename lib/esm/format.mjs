const format = {
	options: {
		timestamp: (msg) => {
			const timestamp = new Date().toISOString();
			return {
				timestamp,
				...msg
			};
		}
	},
	combine: function (formats) {
		const validFormats = Object.keys(format.options);
		if (!formats.every(element => validFormats.includes(element))) {
			throw new Error(`Invalid format: ${validFormats.toString()}`);
		}

		return function (msg) {
			for (const f of formats) {
				msg = format.options[f](msg);
			}

			return msg;
		};
	}
};

export default format;
