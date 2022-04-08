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

    'date':{
        'new': new Date(),
        'text': document.querySelector('#yearDate'),
    },
};

// team

var devs = ['Nome', 'Nome',];
var executivo = ['Nome', 'Nome',];
var adm = ['Nome', 'Nome',];
var eventos = ['Nome', 'Nome',];
var midia = ['Nome', 'Nome',];

// call function's

getDate();



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

// for
var i;
for(i = 0; i <= devs.length; i++){
    genereteInsert(devs[i], 'desenvolvedores');
};
for(i = 0; i <= executivo.length; i++){
    genereteInsert(executivo[i], 'executivo');
};
for(i = 0; i <= adm.length; i++){
    genereteInsert(adm[i], 'gestao_adm');
};
for(i = 0; i <= eventos.length; i++){
    genereteInsert(eventos[i], 'eventos');
};
for(i = 0; i <= midia.length; i++){
    genereteInsert(midia[i], 'midia');
};

// function generate

function genereteInsert(name, type){
    var name = ((name === '') ? false : name);
    var type = ((type === '') ? false : type);

    if (name && type){
        document.querySelector('#'+ type + '').insertAdjacentHTML(
            'beforeend',
            `
            <li>
                <img src='assets/gfx/profile.png' alt='' />
                <p>ALLIANCE - `+ name +`</p>
            </li>
            `
        );
    };
};



// util's

function getDate(){
    return consts['date']['text'].innerText = consts['date']['new'].getFullYear();
};