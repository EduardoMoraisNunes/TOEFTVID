title = document.getElementById('titlescreen')
var linereading = -1
jsonfile = "lines.json"
popup = new Audio('songs/popup(new).ogg')
popupno = new Audio('songs/no(new).ogg')
popupyes = new Audio('songs/yes(new).ogg')
credits = new Audio('songs/AutumnRaccoon.m4a')
banquet = new Audio('songs/ElegantEntrance.m4a')
banquet.preload
popup.preload
popupno.preload
popupyes.preload

credits.loop = true
function fade(){
    removeEventListener('click', fade)
    title.classList = 'fadediv'
    setTimeout(() => {
        title.style.display = 'none'
    }, 1000);
    callpop()
}
title.addEventListener('click', fade)
function callpop(){
    popup.play()
    document.getElementById('warning').classList = 'popup'
    setTimeout(() => {
        document.getElementById('warning').style.transform = 'translate3d(0px, 0px, 0px)'
        document.getElementById('yeswarningbutton').addEventListener("click", yesclicked)
        document.getElementById('nowarningbutton').addEventListener("click", noclicked)
    }, 2000);
}
function yesclicked(){
  popupyes.play()
    document.getElementById('yeswarningbutton').removeEventListener("click", yesclicked)
    document.getElementById('nowarningbutton').removeEventListener("click", noclicked)
    document.getElementById('warning').classList = 'popdown'
    startscene()
}
function noclicked(){
  popupno.play()
  document.getElementById('nowarningbutton').removeEventListener("click", noclicked)
    document.getElementById('yeswarningbutton').removeEventListener("click", yesclicked)
    document.getElementById('warning').classList = 'popdown'
    chapterendspawn()
}
function startscene() {
    readlines()
    document.getElementById('scenescreen').style.display = 'block'
}
function characterspawn(){
  char = scenecharacter
  readlines()
  if (scenedisplay === 'block') {
    document.getElementById(char).style.display = 'block'
  }
  if (scenedisplay === 'none') {
    document.getElementById(char).style.display = 'none'
  } 
    expre = char + '_expre'
    body = char + '_body'
    JSON.stringify(expre)
    console.log(expre)
    document.getElementById(expre).src = 'images/'+char+'_'+sceneexpression+'.webp' 
    document.getElementById(body).src = 'images/'+char+'.webp' 
    scenecharactermove = char
    switch (scenemove) {
      case 0:
        document.getElementById(scenecharacter).classList = 'movechr0'
      setTimeout(() => {
        document.getElementById(scenecharactermove).style.transform = 'translate3d(-35%, 0px, 0px)'
      }, 1000);
        break;
      case 1:
        document.getElementById(scenecharactermove).classList = 'movechr1'
        setTimeout(() => {
          document.getElementById(scenecharactermove).style.transform = 'translate3d(101%, 0px, 0px)'
        }, 1000);
        break;
      case 2:
        document.getElementById(scenecharactermove).classList = 'movechr2'
      setTimeout(() => {
        document.getElementById(scenecharactermove).style.transform = 'translate3d(145%, 0px, 0px)'
      }, 1000);
      break;
      case 3:
        document.getElementById(scenecharactermove).classList = 'movechr3'
        setTimeout(() => {
          document.getElementById(scenecharactermove).style.transform = 'translate3d(145%, 0px, 0px)'
        }, 1000);
      break;
      case 4:
        document.getElementById(scenecharactermove).classList = 'movechr4'
        setTimeout(() => {
          document.getElementById(scenecharactermove).style.transform = 'translate3d(289%, 0px, 0px)'
        }, 1000);
      break;
      case 5:
        document.getElementById(scenecharactermove).classList = 'movechr5'
        setTimeout(() => {
          document.getElementById(scenecharactermove).style.transform = 'translate3d(235%, 0px, 0px)'
        }, 1000);
      break;
      case 6:
        document.getElementById(scenecharactermove).classList = 'movechr6'
        setTimeout(() => {
          document.getElementById(scenecharactermove).style.transform = 'translate3d(99em, 0px, 0px)'
        }, 1000);
      break;
      case 7:
        document.getElementById(scenecharactermove).classList = 'movechr7'
        setTimeout(() => {
          document.getElementById(scenecharactermove).style.transform = 'translate3d(113em, 0px, 0px)'
        }, 1000);
      break;
      default:
        break;
    }
}

