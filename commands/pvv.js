/*CMD
  command: pvv
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *👇🏻 Send Your Post Link*
  keyboard: 
  aliases: 
  group: 
CMD*/

User.setProperty("subs", message,"string")
let bot10 = User.getProperty("memamount")
let bot12 = User.getProperty("pollans")

var answer = bot10 * 0.0008
var button=[[{title:"❌ Cancel",command:"Memdis"},{title : "✅ Confirm" ,command : "pvvapprove"}]]
Bot.sendInlineKeyboard(button,"*👇🏻 Do You Confirm This Order?\n\n🔗 Link : "+message+"\n💰 Order Price : "+answer+"$\n🗣️ Vote Option : "+bot12+"\n👍 Votes Ordered : "+bot10+"\n\n👈🏻 With Confirming your order will be submitted and processing*")


