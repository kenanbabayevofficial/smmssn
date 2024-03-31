/*CMD
  command: inslapprove
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
let subs = User.getProperty("subs")

let bot10 = User.getProperty("memamount")

var answer = bot10 * 0.00009
User.setProperty("answer", answer,"string")
var button = [[{text:"❌ Cancel",callback_data:"Memdis"},{text: "✅ Confirm" ,callback_data: "inslapprove1"}]]
var par = "html"
var g = "<b>👇🏻 Do You Confirm This Order?\n\n🔗 Link : "+message+"\n💰 Order Price : "+answer+"$\n👍 Likes Ordered : "+bot10+"\n\n👈🏻 With Confirming your order will be submitted and processing</b>"
Api.sendMessage({chat_id:chat.chatid,text:g,parse_mode:par,disable_web_page_preview: true,reply_markup:{inline_keyboard:button}})

