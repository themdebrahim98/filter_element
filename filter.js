
var all_col = document.getElementsByClassName("filter-col-elm");
var filter_col_contents = document.querySelectorAll(".filter-col-elm .filter-col-content");
const modal_img = document.querySelector(".modal .modal-img");
const modal = document.querySelector(".modal");
const modal_close = document.querySelector(".modal .close");
const filter_btn_container = document.querySelectorAll(".filter-btn-container");
let filter_btn_containers = document.querySelectorAll(".filter-btn-container .btn");

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





for (let i = 0; i < filter_col_contents.length; i++) {


    const current_filter_content = filter_col_contents[i];

    current_filter_content.onclick = function (e) {
        const img_elm = current_filter_content.getElementsByTagName("img")[0];
        modal_img.src = img_elm.src;
        modal.style.display = "block";
        modal.style.textAlign = "center";
    }

    modal_close.onclick = function () {

        modal.style.display = "none";
    }


}

for (let i = 0; i < filter_btn_containers.length; i++) {

    filter_btn_containers[i].addEventListener("click",function(){
        var current = document.querySelector(".active");

        current.className = current.className.replace(" active","");
        this.className += " active";


    });

   


    // filter_btn_containers[i].ondblclick = function () {
    //     for(let j = 0;j<filter_btn_containers.length;j++){
    //         filter_btn_containers[j].className = filter_btn_containers[j].className.replace(" active", "");
    
    //     }
       




    //     this.className += "  " + "active";
    // }



}


