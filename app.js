const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '775335860:AAEeUvtYbMiZkb0aVX5A7BWkuYNsg05YH2E';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// // Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message
//
//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"
//
//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// Listen for any kind of message. There are different kinds of
// messages.

const http = require('http');
const https = require('https');
http.createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
  res.end('')
});
setInterval(function(){
  https.get('https://exampletelegrambot.herokuapp.com/')
},300000);

bot.sendMessage(781103564, 'Bot is running');
const deadline = 1552417200;
const needZero = num => num > 9 ? `${num}` : `0${num}`;

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  switch (msg.text) {
    case '/start':
      bot.sendMessage(chatId, 'Welcome! list of all commands: \/deadline');
      break;
    case '/deadline':
      console.log(msg);
      const time = new Date(msg.date * 1000);
      const hours = needZero(parseInt((deadline - msg.date) / 3600));
      const mins = needZero(parseInt((deadline - msg.date) % 3600 / 60));
      const sec = needZero(parseInt(deadline - msg.date) % 60);
      bot.sendMessage(chatId, `Time left ${hours}:${mins}:${sec}`);
      break;
    default:
      bot.sendMessage(chatId, `Hello`);
      break;
  }
});
