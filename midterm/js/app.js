// nav

let 
header = document.querySelector('header'),
script2 = document.createElement('script');



var _nav = document. getElementsByTagName('nav')[0];



function headerNav(da) {
    _nav.innerHTML =  ' ';
    
    
    
    
     for (let p = 0; p < da.items.length; p += 1){
        _nav.innerHTML += '<ul><li><a href="'+(da.items[p].url)  + ' "> '+(da.items[p].label) + '</a></li><ul>' ; 
        
     }
  
    }
    
    



script2.setAttribute('src', 'data/nav.json');

header.appendChild(script2);



// content
let 
body = document.querySelector('body'),
script = document.createElement('script');

var _main = document.getElementsByTagName('main');
var _h1 = document.getElementsByTagName('h1')[0],
     _p = document.getElementsByTagName('p')[0],
    _h2 = document.getElementsByTagName('h2')[0],
    _blockquote = document.getElementsByTagName('blockquote')[0],
    _h3 = document.getElementsByTagName('h3')[0],
     _ul = document.getElementsByTagName('ul')[0]; 

function content(data) {
    _h1.innerHTML =data.h1 ;
     _p.innerHTML = data.p;
     _h2.innerHTML = data.h2;
     _blockquote.innerHTML = data.blockquote;
    _h3.innerHTML = data.h3;
    _ul.innerHTML =' ' ;
    
    for (let i =0; i< data.list[0].content.length; i+= 1){
        _ul.innerHTML += '<li>'+ (data.list[i].content) +'</li>';
    }
}



script.setAttribute('src', 'data/content.json');

body.appendChild(script);
    


// icons

document.getElementsByTagName("span")[0].innerHTML = '<i class="fa fa-facebook"></i>';
document.getElementsByTagName("span")[1].innerHTML = '<i class="fa fa-twitter"></i>';
document.getElementsByTagName("span")[2].innerHTML = '<i class="fa fa-instagram"></i>';
document.getElementsByTagName("span")[3].innerHTML = '<i class="fa fa-youtube"></i>';