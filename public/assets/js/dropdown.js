function dropdownFunc() {
    document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function getVideo(element) {
    const video = document.getElementById('videoPlayer');
    video.pause();
    document.getElementById('video').setAttribute('src', window.location + 'stream/' + element.text.toString());
    video.load();
    video.play();
}