const Discord = require('discord.js');
module.exports = {
	name: 'test',
	description: 'This is a test',
	aliases: ['Test'],
	/**
	 *
	 * @param {Discord.Client} client
	 * @param {Discord.Message} message
	 * @param {string[]} args
	 */
	// Discord Param is optional
	execute(client, message, args) {
		console.log('It Works');
	},
};
