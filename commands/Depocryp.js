/*CMD
  command: Depocryp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send the amount in crypto

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(user.telegramid!="1904155234"){
Bot.sendMessage('u r not a admin')
return}
Bot.setProperty("cryp", message, "string")
var button=[[{title:"Coinpayment",command:"Depoadd"},{title : "Coinbase" ,command : "depocb"}]]
Bot.sendInlineKeyboardToChatWithId(484675895,button,"*Select The Currency Address You Want To Show On Channel*")

