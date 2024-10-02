const axios = require('axios');

module.exports = {
  config: {
    name: "chatbot",
    author: "Shadow",
    version: "1.0.0",
    shortDescription: "Un chatbot interactif",
    longDescription: "Discuter avec le bot et obtenir des réponses en utilisant un API.",
    category: "fun",
    guide: {
      vi: "",
      en: ""
    }
  },

  onStart: async function({ message }) {
    await message.reply("Bienvenue dans Sandy AI! Posez vos questions!");

    const filter = response => response.author.id === message.author.id;

    const collector = message.channel.createMessageCollector({ filter, time: 60000 });

    collector.on('collect', async msg => {
      const userMessage = msg.content;
      await msg.reply("Vous: " + userMessage);

      try {
        const response = await axios.get(`https://sandipbaruwal.onrender.com/qwen?prompt=${encodeURIComponent(userMessage)}`);
        await msg.reply("Sandy AI: " + response.data.answer);
      } catch (error) {
        console.error(error);
        await msg.reply("Erreur lors de la connexion à l'API. Essayez encore.");
      }
    });

    collector.on('end', collected => {
      message.channel.send("Discussion terminée. Merci d'avoir utilisé kageno AI!");
    });
  }
};
