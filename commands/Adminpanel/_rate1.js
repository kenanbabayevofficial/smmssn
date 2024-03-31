/*CMD
  command: /rate1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Adminpanel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var alreadysent = User.getProperty("alreadysen")
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
User.setProperty("alreadysen",".")
