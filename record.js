// fill in javascript code here

// document.querySelector("tbody").addEventListener("submit",myfunction)
// function myfunction(event){
// event.preventDefault();
// let EmployeeName =document.querySelector("tbody").EmployeeName.value
// let employeeID=document.querySelector("tbody").employeeID.value
// let department =document.querySelector("tbody").department.value
// let Experience =document.querySelector("tbody").Experience.value
// let EmailAddress =document.querySelector("tbody").EmailAddress.value
// let MobileNumber =document.querySelector("tbody").MobileNumber.value


// let tr = document.createElement("tr")
// let td1 =document.createElement("td1")
// td1.innerText=empl
// let td2 =document.createElement("td2")
// td2.innerText=emplid
// let td3 =document.createElement("td3")
// td3.innerText=dep
// let td4 =document.createElement("td4")
// td4.innerText=exper
// let td5 =document.createElement("td5")
// td5.innerText=email
// let td6 =document.createElement("td6")
// td9.innerText=mob
// let td7 =document.createElement("td7")
// if(exper>5){
//     td7.innerText=Senior
// }
// else if((exper>=2)&&(exper<=5)){
//     td7.innerText="Junior"
// }else{
//     td7.innerText="Fresher"
// }
// let td8 =document.createElement("td8")
// td8.innerText="Delete"
// td8.style.backgroundColor="red"
// td8.addEventListener("click",deleterow)
// tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
// document.querySelector("tbody").append(tr)
// }

// function deleterow(event){
//     event.target.preventnode.remove()
// }

document.querySelector("form").addEventListener("submit",myfunction)
 
function myfunction(event){
    event.preventDefault()
    console.log(event.target.children)

     let formdata =event.target.children
  let obj={}
     for(var i =2 ; i<formdata.length;i=i+4){
        obj[formdata[i].id]=formdata[i].value
     
//console.log(formdata[i])
     }
   displaydata(obj)
}

function displaydata(data){
   // console.log(data)
let tbody=document.querySelector("tbody")
let tr =document.createElement("tr")

let td1=document.createElement("td")
td1.innerText=data.name

let td2=document.createElement("td")
td2.innerText=data.employeeID

let td3=document.createElement("td")
td3.innerText=data.department

let td4=document.createElement("td")
td4.innerText=data.exp

let td5=document.createElement("td")
td5.innerText=data.email

let td6=document.createElement("td")
td6.innerText=data.mbl

let td7=document.createElement("td")
if(Number(data.exp)>5){
    td7.innerText="Senior"
}
else if((Number(data.exp)>=2)&&(Number(data.exp)<=5)){
    td7.innerText="Junior"
}
else{
    td7.innerText="Fresher"
}
let td8 = document.createElement("td")
td8.innerText="Delete"
td8.style.color="red"
td8.addEventListener("click",mydelete)
tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
tbody.append(tr)
}

function mydelete(event){
    event.target.parentNode.remove()
}