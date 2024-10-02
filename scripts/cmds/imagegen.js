module.exports.config = {
  name: "imagegen",
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
  const description = args.join(" ") || "Un paysage mystérieux"; // Description par défaut
  api.sendMessage(`Génération d'une image pour : ${description}`, event.threadID);

  const imageUrl = `https://ashbina.onrender.com/gen2?prompt=${encodeURIComponent(description)}`;
  const startTime = Date.now(); // Démarrer le chronomètre

  try {
    const response = await axios.get(imageUrl);
    
    if (response.data) {
      const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);
      api.sendMessage(`Image générée avec succès !\nURL de l'image : ${imageUrl}\nTemps pris : ${timeTaken} secondes`, event.threadID);
      api.react(event.messageID, "👍"); // Réaction succès
    } else {
      throw new Error("Aucune image générée.");
    }
  } catch (error) {
    api.sendMessage("Erreur lors de la génération de l'image.", event.threadID);
    api.react(event.messageID, "❌"); // Réaction d'erreur
  }
};
