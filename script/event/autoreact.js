const axios = require('axios');
const path = require('path');
const fs = require('fs');
const request = require('request');

module.exports.config = {
  name: "randomReact",
  version: "69",
  credits: "cliff",
};

module.exports.handleEvent = async function ({ api, event }) {
  if (event.body) {
    const emojis = ['😘', '🥺', '😀', '😾', '😛', '😽', '😸', '🖕', '💋', '🥴', '🐟', '🕊️', '🥰', '❤️', '🤤', '💐', '🐢', '🍆', '🌽', '😂', '😭', '😅', '🤣', '🍒', '🤗', '🦪', '🥠', '🍺', '🤸', '🌸', '🤪', '🙄', '🙈', '🐼', '🥒'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    api.setMessageReaction(randomEmoji, event.messageID, () => {}, true);
  }
};
