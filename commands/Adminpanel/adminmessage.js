/*CMD
  command: adminmessage
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Adminpanel
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(user.telegramid!="1143980741"){
Bot.sendMessage('u r not a admin')
return}
var msg = options.msg

Bot.sendMessage("*🚧🚧ADMIN BROADCAST🚧🚧\n🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥🚥*\n\n "+msg+"")
