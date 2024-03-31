/*CMD
  command: insf
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let bot10 = User.getProperty("memamount")

var answer = bot10 * 0.001
User.setProperty("answer", answer,"string")
let optio = { disable_web_page_preview: true, parse_mode: "Markdown"}
Bot.sendMessage("💰 *Order Charge* : `$"+answer+"`\n\n👇🏻 *Send your Instagram Profile link :*\n\n⚠️ `Link Format` : _https://instagram.com/(your username/id) Send only link if you send username your order will be cancelled and price will be deducted._", optio)
Bot.runCommand("insfapp")


