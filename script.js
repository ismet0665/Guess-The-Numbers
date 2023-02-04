let heart = 5;
let random = 0;
let sayi = document.getElementById("sayi");
let sonuc = document.getElementById("sonuc");
let reset = document.querySelector("reset");
sayi.focus();

function guess() {
  let number = sayi.value;
  if (heart == 5) {
    random = Math.floor(Math.random() * 100 + 1);
  }
  if (number === random) {
    sonuc.innerText = "👏 Tebrikler Doğru Bildiniz. 👏";
    reset.innerText = "Play Again";
  } else {
    let hak = document.querySelectorAll(".hak i")[heart - 1];
    hak.classList.remove("heartRed");
    hak.classList.add("heartBlack");
    heart--;
    if (heart > 0) {
      if (number > random) {
        sonuc.innerText = "❌ Yalnış Tahmin. Sayınızı Azaltınız ❌";
      }
      if (number < random) {
        sonuc.innerText = "❌ Yalnış Tahmin. Sayınızı Artırınız ❌";
      }
    } else {
      sonuc.innerText = `❌ Yalnış Tahmin. Dogru Cevap: ${random} ❌`;
    }
  }
}
function again() {
  heart = 5;
  //   guess();
  // kalpleri tekrar kırmızı hale getiriyoruz
  for (let i = 0; i < 5; i++) {
    let hak = document.querySelectorAll(".hak i")[i];
    hak.classList.remove("heartBlack");
    hak.classList.add("heartRed");
  }
  sonuc.innerText = ""; //tekrar oynarken sonuc yazısı silinir.
}
