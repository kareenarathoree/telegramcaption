const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const  express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.json({
    name: 'Master Bot API',
    work: 'Telegram Bot API',
  });
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const bot = new TelegramBot('6638864804:AAGxJMuD74E9mhP2e1OScM_wzm2bQXljwv8', {polling: true});

// Replace 'YOUR_CHANNEL_ID' with your actual channel ID
const channelId = '-1002133172594';

// Event listener for when a file is received
bot.on('video', (msg) => {
    const fileId = msg.video.file_id;
    const fileName = msg.video.file_name;

    // Get file stream
    const fileStream = bot.getFileStream(fileId);

    // Save file to channel
    bot.sendVideo(channelId, fileId, { caption: `${fileName}` });
});

// Event listener for when a text message is received
bot.on('text', (msg) => {
    // You can add more logic here for handling text messages if needed
    console.log(msg.text);
});

app.listen(3000, () => {
  console.log('App is running on port 3000');
});

console.log('Bot is running...');
