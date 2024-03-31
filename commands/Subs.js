/*CMD
  command: Subs
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/


let bot10 = User.getProperty("memamount")

var answer = bot10 * 0.0006
User.setProperty("answer", answer,"string")
let optio = { disable_web_page_preview: true, parse_mode: "Markdown"}
Bot.sendMessage("💰 *Order Charge* : `$"+answer+"`\n\n👇🏻 *Send your Channel/Group link :*\n\n⚠️ `Link Format` : _https://t.me/SocialHikee Send only link if you send username your order will be cancelled and price will be deducted._", optio)
Bot.runCommand("Memapprove")
