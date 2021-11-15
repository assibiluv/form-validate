// let firstname = document.getElementById('firstname');
//let inputValid = document.getElementsByClassName('input-valid');
// let e1 = document.getElementById('e1');
//let error = document.querySelector('.error-mssg')
//let submitCheck = document.querySelector('#submit-check')


//for(let i=0; i<inputValid.length; i++){
//	inputValid[i].addEventListener('keyup', ()=>{
//			if(inputValid[i].value!=''){
//		error.style.display = 'none'
//		error.style.visibility = 'hidden'
//		error.innerHTML = '';
//	}
//	})
//}

//for(let j=0; j<inputValid.length; j++){
	//submitCheck.addEventListener('click',()=>{
	//console.log('dick son')
	//	if(inputValid[j].value==''){
	//		error.style.display = 'inline-block'
	//		error.style.visibility = 'visible'
	//		error.innerHTML = 'error detected';
	//	}
	//})
	//}
 let firstname = document.getElementById('firstname');
 let lastname = document.getElementById('lastname');
 let email = document.getElementById('email');
 let password1 = document.getElementById('password1');
 let password2 = document.getElementById('password2');
 let phone = document.getElementById('phone');
 let e1 = document.getElementById('e1');
 let e2 = document.getElementById('e2');
 let e3 = document.getElementById('e3');
 let e4 = document.getElementById('e4');
 let e5 = document.getElementById('e5');
 let e6 = document.getElementById('e6');
//firstname.addEventListener('keyup', ()=>{
//	if(firstname.value!=''){
//				error.style.display = 'none'
//				error.style.visibility = 'hidden'
//				error.innerHTML = '';
		//	}
		//});

		form1.addEventListener('keyup',(e)=> {
			e.preventDefault();
			
			checkInputs();
		});

 

function checkInputs(){
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
	// e1.sx = document.getElementById('phone').value;

    if(firstname.value!=''){
		e1.style.display = 'none'
		e1.style.visibility = 'hidden'
		e1.innerHTML = '';
	}
	else{
		e1.style.color = 'red'
	 	e1.style.display = 'inline-block'
	 	e1.style.visibility = 'visible'
	 	e1.innerHTML = 'Please enter your First Name.';
	}

	
    if(lastname.value!=''){
		e2.style.display = 'none'
		e2.style.visibility = 'hidden'
		e2.innerHTML = '';
	}
	else{
		e2.style.color = 'red'
	 	e2.style.display = 'inline-block'
	 	e2.style.visibility = 'visible'
	 	e2.innerHTML = 'Please enter your Last Name.';
	}
	 
	if(email.value!=''){
		e3.style.display = 'none'
		e3.style.visibility = 'hidden'
		e3.innerHTML = '';
	}
	else{
		e3.style.color = 'red'
	 	e3.style.display = 'inline-block'
	 	e3.style.visibility = 'visible'
	 	e3.innerHTML = 'Please enter a valid Email.';
	}

	if(password1.value!=''){
		e4.style.display = 'none'
		e4.style.visibility = 'hidden'
		e4.innerHTML = '';
	}
	else{
		e4.style.color = 'red'
	 	e4.style.display = 'inline-block'
	 	e4.style.visibility = 'visible'
	 	e4.innerHTML = 'Please enter a Password.';
	}

	if(password2.value!=''){
		e5.style.display = 'none'
		e5.style.visibility = 'hidden'
		e5.innerHTML = 'Password match';
	}
	else{
		e5.style.color = 'red'
	 	e5.style.display = 'inline-block'
	 	e5.style.visibility = 'visible'
	 	e5.innerHTML = 'Please re-enter Password.';
	}

	if(phone.value!=''){
		e6.style.display = 'none'
		e6.style.visibility = 'hidden'
		e6.innerHTML = '';
	}
	else{
		e6.style.color = 'red'
	 	e6.style.display = 'inline-block'
	 	e6.style.visibility = 'visible'
	 	e6.innerHTML = 'Please enter your Phone Number.';
	}
}