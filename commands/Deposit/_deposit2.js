/*CMD
  command: /deposit2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

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
    { title: "🗣️Contact Support", url: "https://t.me/yung92" }
  ]
  Bot.sendInlineKeyboard(button, "*You are banned from using this bot*")
  return
} else
var state = Bot.getProperty("Deps")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*⛔️ Deposit System Is Currently OFF* ")
  return
} else
var key = [[{text:"♻️Deposit Prices Info♻️",callback_data:"/depoinfo"}],[{text:"TRX",callback_data:"/depot"},{text:"DOGE",callback_data:"/depod"},{text:"BTC",callback_data:"/depob"}],[{text:"LTC",callback_data:"/depol"},{text:"XRP",callback_data:"/depox"}],[{text:"ETH",callback_data:"/depoe"},{text:"BCH",callback_data:"/depobch"},{text:"BNB",callback_data:"/depobnb"}],[{text:"BTT",callback_data:"/depobtt"},{text:"BB",callback_data:"/depobb"}],[{text:"📒 Close Tab",callback_data:"/close"}]]
var id = request.message.message_id

Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"*👋 Welcome!*\n_Here You Can Add Funds To Your Balance!_\n\n➕ *Select Deposit Currency*, All deposits will be converted to *YDP*",reply_markup:{inline_keyboard:key}
})

