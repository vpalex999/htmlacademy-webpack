const btnHandler = () => {
  const btn = document.createElement('btn');
  btn.innerHTML = 'Нажми меня!';
  btn.style.backgroundColor = 'red';
  btn.style.padding = '10px';
  btn.style.color = 'white';

  document.body.appendChild(btn);

  const res = document.createElement('span');
  res.style.fontSize = '20px';
  res.classList.add('.counter');
  document.body.appendChild(res);

  let result = 0;

  btn.addEventListener('click', () => {
    result++;
    res.innerHTML = result;
  });
};

btnHandler();
