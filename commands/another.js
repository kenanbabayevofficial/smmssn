/*CMD
  command: another
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var a2 = User.getProperty("Code")
HTTP.get({
  url:
    "https://telesubs.com/api/v2?key="+Bot.getProperty("api")+"&action=status&order=" +
    a2 +
    "",
  success: "/orderInfoSuccess1"
})

