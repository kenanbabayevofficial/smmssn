/*CMD
  command: Stau
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Adminpanel
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})


if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

var number =
Libs.Random.randomInt(800,1500)

var numb =
Libs.Random.randomInt(300,1000)

var num =
Libs.Random.randomInt(900,2000)

var nu =
Libs.Random.randomInt(700,1900)


var date = Libs.DateTimeFormat.format(new Date(),"dd/mm/yyyy")

var time = Libs.DateTimeFormat.format(new Date(), "h:MM:ss T") +"M"

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var use = Libs.ResourcesLib.anotherChatRes("use", "global")
Bot.sendMessage("📊 *Bot Live Statistics*\n\n👥 _Users_ = *4485 Users*\n\n🎯 _Current Depositing Users:_ *"+number+"*\n\n🤖 _Total Bots Sold:_ *"+num+"*\n\n👨‍💻 _Total Codes Sold:_ *"+nu+"*\n\n☢️ _Online Users:_ *"+numb+"*\n\n🔝_Data for:_ *(Today)*\n📅 _DATE:_ *"+date+"*\n⏳ _TIME:_ *"+time+"*")
}
