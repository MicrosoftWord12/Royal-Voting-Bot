const Discord = require('discord.js');
module.exports = {
	name: 'vote',
	description: 'This is a test',
	aliases: [],

	/**
	 *
	 * @param {Discord.Client} client
	 * @param {Discord.Message} message
	 * @param {string[]} args
	 */
	// Discord Param is optional
	execute(client, message, args) {
		console.log(args[0]);
		if (args >= 1 && args[0] == 'new') {
			if (args[1]) {
				console.log('Args == 1');
			}
		}
	},
};
