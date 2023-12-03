const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setAuthor("Comandos de ayuda.")
    .setTitle("Lista de comandos del bot ${client.user.tag}")
    .setDescription(
      "A continuación se muestran los comandos que puede hacer con el Bot."
    )
    .addField(
      "Informacion del Backup: Comando",
      "b!info-backup **ID**"
    )

    .addField(
      "Cargar Backup: Comando",
      "b!load-backup **ID**"
    )

    .addField(
      "Crear backup: Comando",
      "b!backup"
    )

    .addField("? Capacitación ?", "estadísticas", true)
    .addField("Link del Bot", "[Invitar al Bot](https://discord.com/api/oauth2/authorize?client_id=1132771782215086090&permissions=8&scope=bot%20applications.commands)")
    .setTimestamp()
    .setFooter(
      `Comando solicitado por ${message.author.tag}`,
      client.user.displayAvatarURL(),
      message.delete()
    );
  message.channel.send(help);

};

module.exports.help = {
  name: "help"
};