/*CMD
  command: /setbot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
Bot.setProperty("Bot",message, "params");
Bot.sendMessage("✅ Bot " +message+ " Has Been Set For Messages In Channel");
}else{
return
}

