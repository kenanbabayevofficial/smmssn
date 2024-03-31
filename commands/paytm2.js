/*CMD
  command: paytm2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let money = User.getProperty("amount")

var doge = CurrencyQuote.convert({ amount: money, from: "INR", to: "USD" })

var rand = Libs.Random.randomInt(100,100000);
User.setProperty("id",rand,"integer")
User.setProperty("re",null)
var txt = "*🚀 User = "+user.first_name+"*\n💸 *Amount =* `"+money+" Rs`\n*💲 USD =* `"+doge+"$`\n*🚧 Order Id *= `"+rand+"`"
var button = [
[{title:"Pay 💴",url:"https://full2sms.in/accept_payment_api.php?token=PVOtrscg1d4QNoB6&amount="+money+"&order_id="+rand+""}],[{title:"Paid ✅",command:"/onSuc"}]
]
Bot.sendInlineKeyboard(button,txt,{is_reply : true})




