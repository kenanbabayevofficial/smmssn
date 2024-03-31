/*CMD
  command: depocb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send bp to add to the user
  keyboard: 
  aliases: 
  group: 
CMD*/

if(user.telegramid!="484675895"){
Bot.sendMessage('u r not a admin')
return}
var curr = Bot.getProperty("curr")
var bot = Bot.getProperty("Bot")
var key = Bot.getProperty("channel")
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
  "*🎁 You have received " + amount + " BP 💎 from Admin.*"
)
var stat = Libs.ResourcesLib.anotherChatRes("active", "global")
  stat.add(1)

Api.sendMessage({
  chat_id: key,
  text:
    "*🥰 New Deposit Through CoinBase*\n\n*👤 User CoinBase ID*: " +" "+
     TRANSACTION +"\n\n*💵 Amount* : " +cryp + "* "+curr+"*\n\n*🤩 Buy Now Your Pro Bots And Codes Here ⬇️:*"+bot+"",parse_mode : "Markdown" , disable_web_page_preview: true
})
