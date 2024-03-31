/*CMD
  command: Facebook Followers 👤
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Service Name : Facebook Real Page/Profile Followers Increaser*

_Minimum Order : 50 Followers
Price : 0.2$ per 50 Followers_

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
Bot.runCommand("Facebook Followers 👤")
}else{
if(data.message < 50){
Bot.sendMessage("*Minimum Order Is 50 Followers*")
Bot.runCommand("Facebook Followers 👤")
}else{
Bot.runCommand("ff")}}


