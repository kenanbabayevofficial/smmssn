/*CMD
  command: /pmessage
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel
  answer: Send Now Your *Msg Admin*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(user.telegramid!="5234548626"){
Bot.sendMessage('u r not a admin')
return}
var msg = message
var ID = User.getProperty("privateid")
var b = [
    [
      {
        title: "Reply to Admin ",
        command: "/support"
      }
    ]
  ]
  Bot.sendInlineKeyboardToChatWithId(
    ID,
    b,
    "*📩 New Private Message*\n*From Admin:*" + "\n*Message:* " + msg
  )
Bot.sendMessage("*Message Was Sent:*\n"+msg+"")
