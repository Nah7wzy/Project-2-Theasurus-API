const search=document.querySelector('#search');
const input = document.querySelector('#inputword');
const output=document.querySelector('#output');
const trial=document.querySelector('#trial');
const try1=document.querySelector('#try1');
const try2=document.querySelector('#try2');

search.addEventListener('click',prin);

function prin(e){
    
    
    let content= input.value;
    console.log(content);
    output.innerHTML=content;
    console.log("why");
    
   
    
        
    }
    