title = document.getElementById('titlescreen')
var linereading = -1
popup = new Audio('songs/popup(new).ogg')
popupno = new Audio('songs/no(new).ogg')
popupyes = new Audio('songs/yes(new).ogg')
credits = new Audio('songs/AutumnRaccoon.m4a')

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
    document.getElementById(scenecharacter).style.display = 'block'
    document.getElementById(scenecharacter).style.backgroundImage = 'url(images/'+scenecharacter+'_'+sceneexpression+'.webp), url(images/'+scenecharacter+'.webp)' 
  
    if (scenemove === 0) {
      document.getElementById(scenecharacter).classList = 'movechr0'
      setTimeout(() => {
        document.getElementById(scenecharacter).style.transform = 'translate3d(0em, 0px, 0px)'
      }, 1000);
    }
    if (scenemove === 1) {
      document.getElementById(scenecharacter).classList = 'movechr1'
      setTimeout(() => {
        document.getElementById(scenecharacter).style.transform = 'translate3d(29em, 0px, 0px)'
      }, 1000);
    }
    if (scenemove === 2) {
      document.getElementById(scenecharacter).classList = 'movechr2'
      setTimeout(() => {
        document.getElementById(scenecharacter).style.transform = 'translate3d(43em, 0px, 0px)'
      }, 1000);
    }
    if (scenemove === 3) {
      document.getElementById(scenecharacter).classList = 'movechr3'
      setTimeout(() => {
        document.getElementById(scenecharacter).style.transform = 'translate3d(57em, 0px, 0px)'
      }, 1000);
    }
    if (scenemove === 4) {
      document.getElementById(scenecharacter).classList = 'movechr4'
      setTimeout(() => {
        document.getElementById(scenecharacter).style.transform = 'translate3d(71em, 0px, 0px)'
      }, 1000);
    }
    if (scenemove === 5) {
      document.getElementById(scenecharacter).classList = 'movechr5'
      setTimeout(() => {
        document.getElementById(scenecharacter).style.transform = 'translate3d(85em, 0px, 0px)'
      }, 1000);
    }
    if (scenemove === 6) {
      document.getElementById(scenecharacter).classList = 'movechr6'
      setTimeout(() => {
        document.getElementById(scenecharacter).style.transform = 'translate3d(99em, 0px, 0px)'
      }, 1000);
    }
    readlines()
}

