function createCircle(_selector, _radius, _backgroundColor) {
    // Verilən parametrlərə əsasən dairə yaradan metod yazın
    // _selector -> yaradılan dairənin html daxilində hansı elementin daxilinə əlavə ediləcəyini müəyyən edəcək.Yəni '.box' argumenti daxil edildiyi zaman yaranan dairə .box adlı elementin daxilinə əlavə ediləcək
    // _radius->yaradılacaq dairənin radiusu daxil ediləcək ədəd olaraq
    // _backgroundColor->yaradılacaq dairənin arxafon rəngi daxil ediləcək string olaraq

    let div = document.createElement('div');
    div.style.width = `${_radius}px`;
    div.style.height = `${_radius}px`;
    div.style.borderRadius = '50%';
    div.style.border = "1p solid black";
    div.style.background = _backgroundColor;
    let container = document.querySelector(selector)
  }

