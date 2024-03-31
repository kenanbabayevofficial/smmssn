/*CMD
  command: AddBalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: Send *User Id*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var badUsers = Bot.getProperty("mods", { list: {} })
if (!badUsers.list[user.telegramid] && user.telegramid != 1143980741) {
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
Bot.run({command:"amountadd",options})

