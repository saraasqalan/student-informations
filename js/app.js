'use strict'
function getAge(min,max) {
    return  Math.floor(Math.random() * 6) + 18 
}
const tableEl = document.createElement('table');
function studentInfo (id, sname , email , mobile ,age, tuition){
this.id=id;
this.sname=sname;
this.email=email;
this.mobile=mobile;
this.age=age;
this.tuition=tuition;
};
const sname = email.substring(0,email.lastIndexOd("@"));

function renderHeaders(){
    let trEl=document.createElement('tr');
    tableEl.appendChild(trEl);
    let thEl=document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent='Id';
    let thEl=document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent='Name';
    let thEl=document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent='Email';
    let thEl=document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent='Mobile';
    let thEl=document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent='Age';
    let thEl=document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent='Tuition';
    }

    function render(){
        let trEl=document.createElement('tr');
        tableEl.appendChild(trEl);
        let tdEl=document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent=this.id;
        let tdEl=document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent=this.sname;
        let tdEl=document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent=this.email;
        let tdEl=document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent=this.mobile;
        let tdEl=document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent=this.age;
        let tdEl=document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent=this.tuition;
    };

    var putData=function(){
for (var i=0 ;i<5;i++){
id[i]=localStorage[id];
id=parseInt(localStorage[id]);
sname[i]=localStorage[sname];
sname=parseInt(localStorage[sname]);
email[i]=localStorage[email];
email=parseInt(localStorage[email]);
mobile[i]=localStorage[mobile];
mobile=parseInt(localStorage[mobile]);
age[i]=localStorage[age];
age=parseInt(localStorage[age]);
tuition[i]=localStorage[tuition];
tuition=parseInt(localStorage[tuition]);


}



    }
    let Total=0
    for(let i=0; i<4 ;i++){
        let Total=tuition+Total;
    }
    const form =document.getElementById("info");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        console.log(event.target);
const id=event.target.id.value;
const sname=event.target.sname.value;
const email=event.target.email.value;
const mobile=event.target.mobile.value;
const tuition=event.target.tuition.value;
const news = new studentInfo(id, sname , email , mobile ,age, tuition)
news.renderHeaders;
news.render;
form.reset();
    })
   

