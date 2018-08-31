function openSetting(evt, Setting) {
    
    var a, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (a = 0; a < tabcontent.length; a++) {
        tabcontent[a].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (a = 0; a < tablinks.length; a++) {
        tablinks[a].className = tablinks[a].className.replace(" active", "");
    }

    document.getElementById(Setting).style.display = "block";
    evt.currentTarget.className += " active";
} 

function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
} 