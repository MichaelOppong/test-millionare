var _0x10e7=['.question','text','.answer','click','target','innerText','includes',',\x20hit\x20the\x20books\x20or\x20get\x20a\x20real\x20job!\x20You\x20lost.','body','background-image','.wallet','html','<p>Oh\x20wow\x20',',\x20you\x27ve\x20made\x20','\x20dollars.','You\x20win!','.money',',\x20hands\x20off\x20the\x20money.\x20Answer\x20the\x20questions!','Which\x20of\x20the\x20following\x20names\x20is\x20the\x20coolest?','People\x20who\x20stay\x20calm\x20under\x20pressure\x20are\x20said\x20to\x20have\x20what\x20running\x20through\x20their\x20veins?','This\x20Compton-born\x20rapper\x20got\x20royalty\x20inside\x20his\x20DNA','This\x20slippery\x20nemesis\x20of\x20Harry\x20Potter\x20must\x20not\x20be\x20named','This\x20Nintendo\x20superstar\x20has\x20been\x20a\x20plumber,\x20doctor,\x20and\x20painter','Michael','Blood','Sean\x20Carter','Bowser','Mario','Ice','Curtis\x20Jackason','PushaT','Sonic','Bob','Lava','Andre\x20Young','Pikachu','Stacy','Ketchup','Kendrick\x20Duckworth','Megatron','Captain\x20Falcon','Voldermort','append','<p>','</p>','.main','hide','.inputDiv','show','.startImage','css','width','20%','input','val'];(function(_0x410de8,_0x2fb361){var _0x50f3dd=function(_0x3e3de7){while(--_0x3e3de7){_0x410de8['push'](_0x410de8['shift']());}};_0x50f3dd(++_0x2fb361);}(_0x10e7,0xb7));var _0x5b20=function(_0x514a4e,_0x4f51df){_0x514a4e=_0x514a4e-0x0;var _0x5516d2=_0x10e7[_0x514a4e];return _0x5516d2;};let moneyOptions=[0x64,0x3e8,0x2710,0x186a0,0xf4240];let moneyCount=0x0;let question=[_0x5b20('0x0'),_0x5b20('0x1'),_0x5b20('0x2'),_0x5b20('0x3'),_0x5b20('0x4')];let answerA=[_0x5b20('0x5'),_0x5b20('0x6'),_0x5b20('0x7'),_0x5b20('0x8'),_0x5b20('0x9')];let answerB=['Jane',_0x5b20('0xa'),_0x5b20('0xb'),_0x5b20('0xc'),_0x5b20('0xd')];let answerC=[_0x5b20('0xe'),_0x5b20('0xf'),_0x5b20('0x10'),'Voldermort',_0x5b20('0x11')];let answerD=[_0x5b20('0x12'),_0x5b20('0x13'),_0x5b20('0x14'),_0x5b20('0x15'),_0x5b20('0x16')];let correctAnswers=[_0x5b20('0x5'),_0x5b20('0xa'),_0x5b20('0x14'),_0x5b20('0x17'),_0x5b20('0x9')];let name;for(var money of moneyOptions){$('.money')[_0x5b20('0x18')](_0x5b20('0x19')+money+_0x5b20('0x1a'));}$(_0x5b20('0x1b'))[_0x5b20('0x1c')]();$('button')['click'](function(){$(_0x5b20('0x1d'))[_0x5b20('0x1c')]();$('.main')[_0x5b20('0x1e')]();$(_0x5b20('0x1f'))[_0x5b20('0x20')](_0x5b20('0x21'),_0x5b20('0x22'));name=$(_0x5b20('0x23'))[_0x5b20('0x24')]();addQuestion(0x0,0x0);});function addQuestion(_0x44ab8b,_0x59dd8a){if(moneyCount===_0x44ab8b){$(_0x5b20('0x25'))[_0x5b20('0x26')](question[_0x59dd8a]);$('.a')[_0x5b20('0x26')](answerA[_0x59dd8a]);$('.b')[_0x5b20('0x26')](answerB[_0x59dd8a]);$('.c')[_0x5b20('0x26')](answerC[_0x59dd8a]);$('.d')[_0x5b20('0x26')](answerD[_0x59dd8a]);}}$(_0x5b20('0x27'))[_0x5b20('0x28')](function(){let _0x1c2132=event[_0x5b20('0x29')][_0x5b20('0x2a')];if(correctAnswers[_0x5b20('0x2b')](_0x1c2132)&&moneyCount===0x0){moneyCount=moneyCount+0x64;}else if(correctAnswers[_0x5b20('0x2b')](_0x1c2132)){moneyCount=moneyCount*0xa;}else{alert(name+_0x5b20('0x2c'));$(_0x5b20('0x2d'))[_0x5b20('0x20')](_0x5b20('0x2e'),'url(\x27https://media1.giphy.com/media/dkuZHIQsslFfy/giphy.gif?cid=790b76115d13eb9e326848416fca6861&rid=giphy.gif\x27)');$(_0x5b20('0x1b'))[_0x5b20('0x1c')]();$(_0x5b20('0x2f'))[_0x5b20('0x1c')]();}addQuestion(0x64,0x1);addQuestion(0x3e8,0x2);addQuestion(0x2710,0x3);addQuestion(0x186a0,0x4);addQuestion(0xf4240,0x5);$('.wallet')[_0x5b20('0x30')](_0x5b20('0x31')+name+_0x5b20('0x32')+moneyCount+_0x5b20('0x33'));if(moneyCount===0xf4240){$(_0x5b20('0x2d'))[_0x5b20('0x30')](_0x5b20('0x34'));$(_0x5b20('0x2d'))['css'](_0x5b20('0x2e'),'url(\x27https://media2.giphy.com/media/5fBH6z8aMV1RbA4FaSc/giphy.gif?cid=790b76115d14dac66c636c426b9382ab&rid=giphy.gif\x27)');}});$('.lifeLines')[_0x5b20('0x28')](function(){$(_0x5b20('0x2d'))[_0x5b20('0x30')](name+',\x20your\x20life\x20line\x20failed\x20you.\x20Game\x20over!');});$(_0x5b20('0x35'))[_0x5b20('0x28')](function(){$(_0x5b20('0x2d'))['html'](name+_0x5b20('0x36'));});