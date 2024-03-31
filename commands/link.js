/*CMD
  command: link
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send the post link in which you want views*
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.setProperty("USERID", user.telegramid, "string")
Bot.setProperty("USERFIRST", user.username, "string")
Bot.setProperty("TRANSACTION", message, "string")
Bot.sendMessage("🥳 Done, Your Views Has Been Submitted After Verifying Your Refferels You will Get Views")
var button=[[{title:"✅ Approve",command:"viapp"},{title : "❌ Disapprove" ,command : "disapp"}]]
 Bot.sendInlineKeyboardToChatWithId(
    484675895,
    button,
    "*The User @"+user.username+", Who Reffered Want Views On This Link "+message+"*")


