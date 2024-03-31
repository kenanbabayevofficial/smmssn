/*CMD
  command: /depobch
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

var button =[[{text:"↩️Back",callback_data:"/deposit2"}]]
var id = request.message.message_id
var depo = User.getProperty("depowallbch")
if(depo){
 Api.editMessageText({chat_id:chat.chatid,message_id:id,parse_mode:"Markdown",text:"⚠️ _If you send less than 0.0002 BCH, your deposit will be ignored!_\n\n_0.0002 BCH = 1 MP 💎_\n\n✅ *Send the amount you want to deposit to the following address:*\n\n`"+depo+"`",reply_markup:{inline_keyboard:button}
})
}else{
Bot.sendMessage("")

Libs.CoinPayments.createPermanentWallet({
  currency: "BCH",
  label: "myLabel",
  onSuccess: "/onBCH",

  onIncome: "/onIncomeBCH"
});
}
}





