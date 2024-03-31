/*CMD
  command: UnbanUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: Send *Tgid?*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var badUsers = Bot.getProperty("mods", { list: {} })
if (!badUsers.list[user.telegramid] && user.telegramid !=1904155234) {
  Api.sendPhoto({
    photo: "https://images.app.goo.gl/4rcN9nn7G1skV28J9",
    caption: "<b>You were demoted</b>",
    parse_mode: "HTML"
  })

  return
} else
var badUsers = Bot.getProperty("blacklisted", { list: {} })
if (badUsers.list[message] && user.telegramid != 1904155234) {
  Api.sendPhoto({
    photo: "https://imbt.ga/0FrY3m2i75",
    caption: "<b>User cannot be unblocked!</b>",
    parse_mode: "HTML"
  })
  return
} else 
var tgID = message
Bot.setProperty(message + "ban", false)
Bot.sendMessage(
  " *Unbanned:* " + "[" + "User" + "]" + "(" + "tg://user?id=" + message + ")"
)
Bot.sendMessageToChatWithId(tgID,"*☺️ You Have Been Unbanned Now In This Bot*")
Api.sendMessage({
  chat_id: "5234548626",
  text: "*@" +
    user.telegramid +
    " Unbanned: " + message + "*",
parse_mode: "markdown"
})
