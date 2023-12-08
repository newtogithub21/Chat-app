var sent1=document.getElementById('sent1')
var sent2=document.getElementById('sent2')
var inp1=document.getElementById('inp11')
var inp2=document.getElementById('inp12')
var chat1=document.getElementById('chatArea1')
var chat2=document.getElementById('chatArea2')
sent1.addEventListener('click',()=>{
    var k=inp1.value;
    console.log(k)
    var p1=document.createElement('p')
    var p2=document.createElement('p')
    p1.innerHTML=k;
    p2.innerHTML=k;
    p1.style.textAlign='right'
    p1.style.marginRight='10px'
    p1.style.marginLeft='100px'
    p2.style.textAlign='left'
    p2.style.marginRight='100px'
    p1.style.color='white'
    p2.style.color='white'
    chat1.appendChild(p1)
    chat2.appendChild(p2)
    inp1.value=""
})
sent2.addEventListener('click',()=>{
    var k=inp2.value;
    console.log(k)
    var p1=document.createElement('p')
    var p2=document.createElement('p')
    p1.innerHTML=k;
    p2.innerHTML=k;
    p2.style.textAlign='right'
    p2.style.marginRight='10px'
    p2.style.marginLeft='100px'
    p1.style.textAlign='left'
    p1.style.marginRight='100px'
    p1.style.color='white'
    p2.style.color='white'
    chat1.appendChild(p1)
    chat2.appendChild(p2)
    inp2.value=""
})

