let column = document.querySelectorAll('.column img');
let show = document.querySelector('.contentShow')
console.log(column)
let changeimage = document.querySelector('#changeimage')
console.log(changeimage)
let text = document.querySelector('.text');
console.log(text)
for(let i = 0; i < column.length; i++){
    column[i].addEventListener('click', function(){
        changeimage.src = this.src;
        text.innerHTML = this.alt;
        console.log(i)
        
        show.style.display = "block"
        let current = document.querySelector('.active');
        current.classList.remove('active')
        this.classList.add('active')
    })
        
    }


    let button = document.querySelector('.button');
    button.addEventListener('click', function(){
        show.style.display = "none"
    })