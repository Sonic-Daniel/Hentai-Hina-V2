let imageIndex = 0; // Variable pour suivre l'index actuel des images

module.exports = {
  config: {
    name: "prefix",
    version: "1.1",
    author: "Shadow",
    countDown: 5,
    role: 0,
    shortDescription: "Display bot prefix",
    longDescription: "Shows the current command prefix of the bot.",
    category: "system",
  },

  onStart: async function () {},

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "prefix") {
      // Liste des URLs d'images
      const images = [
        "https://i.imgur.com/e5BNAp9.jpeg",
        "https://i.ibb.co/PQQdjc8/image.jpg",
        "https://i.ibb.co/vqcfHB5/image.jpg",
        "https://i.ibb.co/j8cYhF4/image.jpg",
        "https://i.ibb.co/fxJn3F8/image.jpg",
        "https://i.ibb.co/xXVZjr1/image.jpg",
        "https://i.ibb.co/0GCdjHr/image.jpg",
        "https://i.ibb.co/RYyPpYW/image.jpg",
        "https://i.ibb.co/CBLq4LR/image.jpg"
      ];

      // Sélectionne l'image en fonction de l'ordre (imageIndex)
      const currentImage = images[imageIndex];

      // Met à jour l'index pour la prochaine image (revient à 0 après la dernière)
      imageIndex = (imageIndex + 1) % images.length;

      // Réponse avec le texte et l'image dans l'ordre
      return message.reply({
        body: `╭━━━━━≪✠≫━━━━━╮
🕊️ 𝑃𝑅𝐸𝐹𝐼𝑆🕊️
      ☛ 🎨¥🎨
╰━━━━━≪✠≫━━━━━╯
═════•【🎖】•═════
🌟✨ 𝒞𝑅𝐸𝐴𝒯𝑜𝑅 ✨🌟
═════•【🎖】•═════
╭━━━━━≪✠≫━━━━━╮
▓█►𝐂𝐢𝐝×͜×𝐊𝐚𝐠𝐞𝐧𝐨◄█▓
╰━━━━━≪✠≫━━━━━╯
          `,
        attachment: await global.utils.getStreamFromURL(currentImage)
      });
    }
  }
};
