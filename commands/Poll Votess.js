/*CMD
  command: Poll Votess
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Service Name : Increase Your Poll Votes

Instant Start
Fast delivery to any channel post
EXAMPLE LINK : put post link of vote
Enter the Text of Poll in the "Answer Number" field which you want get votes for.
Example vote: Yes Or No Poll
Type Yes in the Answer to get votes for Yes
Minimum Order : 500 Votes
Price : 0.4$ per 500 Votes

Enter the amount of votes you need ⬇️⬇️⬇️

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
if(data.message < 500){
Bot.sendMessage("*Minimum Order Is 500*")
Bot.runCommand("Poll Votes")
}else{
Bot.runCommand("pvvv")}}


