document.body.innerHTML += `
<div class="ui segment inverted clearing bottom attached" id="warning">
  <i class="warning icon"></i>
    <div class="ui right floated button" id="download">Download</div> <div class="ui right floated button" id="tutorial">Tutorial</div>You need to download script for it to work
</div>
<div class="ui inverted segment">
  <div class="ui inverted form">
    <div class="two fields">
	<div class="field" id="botname">
        <label>Имя ботов</label>
        <div class="ui large labeled input"><input type="text" value="iliasaw" placeholder="Nickname" maxlength="14" spellcheck="false" data-ms-editor="true"></div>
      </div>
      <div class="field">
        <label>Код комнаты</label>
        <div class="ui large labeled input" id="roomcode"><div class="ui label">https://gartic.io/ </div><input type="text" placeholder="Code"></div>
      </div>
      <div class="field" id="botamount">
        <label>Количество ботов</label>
        <div class="ui large labeled input"><input type="number" value="5" min="1" max="20"></div>
      </div>
    </div>
	
	<div class="field">
	<label>Аватар бота</label>
<div class="ui fluid selection profil dropdown" tabindex="0">
  <input type="hidden" name="user">
  <i class="dropdown icon" tabindex="0"><div class="menu" tabindex="-1"></div></i>
  <div class="text"><img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/0.svg">По умолчанию</div>
  <div class="menu transition hidden" tabindex="-1">
  <div data-value="0" class="item active selected">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/0.svg">По умолчанию</div><div data-value="1" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/1.svg">Мужчина 1</div><div data-value="2" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/2.svg">Мужчина 2</div><div data-value="3" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/3.svg">Мужчина 3</div><div data-value="4" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/4.svg">Мужчина 4</div><div data-value="5" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/5.svg">Мужчина 5</div><div data-value="6" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/6.svg">Мужчина 6</div><div data-value="7" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/7.svg">Мужчина 7</div><div data-value="8" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/8.svg">Мужчина 8</div><div data-value="9" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/9.svg">Мужчина 9</div><div data-value="10" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/10.svg">Мужчина 10</div><div data-value="11" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/11.svg">Мужчина 11</div><div data-value="12" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/12.svg">Мужчина 12</div><div data-value="13" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/13.svg">Мужчина 13</div><div data-value="14" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/14.svg">Мужчина 14</div><div data-value="15" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/15.svg">Мужчина 15</div><div data-value="16" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/16.svg">Мужчина 16</div><div data-value="17" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/17.svg">Мужчина 17</div><div data-value="18" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/18.svg">Мужчина 18</div><div data-value="19" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/19.svg">Девушка 1</div><div data-value="20" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/20.svg">Девушка 2</div><div data-value="21" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/21.svg">Девушка 3</div><div data-value="22" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/22.svg">Девушка 4</div><div data-value="23" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/23.svg">Девушка 5</div><div data-value="24" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/24.svg">Девушка 6</div><div data-value="25" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/25.svg">Девушка 7</div><div data-value="26" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/26.svg">Девушка 8</div><div data-value="27" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/27.svg">Девушка 9</div><div data-value="28" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/28.svg">Девушка 10</div><div data-value="29" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/29.svg">Девушка 11</div><div data-value="30" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/30.svg">Девушка 12</div><div data-value="31" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/31.svg">Девушка 13</div><div data-value="32" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/32.svg">Девушка 14</div><div data-value="33" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/33.svg">Девушка 15</div><div data-value="34" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/34.svg">Девушка 16</div><div data-value="35" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/35.svg">Девушка 17</div><div data-value="36" class="item">
        <img class="ui avatar image" src="https://gartic.io/static/images/avatar/svg/36.svg">Девушка 18</div></div>
  </div>
  </div>
	
    <div class="field">
    <div class="ui performance checkbox">
      <input type="checkbox" tabindex="0" class="hidden">
      <label>Режим производительности</label>
    </div></div>
	<div class="field">
    <div class="ui proxy checkbox">
      <input type="checkbox" tabindex="0" class="hidden">
      <label>Режим прокси</label>
    </div></div>
	
	
    <div class="inline"><button class="ui primary button" id="addbot">Добавить ботов</button><button class="ui inverted red button" id="clearall">Очистить ботов</button> <button class="ui right labeled icon button" id="watchtheroom">Смотреть за комнатой<i class="external link icon"></i></button> <a href="https://www.youtube.com/channel/UChD-JuvnGqY3PB-0aEUurpA" target="_blank" class="ui 
right floated inverted button"><i class="youtube icon"></i>YouTube</a>
<a href="https://github.com/iliasaw/garticio" target="_blank" class="ui right floated
inverted button"><i class="github icon"></i>Открыть сурс</a></div> </div>
  </div>
</div>
<div class="ui tiny modal">
<div class="ui icon header">
<i class="yellow exclamation triangle icon"></i>
  Script Not Found</div>
  <div class="content">
    <p>Script not found won't run if there is no script.</p>
  </div>
  <div class="actions">
    <div class="ui black cancel button">
      Already Available
    </div>
	<div class="ui black approve button">
      Download
    </div>
  </div>
  </div>
</div>
<div class="ui inverted segment" id="tool" style="display: none;"><div class="ui inverted form ">
<div class="inline fields"><div class="field"><label>Report:</label><button class="ui primary button" id="reportdraw">Report Draw</button></div></div><div class="inline fields"><label>Spam:</label><div class="field"><div class="ui selection spam dropdown">
  <input type="hidden" name="gender">
  <i class="dropdown icon"></i>
  <div class="text">Chat</div>
  <div class="menu">
    <div class="item active selected" data-value="1">Chat</div>
    <div class="item" data-value="0">Answer</div>
  </div></div>
</div><div class="field"><div class="ui labeled input" id="spamtext"><input type="text" value="anonimbiri" placeholder="Spam text" maxlength="99" spellcheck="false" data-ms-editor="true"></div></div><div class="field"><button class="ui primary compact labeled icon button" id="startspam"><i class="play icon"></i> Start Spam</button></div></div><div class="inline fields"><div class="field"><label>Kick:</label><div class="ui labeled input" id="kickplayernick"><input type="text" value="User" placeholder="Username" maxlength="18" spellcheck="false" data-ms-editor="true"></div></div><div class="field"><button class="ui primary button" id="kickpalyer">Kick Player</button></div></div></div></div>

<div class="ui basic modal">
  <div class="content">
    <div class="ui embed"></div>
  </div>
  <div class="actions">
     <div class="ui cancel inverted button">No Thanks</div>
    <div class="ui approve inverted button">
      <i class="download icon"></i>Download</div>
  </div>
</div>
`;
let download = document.querySelector('#download');
let download2 = document.querySelector('#download2');
let tutorial = document.querySelector('#tutorial');
let btn = document.querySelector('#addbot');
let btn2 = document.querySelector('#clearall');
let url = document.querySelector('#roomcode input'); 
let amount = document.querySelector('#botamount input');
let watchtheroom = document.querySelector('#watchtheroom'); 

