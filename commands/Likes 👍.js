/*CMD
  command: Likes 👍
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Service :- 👍 *Instagram Post Likes*

Description :- *This service will help you to increase your Instagram Post Likes.*

Drop Rate :- *Non Drop*
Refill :- *365 Days*

Price :- *$0.09 per 1000 Likes.*

Quantity :- *Min = 10 Likes, Max = 25000 Likes.*

➡️ *Enter the amount of Views you need from 10 to 25000*
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
Bot.runCommand("Likes 👍")
}else{
if(data.message < 10){
Bot.sendMessage("*Minimum Order Is 10 Likes*")
Bot.runCommand("Likes 👍")
}else{
Bot.runCommand("insl")}}