function textspawn(){
    document.getElementById('textbox').classList.add("textbox")
    document.getElementById('namesim').innerHTML = scenecharacter 
    document.getElementById('textsim1').classList.remove("textsim1")
    document.getElementById('textsim2').classList.remove("textsim2")
    document.getElementById('textsim3').classList.remove("textsim3")
    document.getElementById('textsim4').classList.remove("textsim4")
    void document.getElementById('textsim1').offsetWidth;
    void document.getElementById('textsim2').offsetWidth;
    void document.getElementById('textsim3').offsetWidth;
    void document.getElementById('textsim4').offsetWidth;
    document.getElementById('textsim1').style.width = '0%'
    document.getElementById('textsim2').style.width = '0%'
    document.getElementById('textsim3').style.width = '0%'
    document.getElementById('textsim4').style.width = '0%'
    switch (scenenoflines){
      case '1':
        document.getElementById('textsim1').innerHTML = sceneline1
        document.getElementById('textsim1').classList.add("textsim1")
        document.getElementById('textsim1').addEventListener("animationend", textcontinue)
      break;
      case '2':
        document.getElementById('textsim1').innerHTML = sceneline1
        document.getElementById('textsim1').classList.add("textsim1")
        document.getElementById('textsim2').innerHTML = sceneline2
        document.getElementById('textsim2').classList.add("textsim2")
        document.getElementById('textsim2').addEventListener("animationend", textcontinue)
      break;
      case '3':
        document.getElementById('textsim1').innerHTML = sceneline1
        document.getElementById('textsim1').classList.add("textsim1")
        document.getElementById('textsim2').innerHTML = sceneline2
        document.getElementById('textsim2').classList.add("textsim2")
        document.getElementById('textsim3').innerHTML = sceneline3
        document.getElementById('textsim3').classList.add("textsim3")
        document.getElementById('textsim3').addEventListener("animationend", textcontinue)
      break;
      case '4':
        document.getElementById('textsim1').innerHTML = sceneline1
        document.getElementById('textsim1').classList.add("textsim1")
        document.getElementById('textsim2').innerHTML = sceneline2
        document.getElementById('textsim2').classList.add("textsim2")
        document.getElementById('textsim3').innerHTML = sceneline3
        document.getElementById('textsim3').classList.add("textsim3")
        document.getElementById('textsim4').innerHTML = sceneline4
        document.getElementById('textsim4').classList.add("textsim4")
        document.getElementById('textsim4').addEventListener("animationend", textcontinue)
      break;
    }
    document.getElementById('textbox').addEventListener('click', skiptext)
}
function skiptext() {
  document.getElementById('textbox').removeEventListener('click', skiptext)
  if (scenenoflines === '1') {
    document.getElementById('textsim1').classList.remove("textsim1")
    document.getElementById('textsim1').style.width = 'max-content'
  }
  if (scenenoflines === '2') {
    document.getElementById('textsim1').classList.remove("textsim1")
    document.getElementById('textsim1').style.width = 'max-content'
    document.getElementById('textsim2').classList.remove("textsim2")
    document.getElementById('textsim2').style.width = 'max-content'
  }
  if (scenenoflines === '3') {
    document.getElementById('textsim1').classList.remove("textsim1")
    document.getElementById('textsim1').style.width = 'max-content'
    document.getElementById('textsim2').classList.remove("textsim2")
    document.getElementById('textsim2').style.width = 'max-content'
    document.getElementById('textsim3').classList.remove("textsim3")
    document.getElementById('textsim3').style.width = 'max-content'
  }
  if (scenenoflines === '4') {
    document.getElementById('textsim1').classList.remove("textsim1")
    document.getElementById('textsim1').style.width = 'max-content'
    document.getElementById('textsim2').classList.remove("textsim2")
    document.getElementById('textsim2').style.width = 'max-content'
    document.getElementById('textsim3').classList.remove("textsim3")
    document.getElementById('textsim3').style.width = 'max-content'
    document.getElementById('textsim4').classList.remove("textsim4")
    document.getElementById('textsim4').style.width = 'max-content'
  }
  document.getElementById('textbox').addEventListener("click", boxclicked)
  document.getElementById('blinker').classList.add("blinker")
}
function textcontinue() {
  if (scenenoflines === '1') {
    document.getElementById('textbox').removeEventListener('click', skiptext)
    document.getElementById('textsim1').removeEventListener("animationend", textcontinue)
    document.getElementById('textbox').addEventListener("click", boxclicked)
    document.getElementById('blinker').classList.add("blinker")
    console.log('ANIMATION ENDED')
  }
  if (scenenoflines === '2') {
    document.getElementById('textbox').removeEventListener('click', skiptext)
    document.getElementById('textsim2').removeEventListener("animationend", textcontinue)
    document.getElementById('textbox').addEventListener("click", boxclicked)
    document.getElementById('blinker').classList.add("blinker")
  }
  if (scenenoflines === '3') {
    document.getElementById('textbox').removeEventListener('click', skiptext)
    document.getElementById('textsim3').removeEventListener("animationend", textcontinue)
    document.getElementById('textbox').addEventListener("click", boxclicked)
    document.getElementById('blinker').classList.add("blinker")
  }
  if (scenenoflines === '4') {
    document.getElementById('textbox').removeEventListener('click', skiptext)
    document.getElementById('textsim4').removeEventListener("animationend", textcontinue)
    document.getElementById('textbox').addEventListener("click", boxclicked)
    document.getElementById('blinker').classList.add("blinker")
  }
  document.getElementById('textbox').addEventListener("click", boxclicked)
}
function boxclicked() {
  document.getElementById('textbox').removeEventListener("click", boxclicked)
  
  document.getElementById('blinker').classList.remove("blinker")
  readlines()
}
function sysspawn(){
  popup.play()
    document.getElementById('warningmesageok').innerHTML = sceneline1
    document.getElementById('warningok').classList = 'popup'
    document.getElementById('okwarningbutton').addEventListener("click", okclicked)
}
function okclicked(){
  popupno.play()
  removeEventListener("click", okclicked)
    document.getElementById('warningok').classList = 'popdown'
    readlines()
}
function ynspawn(){
  popup.play()
    document.getElementById('warningmesage').innerHTML = scenetext
    document.getElementById('warning').classList = 'popup'
    document.getElementById('nowarningbutton').removeEventListener("click", noclicked)
    document.getElementById('yeswarningbutton').addEventListener("click", yesplayerclicked)
    document.getElementById('nowarningbutton').addEventListener("click", noplayerclicked)
}
function yesplayerclicked(){
  popupyes.play()
  document.getElementById('yeswarningbutton').removeEventListener("click", yesplayerclicked)
  document.getElementById('nowarningbutton').removeEventListener("click", noplayerclicked)
  document.getElementById('warning').classList = 'popdown'
  linereading = sceneyes
  readlines()
}
function noplayerclicked(){
  popupno.play()
  document.getElementById('nowarningbutton').removeEventListener("click", noplayerclicked)
  document.getElementById('yeswarningbutton').removeEventListener("click", yesplayerclicked)
  document.getElementById('warning').classList = 'popdown'
  linereading = sceneno
  readlines()
}
function playerchoicespawn() {
  document.getElementById('choicetext1').innerHTML = scenetext1
  document.getElementById('choicetext2').innerHTML = scenetext2
  document.getElementById('choicetext3').innerHTML = scenetext3
  document.getElementById('choices').classList = 'popup'
  document.getElementById('choice1').addEventListener("click", ct1clicked)
  document.getElementById('choice2').addEventListener("click", ct2clicked)
  document.getElementById('choice3').addEventListener("click", ct3clicked)
  function ct1clicked() {
    document.getElementById('choice1').removeEventListener("click", ct1clicked)
    document.getElementById('choice2').removeEventListener("click", ct2clicked)
    document.getElementById('choice3').removeEventListener("click", ct3clicked)
    linereading = sceneop1
    readlines()
    document.getElementById('choices').classList = 'popdown'
  }
  function ct2clicked() {
    document.getElementById('choice1').removeEventListener("click", ct1clicked)
    document.getElementById('choice2').removeEventListener("click", ct2clicked)
    document.getElementById('choice3').removeEventListener("click", ct3clicked)
    linereading = sceneop2
    readlines()
    document.getElementById('choices').classList = 'popdown'
  }
  function ct3clicked() {
    document.getElementById('choice1').removeEventListener("click", ct1clicked)
    document.getElementById('choice2').removeEventListener("click", ct2clicked)
    document.getElementById('choice3').removeEventListener("click", ct3clicked)
    linereading = sceneop3
    readlines()
    document.getElementById('choices').classList = 'popdown'
  }
}
function ambiencespawn() {
  if(sceneaction === 'play'){
    if (scenechannel === 1) {
      sceneambience1 = new Audio('songs/' + scenecharacter)
      sceneambience1.volume = 1
      sceneambience1.play()
      if (sceneloop === 1) {
        sceneambience1.loop = true
      }
      else {
        sceneambience1.loop = false
      }
    }
    if (scenechannel === 2) {
      sceneambience2 = new Audio('songs/' + scenecharacter)
      sceneambience2.volume = 1
      sceneambience2.play()
      if (sceneloop === 1) {
        sceneambience2.loop = true
      }
      else{
        sceneambience2.loop = false
      }
    }

  readlines()
  }
  if(sceneaction === 'stop'){
    readlines()
    if (scenechannel === 1) {
      ambiencefade1 = setInterval(() => {
        if (sceneambience1.volume > 0.2) {
          sceneambience1.volume = sceneambience1.volume - 0.1
        } else {
          clearInterval(ambiencefade1, 1000)
          sceneambience1.pause()
        }
      }, 1000);
    }
    if (scenechannel === 2) {
      ambiencefade2 = setInterval(() => {
        if (sceneambience2.volume > 0.2) {
          sceneambience2.volume = sceneambience2.volume - 0.1
        } else {
          clearInterval(ambiencefade2, 1000)
          sceneambience2.pause()
        }
      }, 1000);
    }
  }
}
function tielinespawn() {
  linereading = sceneto
  readlines()
}
function chapterendspawn() {
  document.getElementById('scenescreen').classList = 'fadediv'
  credits.play()
  document.getElementById('credits').classList = 'popup'
}
function readlines() {
    fetch(jsonfile)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
      scenetype = (data[linereading].type)
      scenecharacter = (data[linereading].character)
      switch (scenetype){
        case 'spawnchr':
          sceneexpression = (data[linereading].expression)
          scenemove = (data[linereading].scenemove)
          scenedisplay = (data[linereading].display)
          characterspawn()
        break;
        case 'chrline':
          scenenoflines = (data[linereading].noflines)
          sceneline1 = (data[linereading].line1)
          sceneline2 = (data[linereading].line2)
          sceneline3 = (data[linereading].line3)
          sceneline4 = (data[linereading].line4)
          textspawn()
        break;
        case 'sysmessage':
          scenenoflines = (data[linereading].noflines)
          sceneline1 = (data[linereading].line1)
          sceneline2 = (data[linereading].line2)
          sceneline3 = (data[linereading].line3)
          sceneline4 = (data[linereading].line4)
          sysspawn()
        break;
        case 'playerchoiceyn':
          scenetext = (data[linereading].text)
          sceneyes = (data[linereading].yes)
          sceneno = (data[linereading].no)
          ynspawn()
        break;
        case 'chapterend':
          sceneend = (data[linereading].chapterend)
          chapterendspawn()
        break;
        case 'ambience':
          scenechannel = (data[linereading].channel)
          sceneaction = (data[linereading].action)
          sceneloop = (data[linereading].loop)
          ambiencespawn()
        break;
        case 'playerchoices':
          scenetext1 = (data[linereading].text1)
          scenetext2 = (data[linereading].text2)
          scenetext3 = (data[linereading].text3)
          sceneop1 = (data[linereading].op1)
          sceneop2 = (data[linereading].op2)
          sceneop3 = (data[linereading].op3)
          playerchoicespawn()
        break;
        case 'tieline':
          sceneto = (data[linereading].to)
          tielinespawn()
        break;
        default:
          readlines()
      }
    })
    linereading = linereading + 1
}