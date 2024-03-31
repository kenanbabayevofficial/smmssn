/*CMD
  command: Depoadd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send The Amount You Want To Add To *User Balance*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(user.telegramid!="1904155234"){
Bot.sendMessage('u r not a admin')
return}
var curr = Bot.getProperty("curr")
var bot = Bot.getProperty("YdpSocialHikeBot")
var key = Bot.getProperty("YdpSocialHikeChannel")
var USERFIRST = Bot.getProperty("USERFIRST")
var TRANSACTION = Bot.getProperty("TRANSACTION")
var USERID = Bot.getProperty("USERID")
var cryp = Bot.getProperty("cryp")


let amount = parseFloat(message)
let value = message
let res = Libs.ResourcesLib.anotherUserRes("balance", USERID)

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })

  return
} else res.add(parseFloat(amount))
Bot.sendMessage(
  "*The amount " +
    amount +
    " BP 💎 has been added to the User ID: * " +
    USERID +
    " * Balance*"
)
Bot.sendMessageToChatWithId(
  USERID,
  "*🎁 You have received " + amount + " YDP 💎 from Admin.*"
)
var button=[[{title:"TRX",command:"depotrx"},{title : "BSC" ,command : "depobsc"}]]
Bot.sendInlineKeyboardToChatWithId(1904155234,button,"*Select The Currency Address You Want To Show On Channel*")

