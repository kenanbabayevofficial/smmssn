/*CMD
  command: trxx
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


Api.sendPhoto({
  photo: "https://ibb.co/d4nnVyM", // it is picture!
  caption: "⚠️ _If you send less than 1 TRX, your deposit will be ignored!_\n\n*All deposits will be converted to USD Current Value*\n\n✅ *Send the amount you want to deposit to the following address:*\n\n`TWSTgYVPbx6tULeNFGsZibqvSUASMCtYSx`",
parse_mode : "Markdown" ,


  reply_markup: { inline_keyboard: [
    [
      { text: "PAID ✅", callback_data: "Pay" },{text: "BACK ↩️", callback_data: "/deposit" }
    ]]}
});

