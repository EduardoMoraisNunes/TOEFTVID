a = 0
b = 0
var diff = 'diff'
sorting = 1
tab = 1
fetchsongs()
function fetchsongs(){
        fetch("songs - Cópia.json")
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            //Recebe a array do arquivo JSON
            mapRetrieved = (data)
            mapSorted2 = mapRetrieved.sort((a,b)=>{
            if(sorting == 1){
                return a.ver - (b.ver)  
                //return a.coaches.localeCompare(b.coaches)
            }
            if(sorting == 2){
                return a.difficulty - (b.difficulty)
            }
            if(sorting == 3){
                return a.coaches.localeCompare(b.coaches)
            }
            })
            mapStored = (mapRetrieved) => {
                var container = document.createElement("div")
                container.setAttribute('class', 'container')
                container.setAttribute('id', 'container')
                if(mapRetrieved.ver == 1){
                    document.getElementById("1").style.display = 'block'
                    document.getElementById("g1").style.display = 'block'
                    document.getElementById("1").appendChild(container);
                }
                else if(mapRetrieved.ver == 2){
                    document.getElementById("2").style.display = 'block'
                    document.getElementById("g2").style.display = 'block'
                    document.getElementById("2").appendChild(container);
                }
                else if(mapRetrieved.ver == 2.1){
                    document.getElementById("2.1").style.display = 'block'
                    document.getElementById("g2.1").style.display = 'block'
                    document.getElementById("2.1").appendChild(container);
                }
                else if(mapRetrieved.ver == 2.2){
                    document.getElementById("2.2").style.display = 'block'
                    document.getElementById("g2.2").style.display = 'block'
                    document.getElementById("2.2").appendChild(container);
                }
                else if(mapRetrieved.ver == 3){
                    document.getElementById("3").style.display = 'block'
                    document.getElementById("g3").style.display = 'block'
                    document.getElementById("3").appendChild(container);
                }
                else if(mapRetrieved.ver == 3.1){
                    document.getElementById("3.1").style.display = 'block'
                    document.getElementById("g3.1").style.display = 'block'
                    document.getElementById("3.1").appendChild(container);
                }
                else if(mapRetrieved.ver == 4){
                    document.getElementById("4").style.display = 'block'
                    document.getElementById("g4").style.display = 'block'
                    document.getElementById("4").appendChild(container);
                }
                else if(mapRetrieved.ver == 5){
                    document.getElementById("5").style.display = 'block'
                    document.getElementById("g5").style.display = 'block'
                    document.getElementById("5").appendChild(container);
                }
                else if(mapRetrieved.ver == 5.1){
                    document.getElementById("5.1").style.display = 'block'
                    document.getElementById("g5.1").style.display = 'block'
                    document.getElementById("5.1").appendChild(container);
                }
                else if(mapRetrieved.ver == 6){
                    document.getElementById("6").style.display = 'block'
                    document.getElementById("g6").style.display = 'block'
                    document.getElementById("6").appendChild(container);
                }
                else if(mapRetrieved.ver == 7){
                    document.getElementById("7").style.display = 'block'
                    document.getElementById("g7").style.display = 'block'
                    document.getElementById("7").appendChild(container);
                }
                else if(mapRetrieved.ver == 8){
                    document.getElementById("8").style.display = 'block'
                    document.getElementById("g8").style.display = 'block'
                    document.getElementById("8").appendChild(container);
                }
                else if(mapRetrieved.ver == 9){
                    document.getElementById("9").style.display = 'block'
                    document.getElementById("g9").style.display = 'block'
                    document.getElementById("9").appendChild(container);
                }
                else if(mapRetrieved.ver == 10){
                    document.getElementById("10").style.display = 'block'
                    document.getElementById("g10").style.display = 'block'
                    document.getElementById("10").appendChild(container);
                }
                else if(mapRetrieved.ver == 11){
                    document.getElementById("11").style.display = 'block'
                    document.getElementById("g11").style.display = 'block'
                    document.getElementById("11").appendChild(container);
                }
                else if(mapRetrieved.ver == 12){
                    document.getElementById("12").style.display = 'block'
                    document.getElementById("g12").style.display = 'block'
                    document.getElementById("12").appendChild(container);
                }
                else if(mapRetrieved.ver == 13){
                    document.getElementById("13").style.display = 'block'
                    document.getElementById("g13").style.display = 'block'
                    document.getElementById("13").appendChild(container);
                }
                else if(mapRetrieved.ver == 14){
                    document.getElementById("14").style.display = 'block'
                    document.getElementById("g14").style.display = 'block'
                    document.getElementById("14").appendChild(container);
                }
                else{
                    document.getElementById("others").style.display = 'block'
                    document.getElementById("g0").style.display = 'block'
                    document.getElementById("others").appendChild(container);
                }
                var div = document.createElement("div");
                var p = document.createElement("p")
                container.appendChild(div);
                container.tabIndex = tab
                div.setAttribute('class', 'Square')
                div.setAttribute('id', mapRetrieved.id)
                div.setAttribute('data-art', mapRetrieved.artist)
                div.setAttribute('data-diff', mapRetrieved.difficulty)
                div.setAttribute('data-ver', mapRetrieved.ver)
                div.setAttribute('data-name', mapRetrieved.name)
                p.setAttribute('class', 'SongName')
                p.innerHTML = mapRetrieved.name
                div.style.backgroundImage = 'url('+mapRetrieved.id+'/'+mapRetrieved.id+'_Cover_Generic.webp), url('+mapRetrieved.id+'/Square.jpg), url(Cover_Albumcoach.webp)'
                container.appendChild(p);
                tab = tab + 1
            };
            mapRetrieved.forEach(mapStored)
            clicar()
      })
}
        const bodye = document
        bodye.addEventListener('click', event =>{
        const ifclicked = event.target
        if(ifclicked.className != "Square" && ifclicked.id != "dummy" && ifclicked.id != 'details'){
            lowvolume = setInterval(() => {
                if (aud.volume > 0.5) {
                    aud.volume = aud.volume - 0.1
                }
                else{
                    b = 2
                    clearInterval(lowvolume)
                }
            }, 200);
            if(document.getElementById('songdetails').style.display == 'none'){
                return
            }
            else{
            document.getElementById('songdetails').style.animation = ''
            document.getElementById('songdetails').style.animation = 'collapse 1s 1 linear'               
            setTimeout(()=>{
            document.getElementById('songdetails').style.display = 'none'
            document.getElementById('songdetails').style.animation = ''
            vid.src = ''
            aud.volume = 0.5
            }, 1000)
        }
        }
    })
    var mapId  
      var mapName  
      function clicar(){  
      const songlist = document.getElementById('songs')
            songlist.addEventListener('click', event => {
                document.addEventListener('focus',event=>{
                    if(event.target.className === 'Square'){
                        window.alert('HEY')
                    }
                })
                const clickedElement = event.target
                if(clickedElement.className === 'Square'){
                clickedElement.scrollIntoView()
                mapId = event.target.id
                mapDiff = event.target.getAttribute('data-diff')
                mapVer = event.target.getAttribute('data-ver')
                if(mapVer == 1){
                    document.getElementById('ver').innerHTML = 'Just Dance 1'
                }
                if(mapVer == 2){
                    document.getElementById('ver').innerHTML = 'Just Dance 2'
                }
                if(mapVer == 2.1){
                    document.getElementById('ver').innerHTML = 'Just Dance Wii'
                }
                if(mapVer == 2.2){
                    document.getElementById('ver').innerHTML = 'Just Dance Wii 2'
                }
                if(mapVer == 3){
                    document.getElementById('ver').innerHTML = 'Just Dance 3'
                }
                if(mapVer == 4){
                    document.getElementById('ver').innerHTML = 'Just Dance 4'
                }
                if(mapVer == 5){
                    document.getElementById('ver').innerHTML = 'Just Dance 2014'
                }
                if(mapVer == 5.1){
                    document.getElementById('ver').innerHTML = 'Just Dance Wii U'
                }
                if(mapVer == 6){
                    document.getElementById('ver').innerHTML = 'Just Dance 2015'
                }
                if(mapVer == 7){
                    document.getElementById('ver').innerHTML = 'Just Dance 2016'
                }
                if(mapVer == 7.1){
                    document.getElementById('ver').innerHTML = 'Just Dance Vitally School'
                }
                if(mapVer == 8){
                    document.getElementById('ver').innerHTML = 'Just Dance 2017'
                }
                if(mapVer == 9){
                    document.getElementById('ver').innerHTML = 'Just Dance 2018'
                }
                if(mapVer == 10){
                    document.getElementById('ver').innerHTML = 'Just Dance 2019'
                }
                if(mapVer == 11){
                    document.getElementById('ver').innerHTML = 'Just Dance 2020'
                }
                if(mapVer == 12){
                    document.getElementById('ver').innerHTML = 'Just Dance 2021'
                }
                if(mapVer == 13){
                    document.getElementById('ver').innerHTML = 'Just Dance 2022'
                }
                if(mapVer == 14){
                    document.getElementById('ver').innerHTML = 'Just Dance 2023'
                }
                if(mapVer == 99){
                    document.getElementById('ver').innerHTML = 'Just Dance CHINA'
                }
                if(mapDiff == 1){
                    document.getElementById('two').style.opacity = '50%'
                    document.getElementById('three').style.opacity = '50%'
                    document.getElementById('four').style.opacity = '50%'
                    document.getElementById('diff-text').innerHTML = 'Fácil'
                }
                if(mapDiff == 2){
                    document.getElementById('two').style.opacity = '100%'
                    document.getElementById('three').style.opacity = '50%'
                    document.getElementById('four').style.opacity = '50%'
                    document.getElementById('diff-text').innerHTML = 'Média'
                }
                if(mapDiff == 3){
                    document.getElementById('two').style.opacity = '100%'
                    document.getElementById('three').style.opacity = '100%'
                    document.getElementById('four').style.opacity = '50%'
                    document.getElementById('diff-text').innerHTML = 'Díficil'
                }
                if(mapDiff == 4){
                    document.getElementById('two').style.opacity = '100%'
                    document.getElementById('three').style.opacity = '100%'
                    document.getElementById('four').style.opacity = '100%'
                    document.getElementById('diff-text').innerHTML = 'Extrema'
                }
                mapName = event.target.getAttribute('data-name')
                mapArt = event.target.getAttribute('data-art')
                playVideo()
                aud.src = (mapId + '/Preview.ogg')
                vid.src = (mapId + '/Preview.webm')
                if(a > 0){
                    aud.volume = 1
                }
                else{
                    return
                }
                if(document.getElementById('songdetails').style.display == 'block'){
                    return 
                }
                if(document.getElementById('songdetails').style.animationPlayState== 'running') {
                    window.alert('THE ANIMATION IS PLAYING')
                }
                else{
                    document.getElementById('songdetails').style.animation = ''
                    document.getElementById('songdetails').style.display = 'block'
                    document.getElementById('songdetails').style.animation = 'collapse 1s 1 reverse linear'
                }
                }
                setTimeout(() => {
                    document.getElementById('songdetails').style.animation = ''

                }, 1200);
            })
            function playVideo(){
                document.getElementById('songname').innerHTML = mapName
                document.getElementById('songartist').innerHTML = mapArt
                document.getElementById('difficulty').classList.add(mapDiff)
                repeatVideo()
                function repeatVideo(){
                if(a > 0){
                    clearTimeout(a)
                }
                if(b > 0){
                    clearInterval(lowvolume)
                }
                a = 1
                
                vid.currentTime = 0
                aud.currentTime = 0
                    if(vid.readyState === 4){    
                        vid.play()
                                aud.currentTime = vid.currentTime
                                aud.play()
            
                        
                    }   
                a = setTimeout(()=>{
                    repeatVideo()
                }, 30000)
            }
            }
        }
