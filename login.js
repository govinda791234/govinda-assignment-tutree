function loginValidation()
{
	
	var user = document.getElementById("user").value;
	var pass = document.getElementById("password11").value;

	var letters=/^[a-zA-Z]+$/;
var numbers=/^[0-9]+$/;
	


// var Error_Massege = document.getElementById("Error_Massege");
	var text;
	// Error_Massege.style.padding = "10px";

	if (user.length<3) {
		
		text = "Please Enter Valid UserName";
		// Error_Massege.innerHTML = text;
		alert(text);
		return false;
		
	}

	if (pass.length<6 && pass != letters && pass != numbers)
	{
		text = "Password must contain lowercase,uppercase Latter,&number";
		// Error_Massege.innerHTML = text;
		alert(text);
		return false;

	}

	

	let userDetails = sessionStorage.getItem('jovinda');
	if(userDetails === undefined || userDetails === null)
	{
		return alert("No user has been registered");

	}
	if(userDetails.password !== pass){
		return alert("You have not been registered. Please register first");
	}
	window.location.replace('./navbar.html');


	return false;
}