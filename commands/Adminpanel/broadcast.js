/*CMD
  command: broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: *Send Message For Broadcast*
  keyboard: 
  aliases: 
  group: 
CMD*/

var key=Bot.getProperty("admin_chat")
if(user.telegramid = key){
Bot.runAll({ 
command: "adminmessage",
options: {msg: message}
})

Bot.sendMessage("Message Sent Instantly😉")
}


