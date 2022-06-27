let inputOut = document.querySelector('#cityOut');
let inputIn = document.querySelector('#cityIn');
let findBtn = document.querySelector('.find');
const cyrillicPattern = /^\p{Script=Cyrillic}+$/u;
let time = document.querySelector('#date');
let radioOne = document.querySelector('#OneWay');
let radioTwo = document.querySelector('#RoundTrip');
let NumbTickets = document.querySelector('#NumberTickets')
const data = {};

const modal = function(){
    let openBTN = document.querySelector('.modal-btn');
    let modalWnd = document.querySelector('.modal-window');
    let body = document.querySelector('body');
    let parentDiv = document.querySelector('.parentDiv');

    openBTN.addEventListener('click',function(){
        modalWnd.style.display = 'flex';
        body.style.overflow = 'hidden';
        body.style.margin = '0';
        parentDiv.style.height = '100%';
		parentDiv.style.background = 'rgba(0,0,0, 0.3)';
    });
    parentDiv.addEventListener('click', (event)=>{
		modalWnd.style.display = '';
	    body.style.overflow = '';
		parentDiv.style.width = '';
		parentDiv.style.height = '';
		parentDiv.style.background = '';	
		modalWnd.stopPropagation;
	 });
     modalWnd.addEventListener('click', (e)=>{
        e.stopPropagation();
    })
    inputOut.addEventListener('blur', checkOut);
    inputIn.addEventListener('blur', checkIn);
    findBtn.addEventListener('click',(event)=>buttonFunc(event));
};
function checkOut(){
    if (inputOut.validity.valueMissing){
        document.forms[0].reportValidity();
        inputOut.style.border = '.5px solid red';
        inputOut.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.6)';
        inputOut.setCustomValidity('Поле должно быть заполненым!');
    } else if (!cyrillicPattern.test(inputOut.value)){
        inputOut.setCustomValidity('Только русские буквы!');
        document.forms[0].reportValidity();
        inputOut.style.border = '.5px solid red';
        inputOut.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
    }
    else{
        
        console.log(inputOut.value)
        inputOut.style.border = '.5px solid green';
        inputOut.style.boxShadow = '1px 1px 10px rgba(0,255,0, 0.2)';
        data[`Город отъезда`] = inputOut.value;
    }
};
function checkIn(){
if (inputIn.validity.valueMissing){
    document.forms[0].reportValidity();
    inputIn.style.border = '.5px solid red';
    inputIn.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
    inputIn.setCustomValidity('Поле должно быть заполненым!');
}	else if (!cyrillicPattern.test(inputIn.value)){
    document.forms[0].reportValidity();
    inputIn.setCustomValidity('Только русские буквы!');
    inputIn.style.border = '.5px solid red';
    inputIn.style.boxShadow = '1px 1px 10px rgba(255,0,0, 0.2)';
}
else{
    inputIn.style.border = '.5px solid green';
    inputIn.style.boxShadow = '1px 1px 10px rgba(0,255,0, 0.2)';
    data[`Город приезда`] = inputIn.value;
}
};
function buttonFunc(event){
event.preventDefault();
data[`Дата`] = time.value;
if (radioTwo.value === 'on') data[`Тип билета`] = 'В одну сторону';
if (radioOne.value === 'on') data[`Тип билета`] = 'В обе стороны';
if(NumbTickets.value > 0) data[`Колличество билетов:`] = NumbTickets.value;
console.table(data);
};

modal();