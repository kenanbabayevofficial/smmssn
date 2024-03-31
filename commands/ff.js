/*CMD
  command: ff
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👇🏻 Send Facebook Profile/Page Link
  keyboard: 
  aliases: 
  group: 
CMD*/

User.setProperty("subs", message,"string")
let bot10 = User.getProperty("memamount")

var answer = bot10 * 0.004
var button=[[{title:"❌ Cancel",command:"Memdis"},{title : "✅ Confirm" ,command : "ffapp"}]]
Bot.sendInlineKeyboard(button,"*👇🏻 Do You Confirm This Order?\n\n🔗 Link : "+message+"\n💰 Order Price : "+answer+"$\n👤 Followers Ordered : "+bot10+"\n\n👈🏻 With Confirming your order will be submitted and processing*")


