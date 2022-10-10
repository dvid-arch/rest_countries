let name = localStorage.key(0)
let countryName = localStorage.getItem(name)
let sect = document.getElementById('sect')


fetch("https://restcountries.com/v3.1/all")
.then(response=>response.json())
.then(data=>{

  
   let newData = data.filter((n)=>{
        return n.name.common == countryName;
    })
    console.log(newData)
   sect.innerHTML = `
   <div class="country">
            <div class="container bg-dark text-light" id="render">
                <div class='row'>
                <div class='col-md'><img src = '${newData[0].flags.png}' class='img-fluid w-75'></div>
                <div class="oneside col-md">
                    <div class="text">
                        <div class="maintxt">
                        <h2 class="card-title py-4 text-light">${newData[0].name.common}</h2>
                        <ul class='list-group list-group-flush lead' id='ul'>
                        <li> <span class='fw-bold'>Population: </span>${newData[0].population}</li>
                        <li> <span class='fw-bold'>Region: </span>${newData[0].region}</li>
                        <li> <span class='fw-bold'>Capital: </span>${newData[0].capital[0]}</li>
                        </ul>
                        </div>
                        <div class="addtxt py-3">
                        <ul class='list-group list-group-flush lead' id='ul'>
                        <li> <span class='fw-bold'>Population: </span>${newData[0].population}</li>
                        <li> <span class='fw-bold'>Region: </span>${newData[0].region}</li>
                        <li> <span class='fw-bold'>Capital: </span>${newData[0].capital[0]}</li>
                        </ul>
                        </div>
                        <div id=""><span class='fw-bold'>country borders: </span> <span id='borders' class=''></span> </div>
                    </div>
                    </div>
                
                    
                </div>
            </div>
        </div>`

        let border = document.getElementById('borders');
        let borders = newData[0].borders

        borders.length >0 ?borders.forEach((n)=>{
            border.innerHTML += `<a href='#'><span class='px-3 bg-secondary mx-1 text-light' id='span'>${n}</span></a>`
        }):console.log('no borders');

        let span = document.querySelectorAll('#span')
        
       for (const element of span) {
        element.addEventListener('click',()=>{

           let newData = data.filter((n)=>{
                return n.cca3 == element.innerHTML
            })

            localStorage.clear()
            localStorage.setItem('name', `${newData[0].name.common}` )
            location.reload()
        })
       }
})



