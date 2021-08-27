const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/s4drNeU.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Coded By Jokerser*
*Joker Bot😈* http://ẉa.me/➳Jokerser
*Owner number wa.me/919446697883*
*githublink       https://github.com/J0kerser/Jokerbot*
*audio commads    https://github.com/J0kerser/J0kerser/media/uploads*
*sticker commads  https://github.com/J0kerser/J0kerser/media/stickers*
*support group    https://chat.whatsapp.com/LGzd6GnuFjMFOJI6LC9Iic*
`}) 

}));
