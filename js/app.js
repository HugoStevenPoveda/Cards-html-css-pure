const checkbox =document.querySelector('#checkbox');


if(window.matchMedia('(prefers-color-scheme:dark)').matches){

checkbox.setAttribute('checked',true);
console.log(window.matchMedia('(prefers-color-scheme:dark)'));
}



checkbox.addEventListener('change', function(event){
    if(this.checked){
        document.body.classList.add("is-dark-mode");
        document.body.classList.remove("is-dark-light")


    }else{
        document.body.classList.remove("is-dark-mode");
        document.body.classList.add("is-dark-light")

    }
})




    

