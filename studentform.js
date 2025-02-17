
var input1 = document.querySelector(".input1")
var input2 = document.querySelector(".input2")
var input3 = document.querySelector(".input3")
var input4 = document.querySelector(".input4")
var input5 = document.querySelector(".input5")
var one = document.querySelector("#one")
var two = document.querySelector("#two")
var male = document.querySelector("#male")
var female = document.querySelector("#female")


function add(event){


    event.preventDefault()

    male.addEventListener('change', () => {
      if (male.checked) {
        row.innerHTML =  `
         <td>${'Male'}</td>`
      }
    });
    
    female.addEventListener('change', () => {
      if (female.checked) {
        row.innerHTML = `
         <td>${'Female'}</td>`
      }
    });
    

    var row = document.createElement("tr");
            row.innerHTML = `
                <td>${input1.value}</td>
                <td>${input2.value}</td>
                <td>${input3.value}</td>
                <td>${input4.value}</td>
                <td>${input5.value}</td>
                <td><button id="btn" onclick="clearitem(event)">Delete</button></td>
            `;
            two.appendChild(row);


   
}

function clearitem(event) {
    event.target.parentElement.parentElement.remove();
}



  //my code
    /*var jk1 =document.createElement("td")
    var jk2 =document.createElement("td")
    var jk3 =document.createElement("td")
    var jk4 =document.createElement("td")
    var jk5 =document.createElement("td")
    var jk6 =document.createElement("td")
    jk1.innerHTML=input1.value 
    jk2.innerHTML=input2.value
    jk3.innerHTML=input3.value
    jk4.innerHTML=input4.value
    jk5.innerHTML=input5.value
    jk6.innerHTML="<button onclick='clearitem(event)' id='btn'>delete</button>"
    two.append(jk1)
    two.append(jk2)
    two.append(jk3)
    two.append(jk4)
    two.append(jk5)
    two.append(jk6)*/