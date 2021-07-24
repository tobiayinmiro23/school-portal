
// var a=function(){
//     document.querySelectorAll('li')[0].classList.add('p');
// }

// var hamburger=document.querySelectorAll('button')[1]
// hamburger.addEventListener("mouseenter",function(){
//     console.log('hi');
// })




// // var username=prompt('select a user name');
// while(username.length<4 || username.length> 23){
//     if (username.length<4){
//         alert('name too short');
//     break
//     }else if( username.length> 23){
//         alert('name too long');
//     }else{
//         alert('name looks good');
//         break
//     }
// }
// // alert('username saved');
// var password=prompt('select a password');
// // alert('password saved');
// // alert('login below');
// var input1=prompt('username');
// var input2=prompt('password');
// if(input1==username && input2==password){
//     alert('welcome ' + username);
//     alert('you have a message from ayo')
// }
// else if(input1!==username)
// {
//     alert('wrong username');
// }else{
//     alert('sorry wrong password');
// 

// code for the hamburger menu
var menu=document.querySelectorAll('.hamburger-menu')[0];
var body1=document.querySelectorAll('ul')[0];
var all=document.getElementById('main')[0];
menu.addEventListener('click',function(){
    body1.classList.toggle('menu')
});

