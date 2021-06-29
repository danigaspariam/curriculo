

function image(){
    const section = document.querySelector('.imagem');

    function animaScroll(){
        section.classList.add('ativo');
}

    window.addEventListener('load', animaScroll);

}

image()



function linksInt(){
    const lateral = document.querySelector('.links-uteis');

    function slideLinks(){
        lateral.classList.add('ativo');
    }

    window.addEventListener('load', slideLinks);
}

linksInt()
