/*CMD
  command: /depoon
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Adminpanel
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var key = Bot.getProperty("admin_chat")
if (user.telegramid== key){
Bot.setProperty("Deps" ,"✅ Turned On","string")
Bot.runCommand("/depostop")
}else{
return
}

