/*CMD
  command: /setApi
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

if (!params) {
  Bot.sendMessage("Api Key Should Be Put In The Params")
  return
}
if (user.telegramid != 1467662372) {
  Bot.sendMessage("Not Admin!")
  return
}
if (params.length != 32) {
  Bot.sendMessage(
    "The Api Key"
  )
  return
}
if (params.length == 32) {
  Bot.sendMessage("*ApiKey Setupped To :* `" + params + "`")
  Bot.setProperty("api", params)
  return
}

