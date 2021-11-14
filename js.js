function checkInputs(){
	//const firstnameValue = firstname.value.trim();
	//const lastnameValue = lastname.value.trim();
	//const emailValue = email.value.trim();
	//const password1Value = password1.value.trim();
	//const password2Value = password2.value.trim();
	//const phoneValue = phone.value.trim();
	
	var x,x1,x2,text1;
	x = document.getElementById('firstname').value;
	x = document.getElementById('lastname').value;
	x = document.getElementById('email').value;
	x1 = document.getElementById('password1').value;
	x2 = document.getElementById('password2').value;
	x = document.getElementById('phone').value;

if(x==''){
	text1 = 'input no valid';
}
else{
	text1 = 'input is ok';
}
document.getElementById('e1').innerHTML=text1;


if(x==''){
	text1 = 'input no valid';
}
else{
	text1 = 'input is ok';
}
document.getElementById('e2').innerHTML=text1;


if(x==''){
	text1 = 'email input invalid';
}
else{
	text1 = 'email ok';
}
document.getElementById('e3').innerHTML=text1;



if(x1==''){
	text1 = 'please enter password';
}
else{
	text1 = 'password ok';
}
document.getElementById('e4').innerHTML=text1;


if(x2==''){
	text1 = 'please confirm password';
}
else if(x2!==x1){
	text1 = 'password does not match';
}
else{
	text1 = 'input is ok';
}
document.getElementById('e5').innerHTML=text1;


if(x==''){
	text1 = 'phone number invalid';
}
else{
	text1 = 'phone number is ok';
}
document.getElementById('e6').innerHTML=text1;

}