/*CMD
  command: usdtt
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

var key = [[
    {title: "PAID ✅", command: "Pay" },
    {title: "BACK ↩️", command: "/deposit" }],
];


Bot.sendInlineKeyboard(
  key,
  "⚠️ _If you send less than 1 USDT, your deposit would be ignored!_\n\n*All deposits will be converted to USD Current Value*\n\n✅* Send the amount you want to deposit to the following address:*\n\n`TWSTgYVPbx6tULeNFGsZibqvSUASMCtYSx`"
)


