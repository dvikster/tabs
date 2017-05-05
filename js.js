
var tablinks = document.getElementsByClassName('tab-h');
var tabcontent = document.getElementsByClassName('tab-b');

for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].onclick = tabChange;
}

function tabChange() {
    for (var a = 0; a < tabcontent.length; a++) {
        tabcontent[a].style.display = "none";
    }
    var dataTab= this.getAttribute('data-tab');
    document.querySelector('.tab-b[data-tab="' + dataTab + '"]').style.display = 'block';
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    this.classList.add('active');
}

tablinks[0].click();

// tablinks[0].classList.add('active');
// tabcontent[0].style.display = "block";