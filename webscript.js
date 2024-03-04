var hovering = 0;

function onFocus(text){
    document.getElementById("mainbar").placeholder = text;
  }
function showDropdown() {
    document.getElementById("myDropdown").style.display = "block";
    bar = document.getElementById("mainbar");
    bar.style.borderBottomLeftRadius = '0px';
    bar.style.borderBottomRightRadius = '0px';
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
window.onclick = function(e) {
    if (!e.target.matches('.par, .homebar, .dropdownDiv,.dropdown')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.style.display == 'block') {
        myDropdown.style.display = 'none';
        bar = document.getElementById("mainbar");
        bar.style.borderBottomLeftRadius = '20px';
        bar.style.borderBottomRightRadius = '20px';
      }
    }
  }
