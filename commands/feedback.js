/*CMD
  command: feedback
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ❤️ feedback
  group: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})


var button = [[{title:"🌟🌟🌟🌟🌟",command:"/rate 🌟🌟🌟🌟🌟"}],[{title:"🌟🌟🌟🌟",command:"/rate 🌟🌟🌟🌟"}],
[{title:"🌟🌟🌟",command:"/rate 🌟🌟🌟"}],[{title:"🌟",command:"Rat"}]]

Bot.sendInlineKeyboard(button,

  "*Please  Rate Us📍\n\n🌟🌟🌟🌟🌟 - Amazing\n🌟🌟🌟🌟 - Awesome\n🌟🌟🌟 - Average\n🌟 - Waste*"

)
