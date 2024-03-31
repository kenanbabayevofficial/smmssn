/*CMD
  command: paypal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

var buttons = [[
    {title: "Back ↩️", command: "Depo Menu"}],
];

Bot.sendInlineKeyboard(buttons,"PAYPAL DETAILS\n\n1. Link to pay: bit.ly/3BxPFkU\n2. Include your USERNAME (@"+user.username+")  in the comments\n\nℹ Once the payment is sent, share the screenshot as soon as possible on @BotsBusinessSellerAdmin",{disable_web_page_preview: true})

