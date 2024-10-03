const axios = require('axios');

module.exports = {
  config: {
    name: "sdxlImageGenerator",
    aliases: ["sdimg"],
    author: "Shadow",
    version: "1.0.0",
    shortDescription: "Générateur d'images SDXL",
    longDescription: "Génère des images basées sur des prompts en utilisant différents modèles.",
    category: "fun",
    guide: {
      vi: "",
      en: ""
    }
  },

  onStart: async function({ args, message }) {
    try {
      const prompt = args.join(' ') || "Un paysage mystérieux de shadow garden"; // Description par défaut
      const modelOptions = [
        "DreamshaperXL10",
        "DynavisionXL",
        "JuggernautXL",
        "RealismEngineSDXL",
        "Sdxl 1.0"
      ];
      
      // Choisir un modèle par défaut
      const modelIndex = 1; 
      const model = modelOptions[modelIndex - 1];
      const url = `https://sandipbaruwal.onrender.com/sdxxl?prompt=${encodeURIComponent(prompt)}&model=${modelIndex}`;

      const startTime = Date.now(); // Chronomètre pour mesurer le temps de génération
      message.reply(`☛𝐶𝛪𝐷☠𝛫𝛥𝐺𝛯𝛮𝛩⌛𝚻𝚪𝚫𝚰𝚻𝚵𝚳𝚵𝚴𝚻 𝚵𝚴 𝐂𝚯𝐔𝚪𝐒 𝚩𝐘 ©𝐒𝚮𝚫𝐃𝚯𝐖 𝐆𝚫𝚪𝐃𝚵𝚴♻🕙𝐋'𝚰𝚳𝚫𝐆𝚵: "${prompt}", 𝛻𝛯𝑈𝛪𝐿𝐿𝛯𝛧 𝛲𝛥𝑇𝛪𝛯𝛮𝑇𝛯𝑅💁...`);const img = await global.utils.getStreamFromURL(url); // Obtenir l'image directement depuis l'URL

      // Temps de génération
      const timeTaken = ((Date.now() - startTime) / 1000).toFixed(2);

      return message.reply({ body: `𝚰𝚳𝚫𝐆𝚵 𝐆é𝚴é𝚪é𝚵 𝚫𝛁𝚵𝐂 𝐒𝐔𝐂𝐂è𝐒✨😌😁 𝚵𝚴 ${timeTaken} 𝐒𝚵𝐂𝚯𝚴𝐃𝚵𝐒 𝚸𝚫𝚪 ☛ヅ║『𝐒𝚮𝚫𝐃𝚯𝐎☠𝐆𝚫𝚪𝐃𝚵𝚴』║ッ☚.`, attachment: img });
    } catch (error) {
      console.error(error);
      return message.reply("Erreur lors de la génération de l'image.");
    }
  }
};
