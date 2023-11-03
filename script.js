//cod 1
const button1 = document.getElementById('butt');
const button12 = document.getElementById('Butt');
const outputDiv1 = document.getElementById('output1');
const outputDiv2 = document.getElementById('output2');
let n 
let m = Math.floor(Math.random() * 100);
let attemps = 0
    button1.addEventListener('click', function(){
    n= parseFloat(document.getElementById('A').value)
    attemps++
    if(n==m){
        alert(`КРАСАВЧЕГ!!! ти витратив ${attemps} спроб.`)
    }else if(n < m){
    outputDiv1.innerHTML = ("Таємне число більше ніж " + n )
    outputDiv2.innerHTML = ""
    }else{
        outputDiv1.innerHTML = ""
        outputDiv2.innerHTML =("Таємне число менше ніж " + n )
    }})
    button12.addEventListener('click', function(){
        m = 0
        m = Math.floor(Math.random() * 100); 
        outputDiv1.innerHTML = ""
        outputDiv2.innerHTML = ""
        document.getElementById('A').value = "" 
        attemps = 0 
    })

// cod 2
let button2 = document.getElementById('BUtt');
let button3 = document.getElementById('bt');
const body = document.body;

button2.addEventListener('click', function(){
    alert('(づ ◕‿◕ )づ ДЯКУЮ!')
})

button3.addEventListener("mouseover", function() {
    body.addEventListener("mousemove", moveButton);
});
const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}


const btn = document.querySelector('#bt');

btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
});


btn.addEventListener('click', () => {
    alert(("ಥ﹏ಥ...хорошо"));
});



   

    