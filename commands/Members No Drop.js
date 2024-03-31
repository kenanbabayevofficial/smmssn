/*CMD
  command: Members No Drop
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Service :- 👤 *Telegram Non Drop Members*

Description :- *This service will help you to get non drop members for telegram groups and channels.*

Drop Rate :- *Non Drop (0%)*

*For any public/private channel and group also.*

Price :- *$1 per 1000 Members.*

Quantity :- *Min = 50 Members, Max = 50000 Members*

➡️ *Enter the amount of members you need from 50 to 50000*
  ANSWER
  keyboard: Back ↩️
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
Bot.runCommand("Members No Drop")
}else{
if(data.message < 50){
Bot.sendMessage("*Minimum Order Is 50*")
Bot.runCommand("Members No Drop")
}else{
Bot.runCommand("Subs1")}}


