// let firstname = document.getElementById('firstname');
let inputValid = document.getElementsByClassName('input-valid');
// let e1 = document.getElementById('e1');
let error = document.querySelector('.error-mssg')
let submitCheck = document.querySelector('#submit-check')


for(let i=0; i<inputValid.length; i++){
	inputValid[i].addEventListener('keyup', ()=>{
			if(inputValid[i].value!=''){
		error.style.display = 'none'
		error.style.visibility = 'hidden'
		error.innerHTML = '';
	}
	})
}

for(let j=0; j<inputValid.length; j++){
	submitCheck.addEventListener('click',()=>{
	console.log('dick son')
		if(inputValid[j].value==''){
			error.style.display = 'inline-block'
			error.style.visibility = 'visible'
			error.innerHTML = 'error detected';
		}
	})
	}

// firstname.addEventListener('keyup', ()=>{

// 	console.log('grind me baby')
// })


// function checkInputs(){
	//const firstnameValue = firstname.value.trim();
	//const lastnameValue = lastname.value.trim();
	//const emailValue = email.value.trim();.value
	//const password1Value = password1.value.trim();
	//const password2Value = password2.value.trim();
	//const phoneValue = phone.value.trim();
	
	// var x,x1,x2,text1;
	
	// x = document.getElementById('lastname').value;
	// x = document.getElementById('email').value;
	// x1 = document.getElementById('password1').value;
	// x2 = document.getElementById('password2').value;
	// x = document.getElementById('phone').value;

	// if(firstname.value===''){
	// 	e1.style.display = 'inline-block'
	// 	e1.style.visibility = 'visible'
	// 	e1.innerHTML = 'Invalid input';
	// }



// if(x==''){
// 	text1 = 'input no valid';
// }
// else{
// 	text1 = 'input is ok';
// }
// document.getElementById('e2').innerHTML=text1;


// if(x==''){
// 	text1 = 'email input invalid';
// }
// else{
// 	text1 = 'email ok';
// }
// document.getElementById('e3').innerHTML=text1;



// if(x1==''){
// 	text1 = 'please enter password';
// }
// else{
// 	text1 = 'password ok';
// }
// document.getElementById('e4').innerHTML=text1;


// if(x2==''){
// 	text1 = 'please confirm password';
// }
// else if(x2!==x1){
// 	text1 = 'password does not match';
// }
// else{
// 	text1 = 'input is ok';
// }
// document.getElementById('e5').innerHTML=text1;


// if(x==''){
// 	text1 = 'phone number invalid';
// }
// else{
// 	text1 = 'phone number is ok';
// }
// document.getElementById('e6').innerHTML=text1;

// }