let reportdraw = document.querySelector('#reportdraw');
let spambutton = document.querySelector('#startspam');
let spamtext = document.querySelector('#spamtext input');
let kicktext = document.querySelector('#kickplayernick input');
let kickbutton = document.querySelector('#kickpalyer');

let scripturl = "https://github.com/iliasaw/garticio/raw/main/script/Gartic%20bot%20control.user.js";

download.addEventListener("click", function () {
	window.open(scripturl).close();
});
tutorial.addEventListener("click", function () {
$('.ui.basic.modal')
  .modal({
	closable  : false,
	blurring : true,
    onApprove : function() {
	  window.open(scripturl).close();
    }})
  .modal('show')
;
	
$('.ui.embed').embed({
  source      : 'youtube',
  id          : 'bsvsLNbgQno',
  placeholder : 'https://i.ytimg.com/vi/bsvsLNbgQno/maxresdefault.jpg'
});
});

btn.addEventListener("click", function () {
	btn.setAttribute("class", "ui primary disabled loading button");
	if(document.querySelector("#warning")){
	$('.tiny.modal')
	.modal({
	closable  : false,
	blurring : true,
    onApprove : function() {
	  window.open(scripturl).close();
    }})
    .modal('show');
	}
	
	var div = document.createElement("div");
	div.setAttribute('id', 'list');
	document.body.appendChild(div);
	
    for (let i = 0; i < amount.value; i++) {
	var iframe = document.createElement("iframe");
	iframe.setAttribute('id', i);
	if(proxymode == false){iframe.setAttribute('src', 'https://gartic.io/' + url.value);}else{iframe.setAttribute('src', 'https://www.proxysite.com');}
	if(performancemode == true) {iframe.style.display = 'none';}
	if(i == amount.value -1){ iframe.setAttribute('onload', 'loaded();');}
	div.appendChild(iframe);
    }
	iziToast.success({
	position: 'topRight',	
	//theme: 'dark',
    title: 'Успешно',
    message: 'Создание Ботов'
});

});
btn2.addEventListener("click", function () {
	if(document.querySelector('#list')){
	document.querySelector('#list').remove();
	
	btn.setAttribute("class", "ui primary button");
	
	document.querySelector("#tool").style.display = 'none';
	spam = false
    spambutton.innerHTML = '<i class="play icon"></i> Start Spam'
	iziToast.success({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Успешно',
    message: 'Все боты уничтожены',
	}); 
	}else{
	iziToast.error({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Ошибка',
    message: 'Догадка: Нету ботов' ,
});
}

});
watchtheroom.addEventListener("click", function () {
	if(url.value != ""){
    window.open("https://gartic.io/" + url.value + "/viewer");
	}else{
	iziToast.error({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Ошибка',
    message: "Вы не дали мне код комнаты" ,
});
	}
});
	
