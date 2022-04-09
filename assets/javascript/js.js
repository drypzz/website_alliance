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

const team = [
    {id: 1, name: 'Ronald', role: 'CEO', type: 'executivo'},
    {id: 2, name: 'Jean M.', role: 'Presidente', type: 'executivo'},
    {id: 3, name: '_Thyagoof', role: 'Vice-Presidente', type: 'executivo'},

    {id: 4, name: 'PlagaBR', role: 'Gerente da Gestão Administrativa de Pessoal', type: 'gestao_adm'},
    {id: 5, name: 'XxmarcospauloxX', role: 'Assistente da Gestão Administrativa de Pessoal', type: 'gestao_adm'},
    {id: 6, name: 'rena119', role: 'Recrutador da Gestão Administrativa de Pessoal', type: 'gestao_adm'},

    {id: 7, name: 'Gamezito', role: 'Assistente de Eventos', type: 'eventos'},
    {id: 8, name: 'Nascimento', role: 'Assistente de Eventos', type: 'eventos'},

    {id: 9, name: 'FerrasZ', role: 'Gerente de Mídia', type: 'midia'},
    {id: 10, name: 'Ryan Gabriel', role: 'Assistente de Mídia', type: 'midia'},

    {id: 11, name: 'Rubens', role: 'Gerente de Desenvolvimento', type: 'desenvolvedores'},
    {id: 12, name: 'PotatoMexicano', role: 'Assistente de Desenvolvimento', type: 'desenvolvedores'},
    {id: 13, name: 'MrX-', role: 'Assistente de Desenvolvimento', type: 'desenvolvedores'},
];

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
for(i = 0; i <= team.length; i++){
    genereteInsert(team[i].name, team[i].role, team[i].type);
};

// function generate

function genereteInsert(name, role, type){
    var name = ((name === '') ? false : name);
    var role = ((role === '') ? false : role);
    var type = ((type === '') ? false : type);

    if (name && type){
        document.querySelector('#'+ type + '').insertAdjacentHTML(
            'beforeend',
            `
            <li>
                <img src='assets/gfx/profile.png' alt='' />
                <p>ALLIANCE - `+ name +`</p>
                <p><b>`+ role +`</b></p>
            </li>
            `
        );
    };
};



// util's

function getDate(){
    return consts['date']['text'].innerText = consts['date']['new'].getFullYear();
};