function textspawn(){
    document.getElementById('textbox').classList.add("textbox")
    document.getElementById('namesim').innerHTML = scenecharacter 
    if (scenenoflines === '1') {
      document.getElementById('textsim1').classList.remove("textsim1")
      void document.getElementById('textsim1').offsetWidth;
      document.getElementById('textsim2').classList.remove("textsim2")
      void document.getElementById('textsim2').offsetWidth;
      document.getElementById('textsim3').classList.remove("textsim3")
      void document.getElementById('textsim3').offsetWidth;
      document.getElementById('textsim4').classList.remove("textsim4")
      void document.getElementById('textsim4').offsetWidth;
      document.getElementById('textsim1').innerHTML = sceneline1
      document.getElementById('textsim1').classList.add("textsim1")
    }
    if (scenenoflines === '2') {
      document.getElementById('textsim1').classList.remove("textsim1")
      void document.getElementById('textsim1').offsetWidth;
      document.getElementById('textsim2').classList.remove("textsim2")
      void document.getElementById('textsim2').offsetWidth;
      document.getElementById('textsim3').classList.remove("textsim3")
      void document.getElementById('textsim3').offsetWidth;
      document.getElementById('textsim4').classList.remove("textsim4")
      void document.getElementById('textsim4').offsetWidth;
      document.getElementById('textsim1').innerHTML = sceneline1
      document.getElementById('textsim1').classList.add("textsim1")
      document.getElementById('textsim2').innerHTML = sceneline2
      document.getElementById('textsim2').classList.add("textsim2")
    }
    if (scenenoflines === '3') {
      document.getElementById('textsim1').classList.remove("textsim1")
      void document.getElementById('textsim1').offsetWidth;
      document.getElementById('textsim2').classList.remove("textsim2")
      void document.getElementById('textsim2').offsetWidth;
      document.getElementById('textsim3').classList.remove("textsim3")
      void document.getElementById('textsim3').offsetWidth;
      document.getElementById('textsim4').classList.remove("textsim4")
      void document.getElementById('textsim4').offsetWidth;
      document.getElementById('textsim1').innerHTML = sceneline1
      document.getElementById('textsim1').classList.add("textsim1")
      document.getElementById('textsim2').innerHTML = sceneline2
      document.getElementById('textsim2').classList.add("textsim2")
      document.getElementById('textsim3').innerHTML = sceneline3
      document.getElementById('textsim3').classList.add("textsim3")
    }
    if (scenenoflines === '4') {
      document.getElementById('textsim1').classList.remove("textsim1")
      void document.getElementById('textsim1').offsetWidth;
      document.getElementById('textsim2').classList.remove("textsim2")
      void document.getElementById('textsim2').offsetWidth;
      document.getElementById('textsim3').classList.remove("textsim3")
      void document.getElementById('textsim3').offsetWidth;
      document.getElementById('textsim4').classList.remove("textsim4")
      void document.getElementById('textsim4').offsetWidth;
      document.getElementById('textsim1').innerHTML = sceneline1
      document.getElementById('textsim1').classList.add("textsim1")
      document.getElementById('textsim2').innerHTML = sceneline2
      document.getElementById('textsim2').classList.add("textsim2")
      document.getElementById('textsim3').innerHTML = sceneline3
      document.getElementById('textsim3').classList.add("textsim3")
      document.getElementById('textsim4').innerHTML = sceneline4
      document.getElementById('textsim4').classList.add("textsim4")
    }
    document.getElementById('textbox').addEventListener("click", boxclicked)
}
function boxclicked() {
  document.getElementById('textbox').removeEventListener("click", boxclicked)
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
    fetch("lines.json")
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
      scenetype = (data[linereading].type)
      scenecharacter = (data[linereading].character)
      sceneline1 = (data[linereading].line1)
      sceneline2 = (data[linereading].line2)
      sceneline3 = (data[linereading].line3)
      sceneline4 = (data[linereading].line4)
      scenenoflines = (data[linereading].noflines)
      scenetext = (data[linereading].text)
      sceneyes = (data[linereading].yes)
      sceneno = (data[linereading].no)
      sceneexpression = (data[linereading].expression)
      scenemove = (data[linereading].scenemove)
      sceneend = (data[linereading].chapterend)
      sceneaction = (data[linereading].action)
      scenetext1 = (data[linereading].text1)
      scenetext2 = (data[linereading].text2)
      scenetext3 = (data[linereading].text3)
      sceneop1 = (data[linereading].op1)
      sceneop2 = (data[linereading].op2)
      sceneop3 = (data[linereading].op3)
      sceneto = (data[linereading].to)
      scenechannel = (data[linereading].channel)
      sceneloop = (data[linereading].loop)
      console.log(scenetype)
      console.log(scenecharacter)
      console.log(sceneline1)
      console.log(sceneline2)
      console.log(sceneline3)
      console.log(sceneline4)
      console.log(scenetext)
      console.log(sceneyes)
      console.log(sceneno)
      console.log(sceneexpression)
      console.log(scenemove)
      console.log(scenetext1)
      console.log(scenetext2)
      console.log(scenetext3)
      console.log(sceneop1)
      console.log(sceneop2)
      console.log(sceneop3)
      console.log(sceneto)
      if (scenetype === 'spawnchr') {
        characterspawn()
      }
      if (scenetype === 'chrline') {
        textspawn()
      }
      if (scenetype === 'sysmessage') {
        sysspawn()
      }
      if (scenetype === 'playerchoiceyn') {
        ynspawn()
      }
      if (scenetype === 'chapterend') {
        chapterendspawn()
      }
      if (scenetype === 'ambience') {
        ambiencespawn()
      }
      if (scenetype === 'playerchoices') {
        playerchoicespawn()
      }
      if (scenetype === 'tieline') {
        tielinespawn()
      }
    })
    linereading = linereading + 1
}