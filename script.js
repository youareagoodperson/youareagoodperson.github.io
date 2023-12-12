let newWindow = open('/', 'You are An Idiot !', 'width=300,height=300')
newWindow.focus();

alert(newWindow.location.href); // (*) about:blank, loading hasn't started yet

newWindow.onload = function() {
  let html = `<div style="font-size:30px">You are an Idiot !</div>`;
  newWindow.document.body.insertAdjacentHTML('afterbegin', html);
};
