var hovering = 0;

function onFocus(text){
    document.getElementById("mainbar").placeholder = text;
  }
function showDropdown() {
    document.getElementById("myDropdown").style.display = "block";
}

function hideDropdown(){
    if (hovering ==0){
        document.getElementById("myDropdown").style.display = "none";
    }
}
function isHovering(bool){
    hovering = bool;
}

function filterFunc(){
    var i;
    var input = document.getElementById("mainbar");
    var typed = input.value.toUpperCase();
    var div = document.getElementById("myDropdown");
    var element = div.getElementsByClassName("dropdown");
    for(i =0; i<element.length;i++){
        txtValue = element[i].textContent || element[i].innerText;
        if (txtValue.toUpperCase().indexOf(typed) > -1) {
            element[i].style.display = "";
        } else {
            element[i].style.display = "none";
          }
    }

}
