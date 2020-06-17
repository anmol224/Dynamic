const time=document.getElementById('time');
const name=document.getElementById('name')
const greet=document.getElementById('greeting');
const focus=document.getElementById('focus');
const showampm=true;
function showtime()
{
    let today=new Date()
    let hrs=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    ampm=hrs>=12?'PM':'AM';
    hrs=hrs%12 || hrs;
    time.innerHTML=`${addzero(hrs)}<span>:</span>${addzero(min)}<span>:</span>${addzero(sec)} ${showampm?ampm:''}`
    setTimeout(showtime,1000)

}
function addzero(n)
{
    return (parseInt(n,10) < 10 ? '0' : '') + n;
}
function bgstyle()
{
    let today=new Date()
   
   
    hrs=today.getHours()
    if(hrs<12)
    {
        greet.textContent="Good Morning"
     document.body.style.backgroundImage="url(img/morning.jpg)"
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundAttachment="fixed"
     
    }
     else if(hrs>=12 && hrs<=18)
    {
        document.body.style.backgroundImage="url(img/afternoon.jpg)"
        greet.innerText="Good Afternoon"
        
        document.body.style.backgroundSize="cover";
    document.body.style.backgroundAttachment="fixed"
    }
    else
    {
        document.body.style.backgroundImage="url(img/night.jpg)"
        document.body.style.color="white"
        greet.innerText="Good Night"
        document.body.style.backgroundSize="cover";
    document.body.style.backgroundAttachment="fixed"

    }
}
function storage()
{
    if(localStorage.getItem('name')===null)
    {
        name.textContent='[Enter Name]'
    }
    else
    {
        name.textContent=localStorage.getItem('name')
    }
}

function focuson()
{
    if(localStorage.getItem('focus')===null)
    {
        focus.textContent="[Enter Focus]"
    }
    else
    {
        focus.textContent=localStorage.getItem('focus')
    }
}
function setname(e)
{
    if(e.type=='keypress')
    {
        if(e.keyCode==13)
        {
            localStorage.setItem('name',e.target.innerText)
            name.blur()
        }
    }
    else
    {
        localStorage.setItem('name',e.target.innerText)
    }

}
function setfocus(e)
{
    if(e.type=='keypress')
    {
        if(e.keyCode==13)
        {
        localStorage.setItem('focus',e.target.innerText)
            focus.blur()
        }
    }
    else
    {
        localStorage.setItem('focus',e.target.innerText)
    }


}
name.addEventListener('keypress',setname)
name.addEventListener('blur',setname)
focus.addEventListener('keypress',setfocus)
focus.addEventListener('blur',setfocus)

storage()
focuson();
showtime();
bgstyle()



