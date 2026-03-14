# Projects Related To DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## Project 1 
``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")
buttons.forEach((button)=>{
  console.log(button);
  button.addEventListener('click',(event)=>{
  console.log(event);
  console.log(event.target);
  if(event.target.id === 'grey'){
    body.style.backgroundColor ='grey'
  }
  if(event.target.id === 'white'){
    body.style.backgroundColor ='white'
  }
  if(event.target.id === 'blue'){
    body.style.backgroundColor ='blue'
  }
  if(event.target.id === 'yellow'){
    body.style.backgroundColor ='yellow'
  }
  if(event.target.id === 'pink'){
    body.style.backgroundColor = 'pink'
  }
  })
})

```
## Project 2 
```javascript
const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
e.preventDefault()
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results') 
if(height === '' || height <0 || isNaN(height)){
  results.innerHTML = `Please Entr A Valid Height ${height}`
}else if(weight === '' || weight <0 || isNaN(weight)){
  results.innerHTML = `Please Entr A Valid Weight ${weight}`
}else{
  const bmi = (weight / (height*height/10000)).toFixed(2)
  results.innerHTML = `<span>${bmi}</span>`
}
})

```
## Project 3
```javascript
const clock = document.getElementById('clock');
setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
## Project 4
```javascript

const randomColor = ()=>{
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0;i<6;i++){
    color+=hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const colorStart = ()=>{
  if(!intervalId){
    intervalId = setInterval(bgColor,1000);
  }
function bgColor(){
  document.body.style.backgroundColor = randomColor();
}
}
const colorStop = ()=>{
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector('#start').addEventListener('click',colorStart)
document.querySelector('#stop').addEventListener('click',colorStop)

```