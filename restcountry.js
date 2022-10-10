 let option = document.getElementById('sel');
const body = document.getElementById('body')
const container = document.getElementById('container')
const choicebtn = document.getElementById('choice')
let lightmode = document.getElementById('light-mode')
 let toFectch = "https://restcountries.com/v3.1/all";
let searchInput = document.getElementById('search');
let search = document.getElementById('sIcon')

function showLoader(){
    container.style.minHeight = '100vh'
    container.style.background = '#fff url(./gif.gif) no-repeat center center'
}

function hideLoader(){
    container.style.background = '';
}
showLoader()
 fetch(toFectch)
.then(response => response.json()
.then(x => {  
    hideLoader()
    option.addEventListener('click', ()=>{
        if(option.value.length < 1) return;
        let choice = option.value
        let choiceArr = []
        
        for (let i = 0; i < x.length; i++) {
            let condition = x[i].region == choice
            if(condition){
                choiceArr.push(x[i])
            }            
        } 

        container.innerHTML = '';
        toDiv(sorted(choiceArr)) 
    })

    function toDiv(data) {
        
        for (let i = 0; i < data.length; i++) {
            let val1 = parses(data[i].flags)
            let val2 = parses(data[i].name)
            let val3 = parses(data[i].population)
            let val4 = parses(data[i].region)
            let val5 = parses(data[i].capital)

            container.innerHTML += `
            <div class='col-md-6 col-lg-3' id='card'>
            <div class='card h-100 p-3'>
            <img src="${val1}" alt="${val2}" class='img-fluid card-image text-align-center h-50'>
            <h2 class="card-title py-4">${val2}</h2>
            <ul class='list-group list-group-flush lead' id='ul'>
                <li class = 'list-group-item'><span class='fw-bold'>Population: </span>${val3}</li>
                <li class = 'list-group-item'> <span class='fw-bold'>Region: </span>${val4}</li>
                <li class = 'list-group-item'> <span class='fw-bold'>Capital: </span>${val5}</li>
            </ul>
            </div>
            </div>`
       }
    }
   
    toDiv(sorted(x))

    let count = 0;
    lightmode.addEventListener('click',()=>{
    
    if(count%2 == 0){
        body.className = 'bg-dark'
        count++
    } else {
      body.className = 'bg-light'
      count++
    }
   
})

search.addEventListener('click', ()=>{
    let searchItem = searchInput.value.toLowerCase()
    if(/[a-z]/.test(searchItem)){
        let newX = x.filter((n,i)=>{
            
           return parses(n.name.common.toLowerCase().indexOf(searchItem)) != -1;
        })
        if(newX.length<1){
            alert('please enter a valid search input')
            return
        }
        container.innerHTML = '';
        toDiv(sorted(newX))
    } else{

    }
    
})
let img = document.getElementsByTagName('img')

for (const element of img) {
    element.addEventListener('click',()=>{
        
        let countryName = element.getAttribute('alt')
    
        localStorage.setItem('name', `${countryName}` )
        window.location = "render.html"
    })
}
}))

function parses(val) {
    if(val==undefined){
        return;
    } else if(typeof(val)=='string' || typeof(val)=='number'){
        return val;
    } else if(Array.isArray(val)){
        return val[0]
    } else {
        return Object.values(val)[0]
    }
}

function sorted(x) {
    let newCon = x.sort((a,b)=>{
        if(a.name.common > b.name.common){
            return 1;
        }
        if(a.name.common < b.name.common){
            return -1;
        }
        return 0;
    })
    return newCon
}


//search section

