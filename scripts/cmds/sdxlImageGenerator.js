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

  onStart: async function({ message }) {
    const prompt = "Entrez votre prompt:";
    const modelOptions = [
      "DreamshaperXL10",
      "DynavisionXL",
      "JuggernautXL",
      "RealismEngineSDXL",
      "Sdxl 1.0"
    ];

    // Demander à l'utilisateur d'entrer un prompt
    await message.reply(prompt);

    // Attendre la réponse de l'utilisateur
    const filter = response => response.author.id === message.author.id;
    const collector = message.channel.createMessageCollector({ filter, time: 60000 });

    collector.on('collect', async msg => {
      const userInput = msg.content;

      // Séparer le prompt et le modèle
      const [inputPrompt, modelIndex] = userInput.split(';'); // Utiliser ";" pour séparer prompt et modèle

      if (!inputPrompt || !modelOptions[modelIndex - 1]) {
        await msg.reply("Format invalide! Utilisez: 'votre prompt; numéro du modèle'");
        return;
      }

      await msg.reply(`Vous: ${inputPrompt}`);
      const model = modelOptions[modelIndex - 1];

      try {
        const imageUrl = `https://sandipbaruwal.onrender.com/sdxxl?prompt=${encodeURIComponent(inputPrompt)}&model=${modelIndex}`;
        await msg.reply(`Génération de l'image avec ${model}...`);

        // Récupérer l'image
        const response = await axios.get(imageUrl);
        await msg.reply(`Voici votre image: ${response.data.url}`);
      } catch (error) {
        console.error(error);
        await msg.reply("Erreur lors de la génération de l'image.");
      }
    });

    collector.on('end', collected => {
      message.channel.send("Discussion terminée. Merci d'avoir utilisé le générateur d'images SDXL!");
    });
  }
};
