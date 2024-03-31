/*CMD
  command: Post Views
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Service :- 👀 *Telegram Channel Post Views*

Description :- *This service will help you to increase your channel post views.*

Drop Rate :- *Non Drop*

Price :- *$0.01 per 1000 Members.*

Quantity :- *Min = 250 Members, Max = 15000 Members*

➡️ *Enter the amount of members you need from 250 to 15000*
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
if(data.message < 250){
Bot.sendMessage("*Minimum Order Is 250*")
Bot.runCommand("Post Views")
}else{
Bot.runCommand("pv")}}


