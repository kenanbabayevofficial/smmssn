/*CMD
  command: Fake
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 📣 new orders, back ↩️
  group: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
Bot.sendKeyboard("💝 Telegram,💜 Instagram\n❤️ YouTube,💙 Facebook\nBack ⏪","👇🏻 Please Select Service You need\n\n*💵 Your Balance*: `" +balance.value(2) +"`$")

