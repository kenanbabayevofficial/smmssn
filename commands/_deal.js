/*CMD
  command: /deal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: send email

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 1028030594){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
}else{
Bot.sendMessage("Not admin")
}
