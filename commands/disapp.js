/*CMD
  command: disapp
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var USERFIRST = Bot.getProperty("USERFIRST")
var TRANSACTION = Bot.getProperty("TRANSACTION")
var USERID = Bot.getProperty("USERID")

Bot.sendMessage(
  "*done sent"
)
Bot.sendMessageToChatWithId(
  USERID,
  "*Oops! 😥 Seems Your Refferels Ars Fake, Try Reffering Again*"
)
