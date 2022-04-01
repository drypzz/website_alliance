
// tables

const consts = {
    // Tables Navbar
    'navbar':{
        'menu': document.querySelector('#mobile-menu'),
        'links': document.querySelector('.navbar-menu'),

        // active
        'ul': document.querySelector('.navbar-menu'),
        'active': document.querySelectorAll('.navbar-item a'),
    },
};

// active function

consts['navbar']['active'].forEach(isActive => {
    isActive.addEventListener('click', function(){
        consts['navbar']['ul'].querySelector('.active').classList.remove('active')
        isActive.classList.add('active')
    })
})

// click navbar

consts['navbar']['menu'].addEventListener('click',
    () => {
        consts['navbar']['menu'].classList.toggle('is-active')
        consts['navbar']['links'].classList.toggle('active')
    }
);