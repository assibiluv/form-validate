const form1= document.getElementById('form1');
const firstname= document.getElementById('firstname');
const lastname= document.getElementById('lastname');
const email= document.getElementById('email');
const password1= document.getElementById('password1');
const password2= document.getElementById('password2');
const phone= document.getElementById('phone');

//form1.addEventListener('submit',(e)=> {
	//e.preventDefault();
	
	//checkInputs();
//});

function checkInputs(){
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const password1Value = password1.value.trim();
	const password2Value = password2.value.trim();
	const phoneValue = phone.value.trim();

if(firstnameValue === ''){
	//show error
	//add error 
	//setErrorFor(firstnameValue, 'First name cannot be blank');
document.getElementById('e1').innerHTML='First name cannot be blank';
}	
else{
	//add success class
	setSuccessFor(firstname);
}

if(lastnameValue === ''){
	setErrorFor(lastname, 'Last name cannot be blank');
}	
else{
	setSuccessFor(lastname);
}

if(emailValue === ''){
	setErrorFor(email, 'email name cannot be blank');
}	
else if(!isEmail(emailValue)){
	setErrorFor(email,'Email is not valid');
}
else{
	setSuccessFor(email);
}

if(password1Value === ''){ 
	setErrorFor(password1, 'Password empty');
}	
else{
	setSuccessFor(password1);
}

if(password2Value === ''){ 
	setErrorFor(password2, 'Password cannot be blank');
}	
else if(password1Value!==password2Value){
	setErrorFor(password2,'password does not match');
}
else{
	setSuccessFor(password2);
}

if(phoneValue === ''){ 
	setErrorFor(phone, 'Phone space cannot be blank');
}	
else{
	setSuccessFor(phone);
}
}
function setErrorFor(input,message){
	//.form-control
	//const formControl = input.parentElement;
	//const small = formControl.querySelector('small');
	
	
	//add error message inside small.
	document.getElementById('password').innerText = message;
	
	//add error class
	formControl.className= 'form-control error';	
}
function setSuccessFor(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}