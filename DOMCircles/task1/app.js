// function createCircle(_selector, _radius, _backgroundColor) {
//     Verilən parametrlərə əsasən dairə yaradan metod yazın
//     _selector -> yaradılan dairənin html daxilində hansı elementin daxilinə əlavə ediləcəyini müəyyən edəcək.Yəni '.box' argumenti daxil edildiyi zaman yaranan dairə .box adlı elementin daxilinə əlavə ediləcək
//     _radius->yaradılacaq dairənin radiusu daxil ediləcək ədəd olaraq
//     _backgroundColor->yaradılacaq dairənin arxafon rəngi daxil ediləcək string olaraq
//   }

function createCircle(_selector, _radius, _backgroundColor) {
  let circle = document.createElement('div');
  circle.style.width = `${_radius*2}px`;
  circle.style.height = `${_radius*2}px`;
  circle.style.backgroundColor = `${_backgroundColor}`;
  circle.className = 'daire';
  document.body.append(circle)
  document.querySelector(`${_selector}`).appendChild(circle);

}
createCircle('container',100, 'lightblue');