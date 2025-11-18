// var  h1 = document.querySelector("h1")
// h1.innerHTML="hellofrom js"
// var button = document.querySelector(button)
// main.appendChild(h1)

// var  btn = document.querySelector('button')
// btn.addEventListener('click', function(){
//     var h1 = document.createElement('div')
//     h1.innerHTML='hello from js'
//     console.log(h1);
// })
     //creat a new button and append it to 
// var btn = document.createElement('button')
//  btn.innerHTML='download'
//  var main = document.querySelector('main')
//  main.appendChild(btn)

// var btn = document.querySelector('button')
// var btn = document.querySelector('main')
// btn.addEventListener('click',function(){
//     console.log('hello');
// })

// var btn = document.querySelector('button')
// var btn = document.querySelector('main')
// btn.addEventListener('click',function(){
//     var h1=document.querySelector('h1')
//     h1.innerHTML='hey hey'

//     console.log('h1');
// })
// var btn = document.querySelector('button')
// var main = document.querySelector('main')

// btn.addEventListener('click',function(){
//     var div=document.createElement('div')
//     var x =Math.random()*100
//     var y =Math.random()*100
//     // var c1 =Math.floor(Math.random()*100)
//     // var c2 =Math.floor(Math.random()*100)
//     // var c3 =Math.floor(Math.random()*100)
//      var c1 =Math.floor(Math.random()*256)
//     var c2 =Math.floor(Math.random()*256)
//     var c3 =Math.floor(Math.random()*256)

//  div.style.height='50px'  
//  div.style.width='50px'
//  div.style.backgroundColor='blue'
//  div.style.position = 'absolute'
//  div.style.left = x+'%'
//  div.style.top= y+'%'
// main.appendChild(div)
// })

var btn = document.querySelector('button')
var main = document.querySelector('main')
var arr= ['hey i am  shiva', 'hello i am a ','good','good byae']
btn.addEventListener('click',function(){

    var h1 = document.createElement('h1')

    var x = Math.random()*90
    var y = Math.random()*90
    var rot = Math.random()*360
    var scl = Math.random()*4
    
    var  a = Math.floor(Math.random()*arr.length)
    h1.innerHTML=arr[a]
    h1.style.position= 'absolute'
    h1.style.left =x+'%'
    h1.style.top =y+'%'
    h1.style.rotate = rot + 'deg'
    h1.style.scale = scl
    main.appendChild(h1)
})