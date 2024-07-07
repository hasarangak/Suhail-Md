const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_04_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAwLFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI3LFxuICAgICAgICA1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxODksXG4gICAgICAgIDYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDMyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDUsXG4gICAgICAgIDU5LFxuICAgICAgICA1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1LFxuICAgICAgICA0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidHRKalpQRUdEdVJuc3FTcVAwVEhlSjloUjF0WXUvUmtwZmNzbWdDbkdMOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYkROd2lHX1JUZU82UllxRTVldW44d1wiLFxuICBcInBob25lSWRcIjogXCI4YjNkMWVmMS1iNDkzLTQ4MmYtOTk5Zi01Mjc5N2I2NGIxMzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAxOTksXG4gICAgICAyMDksXG4gICAgICAzMyxcbiAgICAgIDE3OCxcbiAgICAgIDE1OCxcbiAgICAgIDQ3LFxuICAgICAgMTUxLFxuICAgICAgOTQsXG4gICAgICAyNDMsXG4gICAgICA5MCxcbiAgICAgIDE2OSxcbiAgICAgIDIyNSxcbiAgICAgIDE1OCxcbiAgICAgIDEyNyxcbiAgICAgIDM5LFxuICAgICAgMjI5LFxuICAgICAgODcsXG4gICAgICAyMjIsXG4gICAgICAxMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMTg4LFxuICAgICAgMTUwLFxuICAgICAgNTEsXG4gICAgICAxMzQsXG4gICAgICA3MCxcbiAgICAgIDIwMyxcbiAgICAgIDM1LFxuICAgICAgMjM4LFxuICAgICAgMTgsXG4gICAgICAyMTAsXG4gICAgICA5MSxcbiAgICAgIDExLFxuICAgICAgMzYsXG4gICAgICAyMzMsXG4gICAgICA3NSxcbiAgICAgIDYyLFxuICAgICAgMjM3LFxuICAgICAgOTEsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldDN0E0QjI5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NzM3NzE1OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0ODMzMTczNjc4OTA5NjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09IVHk3TUhFSlQ1cXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVStyOHUvcGRmRW85bmRSOVNlMUhPRGx1QjV6OFJ0ZEN0Yk1YSTZsRVF3UT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0UlNQVk9odll1NEI3QkRYaGtWNGRmUmJOcWNGYkdEVDFLb0FOa1N4KzFRQlh0REJlMjB3MGxBNlo1RGVzbXB2Uy9yd1lYU3h5Q2lyM3ptajlUSUJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyTGgxYjJGWGloMXUwakNxKzFSU0hxaVlPcnFtYlVIOTRLd0R5U3JpYitoYmEva3Y2NlA4eHJoKys5blNGNk5LNmhoYkFSbFJHRHMwTm9wQW9FNlhBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NzM3NzE1OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzY4MjgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVpzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBWnMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1LzNrdG1YdTBZZ0FId2dyZUV2SVJaVGRPTVRUTGlCUUd4ZzF1MUtQYjBBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5ODcyNDI0NjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDM2ODI4MjE4OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
