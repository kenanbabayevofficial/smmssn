/*CMD
  command: YouTube Views 👀
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Service Name : YouTube Video Views Increaser*

_Minimum Order : 100 Views
Price : 0.2$ per 100 Views_

`👇🏻 Enter the amount of views you need`
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
Bot.runCommand("YouTube Views 👀")
}else{
if(data.message < 100){
Bot.sendMessage("*Minimum Order Is 100 Views*")
Bot.runCommand("YouTube Views 👀")
}else{
Bot.runCommand("yv")}}


