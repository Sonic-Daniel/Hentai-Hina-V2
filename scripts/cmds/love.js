module.exports = {
  config: {
    name: "love",
    author: "Shadow",
    version: "1.0.0",
    shortDescription: "Pose la question : 'Do you love me?'",
    longDescription: "Réponds à la question et reçois une réponse mignonne.",
    category: "fun",
    guide: {
      vi: "",
      en: ""
    }
  },

  onStart: async function({ message }) {
    const question = "Do you love me?";
    await message.reply(question);

    const filter = response => {
      return ['yes', 'no'].includes(response.content.toLowerCase()) && response.author.id === message.author.id;
    };

    const collected = await message.channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] });

    const userResponse = collected.first().content.toLowerCase();

    if (userResponse === 'yes') {
      await message.reply("I love you too! 😘");
    } else {
      await message.reply("Why not? 😢");
    }
  }
};
