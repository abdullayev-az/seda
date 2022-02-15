function click_down(){
    document.getElementById('drop_menu').style.display='block';
    document.getElementById('down').style.display='none';
    document.getElementById('up').style.display='block';
}

function click_up(){
    document.getElementById('drop_menu').style.display='none';
    document.getElementById('down').style.display='inline-block';
    document.getElementById('up').style.display='none';
}

window.addEventListener('scroll', function(){
    var header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0)
})