//SORT BY(OUTDATED)
/*
const sort = document.getElementById('sortdummy')
const sortname = document.getElementById('name')
const sortdiff = document.getElementById('diff')
const sortcoach = document.getElementById('coaches')
const boddy = document
sort.addEventListener('click', sorted)
boddy.addEventListener
function sorted(){
    removesoreted = document.addEventListener('click', event =>{
        const notsorted = event.target
        if(notsorted != document.getElementById('sortdummy')){
            document.getElementById('sort').style.height = '1.2em'
            removeEventListener('click' ,removesoreted)
        }
        else{
            return
        }
    })
    document.getElementById('sort').style.height = '9em'
    sortname.addEventListener('click', sortedname)
    sortdiff.addEventListener('click', sorteddiff)
    sortcoach.addEventListener('click', sortedcoach)
    function sortedname(){
        if(sorting == 1){
            return
        }
        else{
        document.getElementById('songs').innerHTML = ""
        document.getElementById('sort-choice').innerHTML = "Name"
        document.getElementById('name').style.color = 'red'
        document.getElementById('coaches').style.color = 'black'
        document.getElementById('diff').style.color = 'black'
        //document.getElementById('songs').remove()
        sorting = 1
        fetchsongs()
        }
    }
    function sorteddiff(){
        if(sorting == 2){
            return
        }
        else{
        document.getElementById('songs').innerHTML = ""
        document.getElementById('sort-choice').innerHTML = "Difficulty"
        document.getElementById('coaches').style.color = 'black'
        document.getElementById('name').style.color = 'black'
        document.getElementById('diff').style.color = 'red'
        sorting = 2
        fetchsongs()
        }
    }
    function sortedcoach(){
        if(sorting == 3){
            return
        }
        else{
        document.getElementById('songs').innerHTML = ""
        document.getElementById('sort-choice').innerHTML = "Coaches"
        document.getElementById('coaches').style.color = 'red'
        document.getElementById('diff').style.color = 'black'
        document.getElementById('name').style.color = 'black'
        sorting = 3
        fetchsongs()
        }
    }
}*/
