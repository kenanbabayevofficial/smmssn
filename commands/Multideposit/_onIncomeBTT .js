/*CMD
  command: /onIncomeBTT 
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Multideposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (!options) {
  // for security we need to check that this command runned only by lib
  // user can not run command with options
  return
}

lrt key = Bot.getProperty("YdpSocialHikeChannel")
let currency = options.currency
let amount = options.amount

let fiat_amount = options.fiat_amount
let fiat_currency = options.fiat_coin


let txn_id = options.txn_id

// see another fields by
// Bot.sendMessage(inspect(options));

Bot.sendMessage(
  "*🤩 Your Funds Successfully Received :*" +"\n\n*Amount*:\n" +
    amount + " " +currency +" (" + fiat_amount +
    " " +fiat_currency +")" +"\n\n*⛓ Transaction Id:* `" +
    txn_id + "`\n\n*😎 Balance Added*: +" +fiat_amount+" USD"
)

let res = Libs.ResourcesLib.userRes("balance")
res.add(fiat_amount)
Api.sendMessage({
  chat_id: key,
  text:
    "<b>" +
    "🥰 New Deposit From A User!!\n\n👤 User: " +
    " " +user.username +"\n\n💵 Amount : " +amount +" BTT" +"\n\n" +
    "💎 Gained: " +fiat_amount+" USD\n\n⛓ Transaction ID: " + txn_id +
    "\n\n🤩 Grow Your Social Platform From Here\n"+bot+",
var bonus = amount * 100 * 0.4
var referrer = Libs.ReferralLib.currentUser.attractedByUser()
if (referrer) {
  var referrerRes = Libs.ResourcesLib.anotherUserRes(
    "balance",
    referrer.telegramid
  )
  referrerRes.add(+bonus)
  Bot.sendMessageToChatWithId(
    referrer.telegramid,
     "*➕ Referral Deposit: +* " + bonus.toFixed(5) + " *MikiPoints 💎*"
  )
}
var stat = Libs.ResourcesLib.anotherChatRes("active", "global")
var etm = User.getProperty("dep")
if (!etm) {
  stat.add(1)
  User.setProperty("dep", true)
}

