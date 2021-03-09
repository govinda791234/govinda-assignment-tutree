function validation(e)
{
	e.preventDefault();
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	
	var password = document.getElementById("password").value;

	// var passw = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/";

	var letters=/^[a-zA-Z]+$/;
var numbers=/^[0-9]+$/;

	// var Error_Massege = document.getElementById("Error_Massege");

	var text;

	// Error_Massege.style.padding = "10px";
	if (fname.length<3) {
		text = "Please Enter Valid Name";
		alert(text);
		// Error_Massege.innerHTML = text;
		return false;
	}
	if (lname.length<3) {
		text = "Please Enter Valid Father Name";
		// Error_Massege.innerHTML = text;
		alert(text);
		return false;
	}

	if (email.indexOf("@") == -1 || email.length<6) {
		text = "Please Enter Valid Email";
		// Error_Massege.innerHTML = text;
		alert(text);
		return false;
	}

	if (password.length<6 && password != letters && password != numbers)
	{
		text = "Password must contain lowercase,uppercase Latter,&number";
		alert(text);
		// Error_Massege.innerHTML = text;
		return false;

	}
// if (password.length < 4 || !letter.test(password) || !number.test(password)) {
//         invalid.push("*Password");
//         text = "Password must contain lowercase,uppercase Latter,number&charector";
// 		Error_Massege.innerHTML = text;
// 		return false;

//    }

	// if (password!=(/[a-z]/g) && password!=( 
 //                    /[A-Z]/g) && password.!=( 
 //                    /[0-9]/g) && password.!=( 
 //                    /[^a-zA-Z\d]/g) && password.length >= 8) 
	
	// {
	// 	text = "Password must contain lowercase,uppercase Latter,number&charector";
	// 	Error_Massege.innerHTML = text;
	// 	return false;
	// 	}
	
	// if (password==passw) {
	// 	text = "Password must contain lowercase,uppercase Latter,number&charector";
	// 	Error_Massege.innerHTML = text;
	// 	return false;
	// }
	// let str = JSON.getItem("jovinda");
	// str = JSON.parse(str);
	// if(str.email !== undefined && str.name === email){
	// 	return alert('one user has already been registerd')
	// }
	let str = sessionStorage.getItem("jovinda");
		str = JSON.parse(str);
		if(str !==  null){
			if(str.email === email){
				return alert("One user already exists");
			}
		}
	let userDetails = {
		fname,
		lname,
		email,
		password
	}
	userDetails = JSON.stringify(userDetails);
	sessionStorage.setItem('jovinda',userDetails)
	window.location.replace('./navbar.html');

		

	return false;

}


