/*CMD
  command: Broadbro
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(user.telegramid!="1904155234"){
Bot.sendMessage('u r not a admin')
return}
var fullBotUsers = Bot.getProperty("wholeUsers")
for (var index in fullBotUsers) {
  var info = fullBotUsers[index]
  Api.sendMessage({
    chat_id: info,
    text: "" +
      message +"",
    parse_mode: "Markdown"
  })
}


