/*CMD
  command: fowardmgs
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: Enter Your *Message*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(user.telegramid!="1904155234"){
Bot.sendMessage('u r not a admin')
return}
var key=Bot.getProperty("YdpSocialHikeChannel")
Api.forwardMessage({
  chat_id: key,
  from_chat_id: request.chat.id,
  message_id: request.message_id
})

