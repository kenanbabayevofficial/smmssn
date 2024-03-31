/*CMD
  command: /link
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BB Points
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// Generate webhook link for BB Point Bot
let url = Libs.Webhooks.getUrlFor({
 command: "onBBPointIncome"
})
// send url without markup
Api.sendMessage({ text: url });
