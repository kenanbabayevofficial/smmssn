/*CMD
  command: LessBalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send user id
  keyboard: 
  aliases: 
  group: 
CMD*/

var badUsers = Bot.getProperty("mods", { list: {} })
if (!badUsers.list[user.telegramid] && user.telegramid != 484675895) {
  Api.sendPhoto({
    photo: "https://images.app.goo.gl/4rcN9nn7G1skV28J9",
    caption: "<b>You were demoted</b>",
    parse_mode: "HTML"
  })

  return
} else
var msg = message
var options = {tgid: message}
User.setProperty("id", msg)
Bot.run({command:"amountless",options})

