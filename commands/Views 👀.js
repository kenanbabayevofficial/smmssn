/*CMD
  command: Views 👀
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Service :- 👀 Instagram Post Views

Description :- *This service will help you to increase your Instagram Post Views of Reels, Video, IGTV.*

Drop Rate :- *Non Drop*

Price :- *$0.01 per 1000 Views.*

Quantity :- *Min = 1000 Views, Max = 1000000 Views.*

➡️ *Enter the amount of Views you need from 1000 to 1000000*
  ANSWER
  keyboard: back ↩️
  aliases: 
  group: 
CMD*/

User.setProperty("memamount", message,"string")
var value = message
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
Bot.runCommand("Members")
}else{
if(data.message < 1000){
Bot.sendMessage("*Minimum Order Is 1000 Views*")
Bot.runCommand("Views 👀")
}else{
Bot.runCommand("insv")}}


