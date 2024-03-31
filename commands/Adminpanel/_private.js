/*CMD
  command: /private
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: Send User *Id*
  keyboard: 
  aliases: 
  group: 
CMD*/

if(user.telegramid == message) {
  Bot.sendMessage("*❌Please You can not use Your Own Id‼️⭕️*")
Bot.runCommand("/private")
  return
}else
User.setProperty("privateid",message,"integer")
Bot.runCommand("/pmessage")
