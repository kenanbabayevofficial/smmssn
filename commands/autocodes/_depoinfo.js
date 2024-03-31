/*CMD
  command: /depoinfo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: autocodes

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
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
var key = [[{title:"◀️Go Back",command:"Depo Menu"}]]
Bot.sendInlineKeyboard(key,"*ℹ️ Information On Deposit Prices*\n\n`1 TRX` == *1 YDP* 💎\n`1 DOGE` == *2 YDP* 💎\n`0.000002 BTC`  == *1 YDP* 💎\n`0.001 LTC` == *1 YDP* 💎\n`0.0006 ZEC` == *1 BP* 💎\n`0.0002 BCH` == *1 YDP* 💎\n`0.0003 BNB` == *1 YDP* 💎\n`0.00003 ETH` == *1 YDP* 💎 \n`20 BTT` == *1 YDP* 💎\n`0.10 XRP` == *1 YDP* 💎\n`1 USDT` == *4 YDP* 💎\n`0.0003 BSC` == *1 YDP* 💎\n`0.0006 DASH` == *1 YDP* 💎\n\n*⚠️ Note: All Funds Will Be Converted To BP*\n\n_⏳ When You add funds then it takes 5-10 minutes to add balance in your account._\n_After Adding funds you can buy Bots and Codes._")
