
var all_col = document.getElementsByClassName("filter-col-elm");
var filter_col_contents = document.querySelectorAll(".filter-col-elm .filter-col-content");
const modal_img = document.querySelector(".modal .modal-img");
const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal .close");
const filter_btn_container = document.querySelectorAll(".filter-btn-container");
let filter_btn_containers = document.querySelectorAll(".filter-btn-container .btn");
let caption_text = document.querySelector(".modal .modal-content .caption .caption-text");
let caption_counter = document.querySelector(".modal .modal-content .caption .caption-counter");



// filter element


console.log(filter_btn_containers);




filterSelection("all-elm");


function filterSelection(c) {
	var i;




	if (c == "all-elm") {
		c = "";

	}


	for (i = 0; i < all_col.length; i++) {

		removeClass(all_col[i], "show-filter-elm");

		if (all_col[i].className.indexOf(c) > -1) {


			addClass(all_col[i], "show-filter-elm");

		}

	}


}

function addClass(elm, new_class) {


	var i, arr1, arr2;

	arr1 = elm.className.split(" ");

	arr2 = new_class.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			elm.className += " " + arr2[i];
		}
	}

}

function removeClass(elm, new_class) {



	var i, arr1, arr2;

	arr1 = elm.className.split(" ");
	arr2 = new_class.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);

		}
	}
	elm.className = arr1.join(" ");
}


// modal


for (let i = 0; i < filter_col_contents.length; i++) {


	let slide_index = 0;

	const current_filter_content = filter_col_contents[i];

	current_filter_content.onclick = function (e) {

		slide_index = i;
		const img_elm = current_filter_content.getElementsByTagName("img")[0];
		console.log(slide_index);

		changeItem();


		// console.log(slide_index);

		// console.log(img_elm.src);

		modal.style.display = "block";
		modal.style.textAlign = "center";
	}


	function next_slide() {
	
		if (slide_index == filter_col_contents.length - 1) {
			slide_index = 0
		}
		else {
			slide_index++;
		}
		changeItem(); 

	}

	function prev_slide() {
		console.log("prev");
		if (slide_index ===0) {
			slide_index = filter_col_contents.length - 1;
		}
		else {
			slide_index--;
		}
		console.log(slide_index);
		changeItem(); 

	}





	function changeItem() {
		const img_elm = filter_col_contents[slide_index].getElementsByTagName("img")[0];
		modal_img.src = img_elm.src;
		console.log(img_elm);
		caption_text.innerHTML = filter_col_contents[slide_index].querySelector("h2").innerHTML;
		caption_counter.innerHTML = (slide_index + 1) + "  of  " + filter_col_contents.length;


	}




	// modal close


	modal_close.onclick = function () {

		modal.style.display = "none";
	}


}


// for button


for (let i = 0; i < filter_btn_containers.length; i++) {

	filter_btn_containers[i].addEventListener("click", function () {
		var current = document.querySelector(".active");

		current.className = current.className.replace(" active", "");
		this.className += " active";


	});



}







