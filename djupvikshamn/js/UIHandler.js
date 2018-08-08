var menuButton;
var dropDownMenu;
var navBar;
var navBarOffset;

export function init () {
    menuButton = document.querySelector('#dropdown-button');
    dropDownMenu = document.querySelector('#dropdown-menu');
    navBar = document.querySelector('nav');
    navBarOffset = navBar.offsetTop; //Gets the nav bar offset

    bindUiFunctions();
}

function bindUiFunctions () {
    menuButton.addEventListener('click', function () {
        if (dropDownMenu.classList.contains("show")) {
            dropDownMenu.classList.remove('show');
        }
        else {
            dropDownMenu.classList.add('show');
        }
    })

    window.onscroll = function(){
        stickMenuToTop();
    }
}

//If scroll reaches nav bar the class sticky is added, otherwise removed
function stickMenuToTop() {
    if (window.pageYOffset >= navBarOffset) {
        navBar.classList.add("sticky");
    }
    else {
        navBar.classList.remove("sticky");
    }
}
