/*CMD
  command: Members
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Service :- 👤 *Telegram Low Drop Members*

Description :- *This service will help you to get low drop members for telegram groups and channels.*

Drop Rate :- *Low Drop*

*For any public/private channel and group also.*

Price :- *$0.6 per 1000 Members.*

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
Bot.runCommand("Members")
}else{
if(data.message < 50){
Bot.sendMessage("*Minimum Order Is 50*")
Bot.runCommand("Members")
}else{
Bot.runCommand("Subs")}}


