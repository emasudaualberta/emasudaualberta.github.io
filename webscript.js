

function onFocus(text){
    document.getElementById("mainbar").placeholder = text;
  }
function showDropdown() {
    document.getElementById("myDropdown").style.display = "block";
    bar = document.getElementById("mainbar");
    bar.style.borderBottomLeftRadius = '0px';
    bar.style.borderBottomRightRadius = '0px';
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

const projectList = ['caffcalc','squish']


function fillDropdown(){
  console.log("pop")
  var dropdown = document.getElementById('myDropdown')
  for(project in projectList){
    createDropdownElement(projectList[project],dropdown)
  }

}

function createDropdownElement(element,dropdown){
  var a = document.createElement('a');
  a.classList.add('dropdown');
  a.href = element+'.html';
  a.innerHTML = element;
  dropdown.appendChild(a);

  //<a class = "dropdown"href = "caffeineCalc.html">Caffiene Calculator</a>



}

window.onload = () => {

  fillDropdown()
  
  for(project in projectList){
    const layers = ['imageStackTop','imageStackMid','imageStackBottom'];
    var someLink = projectList[project]+'/'+projectList[project];
    var projectHolder = document.getElementById('projectHolder');
    var container = document.createElement("div");
    container.classList.add("container");
    var a = document.createElement('a');
    a.href = someLink+'.html';
    var display = document.createElement("div");
    display.classList.add("projDisplay");

    for(var i =1; i<4; i++){
      var elementCont = document.createElement('div');
      elementCont.classList.add(layers[i-1]);
      var image = document.createElement('img');
      var int  = i.toString();
      image.src = someLink +int +'.png';
      elementCont.appendChild(image);
      display.appendChild(elementCont);
    }


    var node = document.createTextNode(projectList[project]);
    var title = document.createElement('p');
    title.appendChild(node);


    a.appendChild(display);
    a.appendChild(title);
    container.appendChild(a);
    try{
    projectHolder.appendChild(container);
    }catch (e){
      window.alert(e)
    }
  }

}
