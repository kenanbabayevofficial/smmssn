/*CMD
  command: freeview2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter the the post views
  keyboard: 
  aliases: 
  group: 
CMD*/

var bal = Libs.ResourcesLib.userRes("rebal")
var value = message
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
Bot.runCommand("freeview2")
return
}else
if (message < 1000) {
 Bot.sendMessage("_❌ Minimum_ `1000` _Views_")
Bot.runCommand("freeview2")
return  
}else
if (message > bal.value()) {
Bot.sendMessage("_❌ Maximum Is :_ `" + bal.value()+"` _Views_")
Bot.runCommand("freeview2") 
return
}else {
bal.add(-message)
Bot.runCommand("link")
Bot.runCommand("veri")
}
