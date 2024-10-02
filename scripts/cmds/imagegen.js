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
  const startTime = performance.now();

  try {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      const endTime = performance.now();
      const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
      api.sendMessage(`Image générée avec succès !\nURL de l'image : ${imageUrl}\nTemps pris : ${timeTaken} secondes`, event.threadID);
      api.react(event.messageID, "👍");
    };

    img.onerror = () => {
      api.sendMessage("Erreur lors du chargement de l'image.", event.threadID);
      api.react(event.messageID, "❌");
    };

  } catch (error) {
    api.sendMessage("Erreur lors de la génération de l'image.", event.threadID);
    api.react(event.messageID, "❌");
  }
};
