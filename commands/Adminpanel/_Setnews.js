/*CMD
  command: /Setnews
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Adminpanel

  <<ANSWER
Please Send The *Update Message* For Today

*Note*: _You can add Bjs signs_.
  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let msg = message;
Bot.setProperty("About", msg, "string");
Bot.sendMessage("✅ *Updates button text set to* " +message+"\n",{parse_mode:"Markdown"})
}else{
return
}

