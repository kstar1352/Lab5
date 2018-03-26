function showDescription(descript) {
	$("#description").html("Description: " + descript);

}

function hideDescription(){
	$("#description").html("")
}

function validate() {
	var txtDoB = $("#txtDoB").val();
	var DoB = new Date(txtDoB);
	if (DoB >= new Date()) {
		alert("The date of birth is invalid, date of birth has to be before today")
		return false;
	}

	var phone = $("#phone").val()
	var len = phone.length;
	if (isNaN(phone) || len != 10) {
		alert("Not a valid number 10 digits long, must enter only digits for phone number no spaces or dashes")
	}
	

}