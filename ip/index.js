//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
// 1.adım

//const axios1 = () => {
//axios
// .get("https://apis.ergineer.com/ipgeoapi/88.230.20.21")
//.then((response) => {
//let data = response.data;
//cardOlustur(data);
//})
//.catch((error) => {
// console.error("Oops Hata Aldınız", error);
// });
//};
//axios1();
//3.adım

const bayrakOlustur = (bayrak) => {
  const div1 = document.createElement("div");
  div1.classList.add("card");

  const img = document.createElement("img");
  img.src = bayrak.data["ülkebayrağı"];
  div1.appendChild(img);

  const cardInfo1 = document.createElement("div");
  cardInfo1.classList.add("card-info");

  const h3baslik = document.createElement("p");
  h3baslik.classList.add("ip");
  h3baslik.textContent = bayrak.data.sorgu;
  cardInfo1.appendChild(h3baslik);

  const ulkeler = document.createElement("p");
  ulkeler.classList.add("ulke");
  ulkeler.textContent = `${bayrak.data.ülke} (${bayrak.data.ülkeKodu})`;
  cardInfo1.appendChild(ulkeler);

  const enlemBoylam = document.createElement("p");
  enlemBoylam.textContent = `Enlem: ${bayrak.data.enlem} Boylam: ${bayrak.data.boylam}`;
  cardInfo1.appendChild(enlemBoylam);

  const sehirler = document.createElement("p");
  sehirler.textContent = `Şehir: ${bayrak.data.bölgeAdı}`;
  cardInfo1.appendChild(sehirler);

  const saatDilimi = document.createElement("p");
  saatDilimi.textContent = `Saat Dilimi: ${bayrak.data.saatDilimi}`;
  cardInfo1.appendChild(saatDilimi);

  const paraBirimi = document.createElement("p");
  paraBirimi.textContent = `Para Birimi: ${bayrak.data.paraBirimi}`;
  cardInfo1.appendChild(paraBirimi);

  const isp1 = document.createElement("p");
  isp1.textContent = `ISP: ${bayrak.data.isp1}`;
  cardInfo1.appendChild(isp1);

  div1.appendChild(cardInfo1);
  return div1;
};
bayrakOlustur();
// 4.adım
const div2 = document.querySelector("div.cards");

// 5.adım

const axios2 = async () => {
  await ipAdresimiAl();
  axios
    .get("https://apis.ergineer.com/ipgeoapi/" + benimIP)
    .then((resp) => {
      return resp;
    })
    .then((veriler) => {
      div2.appendChild(bayrakOlustur(veriler));
    })
    .catch((error) => {
      console.error("Oops Hata Aldınız", error);
    });
};
axios2();
