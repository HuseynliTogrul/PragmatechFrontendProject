// function createMultipleCircle(_selector,_circleCount,_radius,_backgroundColor) {
//     Verilən parametrlərə əsasən iç içə dairələr yaradan metod yazın.[Nümunə](https://i.pinimg.com/originals/20/64/c1/2064c19aa04bac67153ef8832618ccb0.gif)
//     _selector -> yaradılan dairənin html daxilində hansı elementin daxilinə əlavə ediləcəyini müəyyən edəcək.Yəni '.box' argumenti daxil edildiyi zaman yaranan dairə .box adlı elementin daxilinə əlavə ediləcək
//     _radius->yaradılacaq dairələrdən ən böyük dariənin radiusu daxil ediləcək ədəd olaraq
//     _backgroundColor->yaradılacaq dairənin arxafon rəngi daxil ediləcək string olaraq
//   }

function createMultipleCircle(_circleCount, _radius, _backgroundColor) {
  for (let i = 0; i < _circleCount; i++) {
      let daire = document.createElement('div');
      daire.style.width = `${_radius*2}px`;
      daire.style.height = `${_radius*2}px`;
      daire.style.backgroundColor = `${_backgroundColor}`;
      daire.className = 'circle';
      document.body.append(daire);
      _radius-=30;
  }
}
createMultipleCircle(3, 100, 'white');
