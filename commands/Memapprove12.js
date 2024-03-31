/*CMD
  command: Memapprove12
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
let rnd = Libs.Random.randomInt(110569, 999990); 
let bot10 = User.getProperty("memamount")
let subs = User.getProperty("subs")

var answer = bot10 * 0.0012
var stat = Libs.ResourcesLib.anotherChatRes("bots", "global")
var level = Libs.ResourcesLib.userRes("level")
var key = Bot.getProperty("channel")
var bot = Bot.getProperty("Bot")
var key = Bot.getProperty("channel")
var num = Libs.ResourcesLib.userRes("num")
var balance = Libs.ResourcesLib.userRes("balance",email)
var info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")"
var res= Libs.ResourcesLib.userRes("balance")
var email = User.getProperty("email")
var k = Bot.getProperty("management")
if (k == "on") {
  Api.sendPhoto({
    photo: "https://imbt.ga/0qL1iJuryt",
    caption:
      "<b> We are currently Saving power, Please use this command after some Hours</b>",
    parse_mode: "HTML"
  })
  return
} else var to = Bot.getProperty("maintenance")
if (to == "on") {
  Bot.sendMessage(
    "*😌 Sorry*, The Bot is currently *🛠 Under Maintenance,*\n    🤘 _Please wait it may take up to 1-12 Hour_.")
  return
} else
var ban = Bot.getProperty(user.telegramid + "ban")
if (ban == true) {
  var button = [
    { title: "🗣️Contact Support", url: "https://t.me/MichealAwuah" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
return
}else
if(res.value() < answer ){
var button = [[{title:"Deposit ✅",command:"Depo Menu"}]]

Bot.sendInlineKeyboard(button,

  "⚠️ _To Order You Need To Have_ "+answer+"$\n\n💵 _Your Balance: "+res.value()+"$_\n\n✅ _Deposit Now To Order_"

)
return
}else{
balance.add(-answer)
num.add(1)
level.add(1)
var bots = User.getProperty("bots")
if (!bots) {
  stat.add(1)
}
}

Bot.sendMessage("*Your Order Has Been Submitted and Processing\n\nOrder Details :\nℹ️ Order ID :* `"+rnd+"`\n*🔗 Link : "+subs+"*\n💰 *Order Price :* `"+answer+"$`\n*👤 Members Ordered :* `"+bot10+"`\n\n*😊 Thanks for ordering\nCheck Your Order Status Here @SocialHikee*")

Api.sendMessage ({chat_id: key, text: "✅ New Non Drop Telegram Members Order\n\nℹ️ Order ID = `"+rnd+"`\n⚡ Status = `Processing...`\n👤 User = "+user.first_name+"\n🆔️ User ID = `"+user.telegramid+"`\n👤 Telegram Members = `"+bot10+"`\n💰 Order Price : `"+answer+"$` \n🔗 Link = "+subs+"\n\n🤖 Bot = "+bot+"",
parse_mode: "Markdown"})
