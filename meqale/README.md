---HackerRank hesabım: https://www.hackerrank.com/huseynlitogrul21


---Funksiyalar Necə işləyirlər ?
Funksiyalar müxtəlif dəyişənlərdən istifadə edərək və ya bir araya gətirərək bu dəyişənlərdən tələbə uyğun nəticə qaytaran bir qrupdur. Hər bir funksiyanın bir adı və funksiyaya ötürülən dəyərləri göstərən parametri(leri,) olur. Lakin hər funksiyanın parametrinin olması zəruri deyil. Parametrsiz funksiyalar adından da göründüyü kimi parametr qəbul etmirər. Onların daxilində əməliyyat apardıqdan çağıra bilərik. Funksiyalar işləyərkən bir neçə dəyərlərdən istifadə edirlər. bu dəyərlər emal edilərək bir nəticəyə gəlir. Buradan görünür ki bir funksiya ancaq bir nəticə emal edə bilər.

---Niye Mehz Funksiya?
Funksiyada müxtəlif arqumentlərdən istifadə edərək fərqli zamanlarda fərqli nəticə almaq olar

---Funksiyanın Ümumi Yazılışı
function Foo(parametr){
// Proseslərin getdiyi yer
}

---Funksiyanın Ümumi Çağırılışı
Yuxarıda yazılan funksiyanı çağırmaq üçün:
Foo(parametr) sintaksisindən istifadə olunur.

---Funksiyalar Nə zaman Çağırılır
Funksiyalar istifadəçi bir düyməyə basdığında,
Və ya birbaşa çağırılan,
Bir də avtomatik yəni özü özunə çağrılan funksiyalar olurlar.

---Parametr Və Arqument Anlayışı
Funksiyanı yazarkən ötürdüyümüz dəyərlərə Parametr, Funksiyanı çağırarkən ötürdüyümüz dəyərə isə Arqument deyilir.

// Funksiya bildirir

function Topla(x, y) // Burada x və y parametr
{
return (x + y);
}

//Funksiya çağırılır

Topla(7, 3);

---Funksiyada Return Anlayışı
Funksiyada return açar sözünün 2 vacib mənası və işi vardır:
Funksiyanın dəyərini geri qaytarır.
Funksiyanın sona çatdığını bildirir.
function foo(x,y) {
return (x+y)
}

---Funksiyaların növləri
• Function declaration.
• Function expression.
• Shorthand method definition.
• Arrow function.
• Generator function.