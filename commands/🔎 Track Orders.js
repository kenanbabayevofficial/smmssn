/*CMD
  command: 🔎 Track Orders
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🆔 *Send the Order ID to track status of your order.*
  keyboard: 
  aliases: 
  group: 
CMD*/

User.setProperty("Code",message,"string")
Bot.sendMessage("*Checking Info...*")
HTTP.get({
  url:
    "https://telesubs.com/api/v2?key="+Bot.getProperty("apikey")+"&action=status&order=" +
    message +
    "",
  success: "/orderInfoSuccess"
})

