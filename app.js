const backgrounColor = document.querySelector('.btn');
const body = document.body;
const hex_value =document.getElementById('hex_value');
const colorCode =['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9];



backgrounColor.addEventListener('click',(e)=>{
    e.preventDefault();
   
   let hash = '#'
   for(let i =0; i<6;i++){
    let index = Math.floor(Math.random()*colorCode.length);
       hash = hash +colorCode[index];

   }
 body.style.backgroundColor = hash;
 body.style.transition ='.5s';
 hex_value.innerHTML = hash;
   
})