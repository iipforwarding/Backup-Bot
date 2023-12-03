module.exports = (client) => {
    console.log(`Esta listo: ${client.user.tag} estan ayudando en: ${client.channels.cache.size} canales y ${client.guilds.cache.size} servidores, total de: ${client.users.cache.size} usuarios.`);

};