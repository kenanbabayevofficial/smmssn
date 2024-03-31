/*CMD
  command: Subs1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


let bot10 = User.getProperty("memamount")

var answer = bot10 * 0.001
User.setProperty("answer", answer,"string")
let optio = { disable_web_page_preview: true, parse_mode: "Markdown"}
Bot.sendMessage("💰 *Order Charge* : `$"+answer+"`\n\n👇🏻 *Send your Channel/Group link :*\n\n⚠️ `Link Format` : _https://t.me/YdpSocialHikeChannel Send only link if you send username your order will be cancelled and price will be deducted._", optio)
Bot.runCommand("Memapprovenon")
