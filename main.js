'use strict';

let divBlock = document.querySelector('.ba-change-div'),
    areaBlock = document.querySelector('.ba-change-area');

    areaBlock.hidden = true;

    document.addEventListener('keydown', changeBlock);

    function changeBlock(event){
        if(event.keyCode == 69 && event.ctrlKey){ //ctrl+E

            event.preventDefault();

            areaBlock.value = divBlock.innerHTML;
            
            areaBlock.hidden = false;
            divBlock.hidden = true;
            areaBlock.focus();
        }
        if(event.keyCode == 83 && event.ctrlKey){ //ctrl+s
            event.preventDefault();
            divBlock.innerHTML = areaBlock.value;
            areaBlock.hidden = true;
            divBlock.hidden = false;

        }
        if(event.keyCode == 27){ //esc
            event.preventDefault();


            areaBlock.hidden = true;
            divBlock.hidden = false;
        }
    }