const passwd_1 = document.querySelector("#password");
const passwd_2 = document.querySelector("#conf-password");


function checkPasswdMatch() {
	if (passwd_1.value != passwd_2.value) {
		passwd_1.classList.add("error");
		passwd_2.classList.add("error");
		passwd_1.setCustomValidity("please math the passwords!!!");
		document.querySelector("#error-msg").style = "display: block;";
	} else {
		passwd_1.classList.remove("error");
		passwd_2.classList.remove("error");
		passwd_1.setCustomValidity("");
		document.querySelector("#error-msg").style = "display: none;";
	}
}


passwd_1.addEventListener("input", checkPasswdMatch);
passwd_2.addEventListener("input", checkPasswdMatch);
