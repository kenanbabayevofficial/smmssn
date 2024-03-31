/*CMD
  command: freeview
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
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
var bal = Libs.ResourcesLib.userRes("rebal")
if(bal.value() < 1000 ){
Bot.sendMessage("*❌ You can claim Minimum 1000 Free Post Views\n\n💰 Your Balance : "+bal.value()+" Free Views\n\nShare Your Referrel Link To More Users*")
return
}else{
Bot.runCommand("freeview2")

}
