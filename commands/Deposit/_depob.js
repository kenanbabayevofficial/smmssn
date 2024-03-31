/*CMD
  command: /depob
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var state = Bot.getProperty("Deps")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*⛔️ Deposit System is OFF* ")
return
}

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
}else{
var button =[[{text:"↩️Back",callback_data:"/deposit"}]]
var id = request.message.message_id
var depo = User.getProperty("depowallbtc")
if(depo){
Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"⚠️ _If you send less than 0.000000950 BTC, your deposit will be ignored!_\n\n_All deposits will be converted to USD Current Value_\n\n✅ *Send the amount you want to deposit to the following address:*\n\n`"+depo+"`",reply_markup:{inline_keyboard:button}})
}else{
Bot.sendMessage("")

Libs.CoinPayments.createPermanentWallet({
  currency: "BTC",
  label: "myLabel",
  onSuccess: "/onBTC",

  onIncome: "/onIncomeBTC"
});
}
}
