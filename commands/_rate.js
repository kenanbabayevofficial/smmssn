/*CMD
  command: /rate
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
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
var alreadysent = User.getProperty("alreadysent")
if(alreadysent){
Bot.sendMessage("You Already Rated Thanks ❤️")
return}
Api.sendMessage({

   chat_id: "@YdpSocialHikeChannel",

   text: "*Thanks for your Feedback ❤️\n\nFirst Name: 👤 -  "+user.first_name+" \n👨‍💻User Id - "+user.telegramid+"\n\n😍Rating " + params + "*",parse_mode: "Markdown"

})

Api.answerCallbackQuery({

callback_query_id: request.id,

text: "😊😊😊 Thanks For Rating Us",

show_alert: true })
Bot.sendMessage("Thanks For Rating Us 😊❤️")
User.setProperty("alreadysent",".")
