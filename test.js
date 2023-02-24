document.getElementById('add-button').addEventListener('click', function(){
  const value = document.getElementById('text-input').value;
  const container = document.getElementById('parent-container');
  const li = document.createElement('li');
  li.innerText = value;
  li.classList.add('new-li');
  container.appendChild(li);
  document.getElementById('text-input').value = '';
  const allList = document.getElementsByClassName('new-li');
  for(const item of allList){
    item.addEventListener('click', function(e){
      console.log(e.target.parentNode.removeChild(e.target))
    })
  }
})

// document.getElementById('p-1').innerText = 'hello-1'
// document.getElementById('p-2').innerText = 'hello-2'
// document.getElementById('p-3').innerText = 'hello-3'
// document.getElementById('p-4').innerText = 'hello-4'

document.getElementById('hit').addEventListener('click', function(){
  // document.getElementById('p-1').innerText = 'hello-1'
  // document.getElementById('p-2').innerText = 'hello-2'
  // document.getElementById('p-3').innerText = 'hello-3'
  // document.getElementById('p-4').innerText = 'hello-4'
  setInnerText('p-1', 'Afridi Hasan');
  setInnerText('p-2', 'University Of Dhaka');
  setInnerText('p-3', 'Govt. Titumir College');
  setInnerText('p-4','Marketing Depertment');
  const inputValue = getInputValue('text-input');
  console.log(inputValue);
})

function setInnerText(id,value){
  document.getElementById(id).innerText = value;
}

function getInputValue(id){
 const value = document.getElementById(id).value;
//  console.log(value);
return value;
}