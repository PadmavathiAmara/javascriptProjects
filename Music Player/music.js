const open = document.getElementById("open");
const close = document.getElementById("close");
const content = document.getElementById("content");
const cross = document.getElementById("closebutton");
console.log(open,close,content);
close.addEventListener('click',()=>{
    content.style.display='none';
})
open.addEventListener('click',()=>{
    content.style.display='flex';
})
cross.addEventListener('click',()=>{
    content.style.display='none';
})