/*CMD
  command: irapprove
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

User.setProperty("subs", message,"string")
let bot10 = User.getProperty("memamount")

var answer = bot10 * 0.0002
var button=[[{title:"❌ Cancel",command:"Memdis"},{title : "✅ Confirm" ,command : "irapprove1"}]]
Bot.sendInlineKeyboard(button,"*👇🏻 Do You Confirm This Order?\n\n🔗 Link : "+message+"\n💰 Order Price : "+answer+"$\n📊 Reach Ordered : "+bot10+"\n\n👈🏻 With Confirming your order will be submitted and processing*")


