const inputText = document.querySelector('#txt')
const button = document.querySelector('.btn-list')
const list = document.querySelector('.container ul')

button.addEventListener('click', (e) => {
  if(inputText != '') {
    e.preventDefault();
    const li = document.createElement('li')
    li.innerHTML = inputText;
    list.appendChild(li);

    const span = document.createElement('span');
    span.innerHTML = 'x';
    li.appendChild(span)
  }
  const close = document.querySelectorAll('span')
  for(let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', ()=>{
      close[i].parentElement.style.opacity = 0;
      setTimeout(()=>{
        close[i].parentElement.style.display = 'none';
        close[i].parentElement.remove();
      }, 500);
    });
  }
  inputText = '';
})
  