/*CMD
  command: YouTube Likes 👍
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Service Name : YouTube Video Likes Increaser*

_Minimum Order : 50 Views
Price : 0.2$ per 50 Views_

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
Bot.runCommand("YouTube Likes 👍")
}else{
if(data.message < 50){
Bot.sendMessage("*Minimum Order Is 50 Likes*")
Bot.runCommand("YouTube Likes 👍")
}else{
Bot.runCommand("yl")}}


