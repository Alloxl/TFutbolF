// Tuvali seçelim
var tuval = document.getElementById("tuval");

// Tuvalin 2 boyutlu çizim kontekstini alalım
var ctx = tuval.getContext("2d");

// Oyun durumunu tutan bir değişken tanımlayalım
var oyunDurumu = "durdu";

// Puanı tutan bir değişken tanımlayalım
var puan = 0;

// Araba nesnesini tanımlayalım
var araba = {
  x: tuval.width / 2 - 25, // x koordinatı
  y: tuval.height - 100, // y koordinatı
  w: 50, // genişlik
  h: 50, // yükseklik
  hiz: 5, // hareket hızı
  renk: "red" // renk
};

// Engeller dizisini tanımlayalım
var engeller = [];

// Klavyeden basılan tuşları tutan bir nesne tanımlayalım
var keyPressed = {};

// Klavyeden bir tuşa basıldığında çalışacak fonksiyonu tanımlayalım
function keyDownHandler(event) {
  // Basılan tuşun kodunu alalım
  var key = event.keyCode;

  // Tuşun basılı olduğunu belirtelim
  keyPressed[key] = true;
}

// Klavyeden bir tuştan kalkıldığında çalışacak fonksiyonu tanımlayalım
function keyUpHandler(event) {
  // Kalkılan tuşun kodunu alalım
  var key = event.keyCode;

  // Tuşun basılı olmadığını belirtelim
  keyPressed[key] = false;
}

// Klavye olaylarını dinleyelim
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

// Oyunu başlatmak için bir fonksiyon tanımlayalım
function oyunBaslat() {
  // Oyun durumunu "başladı" olarak değiştirelim
  oyunDurumu = "başladı";

  // Puanı sıfırlayalım
  puan = 0;

  // Tuvali temizleyelim
  ctx.clearRect(0, 0, tuval.width, tuval.height);

  // Oyun döngüsünü başlatalım
  oyunDongusu();
}

// Oyun döngüsünü tanımlayalım
function oyunDongusu() {
  // Eğer oyun durumu "başladı" ise
  if (oyunDurumu == "başladı") {
    // Tuvali temizleyelim
    ctx.clearRect(0, 0, tuval.width, tuval.height);

    // Arabayı hareket ettirelim
    arabaHareket();

    // Arabayı çizelim
    arabaCiz();

    // Engelleri hareket ettirelim
    engelHareket();

    // Engelleri çizelim
    engelCiz();

    // Çarpışma kontrolü yapalım
    carpismaKontrol();

    // Puanı artıralım
    puanArtir();

    // Puanı yazdıralım
    puanYazdir();

    // Oyun döngüsünü tekrar çağıralım
    requestAnimationFrame(oyunDongusu);
  }
}

// Arabayı hareket ettirmek için bir fonksiyon tanımlayalım
function arabaHareket() {
  // Eğer sol ok tuşuna basılırsa
  
// Arabayı hareket ettirmek için bir fonksiyon tanımlayalım
function arabaHareket() {
  // Eğer sol ok tuşuna basılırsa
  if (keyPressed[37]) {
    // Arabanın x koordinatını azaltalım
    araba.x -= araba.hiz;
  }

  // Eğer sağ ok tuşuna basılırsa
  if (keyPressed[39]) {
    // Arabanın x koordinatını arttıralım
    araba.x += araba.hiz;
  }

  // Eğer araba tuvalin sol sınırından çıkarsa
  if (araba.x < 0) {
    // Arabanın x koordinatını sınır değerine eşitleyelim
    araba.x = 0;
  }

  // Eğer araba tuvalin sağ sınırından çıkarsa
  if (araba.x + araba.w > tuval.width) {
    // Arabanın x koordinatını sınır değerine eşitleyelim
    araba.x = tuval.width - araba.w;
  }
}

  // Arabayı çizmek için bir fonksiyon tanımlayalım
function arabaCiz() {
  // Arabanın rengini ayarlayalım
  ctx.fillStyle = araba.renk;

  // Arabanın dikdörtgenini çizelim
  ctx.fillRect(araba.x, araba.y, araba.w, araba.h);
}
  
  // Engelleri hareket ettirmek için bir fonksiyon tanımlayalım
function engelHareket() {
  // Engeller dizisindeki her bir engel için
  for (var i = 0; i < engeller.length; i++) {
    // Engelin y koordinatını arttıralım
    engeller[i].y += engeller[i].h;

    // Eğer engel tuvalin alt sınırından geçerse
    if (engeller[i].y > tuval.height) {
      // Engeli diziden çıkartalım
      engeller.splice(i, 1);

      // Yeni bir engel oluşturalım
      var yeniEngel = {
        x: Math.floor(Math.random() * (tuval.width - 50)), // rastgele x koordinatı
        y: -50, // y koordinatı
        w: 50, // genişlik
        h: 50, // yükseklik
        renk:
