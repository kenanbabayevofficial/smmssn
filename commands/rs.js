/*CMD
  command: rs
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 👇🏻 Send Reel Link
  keyboard: 
  aliases: 
  group: 
CMD*/

User.setProperty("subs", message,"string")
let bot10 = User.getProperty("memamount")

var answer = bot10 * 0.00005
var button=[[{title:"❌ Cancel",command:"Memdis"},{title : "✅ Confirm" ,command : "rsapp"}]]
Bot.sendInlineKeyboard(button,"*👇🏻 Do You Confirm This Order?\n\n🔗 Link : "+message+"\n💰 Order Price : "+answer+"$\n⏺ Saves Ordered : "+bot10+"\n\n👈🏻 With Confirming your order will be submitted and processing*")


