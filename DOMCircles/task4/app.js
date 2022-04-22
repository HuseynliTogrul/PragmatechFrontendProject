// function randomCirclePlacement() {
//      radiusu 5px olan bir dairə yaradın
//      funksiya hər dəfə icra olunanda yaradılan dairə body elementinin daxilində təsadufi bir yerdə görünməlidir
//   }

function randomCirclePlacement(_radius) {
  let circle = document.createElement('div');
  let randX = Math.random() * 1000;
  let randY = Math.random() * 1000;
  circle.style.width = `${_radius*2}px`;
  circle.style.height = `${_radius*2}px`;
  circle.style.backgroundColor = "blue";
  circle.className = 'daire';
  circle.style.top = `${randX}px`;
  circle.style.left = `${randY}px`;
  document.body.append(circle);
}
randomCirclePlacement(5)