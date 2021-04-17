const btn = document.getElementById("submit__button");

btn.addEventListener("click", function () {
	const email = document.getElementById('email__input');
	if(email.value === "") {
		email.classList.add("warning");
	} else {
		email.classList.remove("warning");
	}
})