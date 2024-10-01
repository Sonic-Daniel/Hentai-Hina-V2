module.exports.config = {
  name: "imagegen",  // Nom de la commande
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shadow",
  description: "Génère une image à partir d'une description.",
  commandCategory: "fun",
  usages: "[description]",
  cooldowns: 5
};

const axios = require('axios');

module.exports.run = async ({ event, api, args }) => {
  // Paramètres de la requête
  const description = args.join(" ") || "Un paysage mystérieux";  // Utilise les arguments passés par l'utilisateur
  const data = {
    prompt: description,
    size: '1024x1024'
  };

  try {
    // Envoi de la requête
    const response = await axios.post('https://sandipbaruwal.onrender.com/gen.html', data);
    api.sendMessage("Image générée avec succès!", event.threadID);
  } catch (error) {
    api.sendMessage("Erreur lors de la génération de l'image.", event.threadID);
  }
};
