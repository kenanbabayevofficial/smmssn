/*CMD
  command: /onETH
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Multideposit

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
var wallet = options.result.address;
var button=[{title:"↩️Back",command:"/deposit"}]
Bot.sendInlineKeyboard(button,"⚠️ _If you send less than 0.00003 ETH, your deposit will be igonred!_\n\n_0.00003 ETH = 1 YDP 💎_\n\n✅* Send the amount you want to deposit to the following address:*\n\n`" + wallet + "`")
User.setProperty("depowalleth",wallet,"string")

