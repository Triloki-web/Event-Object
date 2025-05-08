const insert = document.getElementById('insert');
// console.log(insert);

window.addEventListener('keydown', (event) => {
  // key = enter key
  // kecode = key ka code
  // code = key ka code example (enter a than KeyA)


  // console.log(event.key);
  // console.log(event.keyCode);
  // console.log(event.code);

  insert.innerHTML = `
  <div class="key">
    ${event.key === " " ? "Space" : event.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${event.keyCode}
     <small>event.keyCode</small>
  </div>
  <div class="key">
    ${event.code}
     <small>event.code</small>
  </div>
  `
});
