/*CMD
  command: viapp
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
  "*Your Claim Is Approved You Will Get Views On The Link You Given\n Thanks For Reffering Our Bot ❤️😊*"
)
