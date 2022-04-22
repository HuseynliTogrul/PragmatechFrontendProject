// function createMultipleCircleCreative(
//     _selector,
//     _circleCount,
//     _radius,
//     _backgroundColor
//   ) {
//    [Tapşırıq 02](#tapşırıq-02)-də verilən detallar eyni ilə tətbiq olunacaq.Bu tapşırıqda yaradacağınız dairələrin görüntüsü [Link](https://www.presentation-process.com/wp-content/uploads/editable-circles-graphic.jpg)-dəki kimi olmalıdır
//   }


function createMultipleCircle(_selector, _circleCount, _radius, _backgroundColor ){
  for(let i = 0 ;i < _radius/2; i+= _radius/2/(_circleCount+1)){
          let container =document.querySelector(`${_selector}`)
          container.style.backgroundColor = _backgroundColor;
          container.style.alignItems = "flex-end";
          let circle =document.createElement('div');
          circle.style.width = `${i}px`;
          circle.style.height =`${i}px`;
          circle.style.position='absolute';
          circle.style.borderRadius='50%';
          circle.style.border ='1px solid black';
          container.appendChild(circle);
     }
  }
  createMultipleCircle('.container',5,400,'lightblue')
  