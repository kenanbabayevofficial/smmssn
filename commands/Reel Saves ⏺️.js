/*CMD
  command: Reel Saves ⏺️
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Service Name : Reel Saves Increaser*

_Minimum Order : 20 Saves
Price : 0.001$ per 20 Saves_

`👇🏻 Enter the amount of Likes you need`
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
if(data.message < 20){
Bot.sendMessage("*Minimum Order Is 20 Saves*")
Bot.runCommand("Reel Saves ⏺️")
}else{
Bot.runCommand("rs")}}