url.onchange = function(){ url.value = url.value.replace("https://gartic.io/",""); };

var performancemode = false;
var proxymode = false;
var profilepicture = 0;

function loaded() {
	if(proxymode == false){
document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'login', 'username':document.querySelector('#botname div input').value, 'profilepicture':profilepicture, 'performancemode':performancemode }, '*')
	)}else{
	document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'loginproxy','url': 'https://gartic.io/' + url.value, 'username':document.querySelector('#botname div input').value, 'profilepicture':profilepicture, 'performancemode':performancemode }, '*'))
}
document.querySelector("#tool").style.display = 'block';
	btn.setAttribute("class", "ui primary button");
	iziToast.success({
	position: 'topRight',	
	//theme: 'dark',
    title: 'Успешно',
    message: 'Присоединение к серверу'
});
}

reportdraw.addEventListener("click", function () {
document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'drawreport'}, '*')
)
iziToast.success({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Успешно',
    message: 'Жалоба на Рисунок',
	}); 
});

//basic modal

let spam = false;
var spamid = 1;
spambutton.addEventListener("click", function () {
	if(spam== false){
	spam = true;
	spambutton.innerHTML = '<i class="stop icon"></i> Stop Spam'
	iziToast.success({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Успешно',
    message: 'Начат спам',
	}); 
	}else{
    spam = false
    spambutton.innerHTML = '<i class="play icon"></i> Start Spam'
	iziToast.success({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Успешно',
    message: 'Спам закончен',
	}); 
	}
document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'spam', 'spam': spam, 'spamid': spamid,  'text': spamtext.value}, '*')
)
});

let s_id = 1;
setInterval(function() {  if(spam == true){ 
	if(s_id == 1){document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'spam', 'spam': spam, 'spamid': spamid,  'text': spamtext.value}, '*')
); s_id = 2; }
	else if(s_id == 2){document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'spam', 'spam': spam, 'spamid': spamid,  'text': spamtext.value + "឵"}, '*')
); s_id = 3;}
	else if(s_id == 3){document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'spam', 'spam': spam, 'spamid': spamid,  'text': "឵" + spamtext.value}, '*')
); s_id = 4;}
	else if(s_id == 4){document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'spam', 'spam': spam, 'spamid': spamid,  'text': "឵" + spamtext.value}, '*')
); s_id = 1;} } 
}, 3000);

kickbutton.addEventListener("click", function () {
	
document.querySelectorAll('iframe').forEach( item =>
  item.contentWindow.postMessage({'command': 'userreport', 'username':kicktext.value}, '*')
)
	iziToast.success({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Успешно',
    message: 'Игрок ' + kicktext.value + ' был кикнут',
	}); 
});

$('.performance.checkbox')
  .checkbox({
    // check all children
    onChecked: function() { performancemode = true; },
	onUnchecked: function() {  performancemode = false; }
  })
;
$('.proxy.checkbox')
  .checkbox({
    // check all children
    onChecked: function() { proxymode = true; },
	onUnchecked: function() {  proxymode = false; }
  })
;
$('.profil.dropdown')
  .dropdown({
    clearable: false,
    onChange: function(value, text, $selectedItem) {
	profilepicture = value;
    }
  })
;
$('.spam.dropdown')
  .dropdown({
    clearable: false,
    onChange: function(value, text, $selectedItem) {
	spamid = value;
    }
  })
;

setTimeout(function(){
if(!document.querySelector("#warning")){
iziToast.success({
	position: 'topRight',	
	//theme: 'dark',
    title: 'Успешно',
    message: 'Скрипт загружен',
	buttons: [
        ['<button>Open Source Code</button>', function (instance, toast) {
            window.open("https://github.com/iliasaw/garticio");
        }, true],],
});
}else{
iziToast.error({
	position: 'topRight',	
	//theme: 'dark',	
    title: 'Ошибка',
    message: 'Скрипт возможно не установлен, установите его' ,
	buttons: [
        ['<button>Download</button>', function (instance, toast) {
            window.open(scripturl).close();
        }, true],],
});	
}
}, 2000);
