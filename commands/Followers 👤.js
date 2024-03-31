/*CMD
  command: Followers 👤
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Service :- 👤 *Instagram Followers*

Description :- *This service will help you to increase your Instagram Followers.*

Drop Rate :- *Non Drop*
Refill :- *365 Days*

Price :- *$1 per 1000 Followers.*

Quantity :- *Min = 10 Members, Followers, Max = 100000 Followers.*

➡️ *Enter the amount of members you need from 10 to 100000*
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
if(data.message < 10){
Bot.sendMessage("*Minimum Order Is 10 Views*")
Bot.runCommand("Followers 👤")
}else{
Bot.runCommand("insf")}}


