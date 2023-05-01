import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


const TOKEN = "ODE0NDMxNTk2Njg5NzUyMDY5.GNRMq0.VOonmEfZJaeQNPsRrbXPfIVQQMFLCknt8ywcS4"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(TOKEN);
