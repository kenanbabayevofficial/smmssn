/*CMD
  command: YouTube Subscribers 👤
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Service Name : YouTube Video Subscribers Increaser*

_Minimum Order : 10 Subscribers
Price : 0.3$ per 10 Subscribers_

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
Bot.runCommand("YouTube Subscribers 👤")
}else{
if(data.message < 10){
Bot.sendMessage("*Minimum Order Is 10 Subscribers*")
Bot.runCommand("YouTube Subscribers 👤")
}else{
Bot.runCommand("ys")}}


