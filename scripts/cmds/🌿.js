 const fs = require('fs');

module.exports = {
  config: {
    name: "🌿",
    version: "1.0",
    author: "Kennethhttps://pastebin.com/vLS9hSye",
    countDown: 5,
    role: 0,
    shortDescription: "nop' ",
    longDescription: "auto bot reply to your message",
    category: "reply",
  },
 
  onStart: async function() {},
 
  onChat: async function({ event, message, getLang, api }) {
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "🌿":
          const replies = [
            "☛『 𝐬𝐚𝐯𝐨𝐮𝐫𝐞 𝐜𝐡𝐚𝐪𝐮𝐞 𝐢𝐧𝐬𝐭𝐚𝐧𝐭 𝐝𝐞 𝐥𝐚 𝐯𝐢𝐞, 𝐜𝐚𝐫 𝐜'𝐞𝐬𝐭 𝐝𝐚𝐧𝐝 𝐥𝐚 𝐬𝐢𝐦𝐩𝐥𝐢𝐜𝐢𝐭é 𝐪𝐮𝐞 𝐬𝐞 𝐭𝐫𝐨𝐮𝐯𝐞 𝐥𝐞  𝐛𝐨𝐧𝐡𝐞𝐮𝐫 🌿』☚ ",
          ];
          api.setMessageReaction("🌿", event.messageID, event.messageID, api); 
          const randomIndex = Math.floor(Math.random() * replies.length);
          message.reply({
            body: replies[randomIndex],
          });
          break;
        default:
          return; 
      }
    }
  },
};
