let punkty = 0;
let liczbaPytan = 10;
let aktualnePytanie = 0;
let pytaniaLosowe = [];

// Losuj unikalne pytania
function losujPytania() {
  pytaniaLosowe = [];
  while (pytaniaLosowe.length < liczbaPytan) {
    const losowe = Math.floor(Math.random() * pytania.length);
    if (!pytaniaLosowe.includes(losowe)) {
      pytaniaLosowe.push(losowe);
    }
  }
}

// Tasowanie odpowiedzi
function losujOdpowiedzi(odpowiedzi) {
  const odpowiedziLosowe = [...odpowiedzi];
  for (let i = odpowiedziLosowe.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [odpowiedziLosowe[i], odpowiedziLosowe[j]] = [odpowiedziLosowe[j], odpowiedziLosowe[i]];
  }
  return odpowiedziLosowe;
}

// Wyświetl pytanie
function wyswietlPytanie() {
  const pytanie = pytania[pytaniaLosowe[aktualnePytanie]];
  const numer = aktualnePytanie + 1;

  document.getElementById("numer-pytania").textContent = 'Pytanie ' + numer + ' z ' + liczbaPytan;
  document.getElementById("pytanie-tekst").textContent = pytanie.pytanie;

  const kontener = document.getElementById("odpowiedź-kontener");
  kontener.innerHTML = "";

  const odpowiedziLosowe = losujOdpowiedzi(pytanie.odpowiedzi);
  odpowiedziLosowe.forEach((odpowiedz, index) => {
    const btn = document.createElement("button");
    btn.textContent = odpowiedz;
    btn.onclick = () => sprawdzOdpowiedz(index, btn, odpowiedziLosowe);
    kontener.appendChild(btn);
  });

  document.getElementById("kolejne-pytanie-btn").classList.add("ukryte");
}

// Sprawdź odpowiedź
function sprawdzOdpowiedz(index, przycisk, odpowiedziLosowe) {
  const pytanie = pytania[pytaniaLosowe[aktualnePytanie]];
  const kontener = document.getElementById("odpowiedź-kontener");

  [...kontener.children].forEach((btn, i) => {
    btn.disabled = true;
    if (odpowiedziLosowe[i] === pytanie.odpowiedzi[pytanie.poprawna]) {
      btn.style.backgroundColor = "#2ecc71";
    } else if (odpowiedziLosowe[i] === odpowiedziLosowe[index]) {
      btn.style.backgroundColor = "#e74c3c";
    }
  });

  if (odpowiedziLosowe[index] === pytanie.odpowiedzi[pytanie.poprawna]) {
    punkty++;
    document.getElementById("wynik").textContent = punkty;
  }

  document.getElementById("kolejne-pytanie-btn").classList.remove("ukryte");
}

// Obsługa kliknięcia "następne pytanie"
document.getElementById("kolejne-pytanie-btn").onclick = () => {
  aktualnePytanie++;
  if (aktualnePytanie < pytaniaLosowe.length) {
    wyswietlPytanie();
  } else {
    pokazWynik();
  }
};

// Pokazanie wyniku końcowego
function pokazWynik() {
  document.getElementById("pytanie-sekcja").classList.add("ukryte");
  const wynikSekcja = document.getElementById("result-section");
  wynikSekcja.classList.remove("ukryte");
  wynikSekcja.classList.add("widoczna");

  const procent = (punkty / liczbaPytan) * 100;

  document.getElementById("wynik-koncowy").textContent = 
    'Twój wynik: ' + punkty + ' na ' + liczbaPytan + ' (' + procent.toFixed(1) + '%)';

  let wiadomosc;

  if (procent >= 70) {
    wiadomosc = 'Brawo, świetnie ci poszło!';
  } else if (procent >= 30) {
    wiadomosc = 'Możesz to zrobić lepiej!';
  } else {
    wiadomosc = 'Przecież ty nic nie umiesz!';
  }

  document.getElementById("wiadomosc-wyniku").textContent = wiadomosc;
}

// Reset quizu
function resetQuiz() {
  punkty = 0;
  aktualnePytanie = 0;
  losujPytania();
  document.getElementById("wynik").textContent = "0";
  document.getElementById("result-section").classList.remove("widoczna");
  document.getElementById("result-section").classList.add("ukryte");
  document.getElementById("start-sekcja").classList.remove("ukryte");
  document.getElementById("numer-pytania").classList.add("ukryte");
  document.getElementById("wynik-kontener").classList.add("ukryte");
  document.getElementById("wybor-pytan").classList.remove("ukryte");
}

// Start quizu
function rozpocznijQuiz() {
  const wybor = document.getElementById("ile-pytan").value;
  liczbaPytan = parseInt(wybor);

  losujPytania();
  document.getElementById("start-sekcja").classList.add("ukryte");
  document.getElementById("pytanie-sekcja").classList.remove("ukryte");
  document.getElementById("numer-pytania").classList.remove("ukryte");
  document.getElementById("wynik-kontener").classList.remove("ukryte");
  document.getElementById("wybor-pytan").classList.add("ukryte");

  wyswietlPytanie();
}

// Obsługa przycisków
document.getElementById("przycisk-start").onclick = rozpocznijQuiz;
document.getElementById("przycisk-reset").onclick = resetQuiz;


// Własność Kacper Jasiński 3 Ti







// gwiazdki bg

document.addEventListener("DOMContentLoaded", function() {
  const starCount = 45; // Number of stars to create
  const shootingStarInterval = 8000; // Interval between shooting stars in milliseconds

  function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    document.getElementById("stars").appendChild(star);
  }

  function createShootingStar() {
    const shootingStar = document.createElement("div");
    shootingStar.className = "shooting-star";
    shootingStar.style.top = `${Math.random() * 100}%`;
    shootingStar.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(shootingStar);
    setTimeout(() => {
      document.body.removeChild(shootingStar);
    }, 3000);
  }

  function generateStars() {
    for (let i = 0; i < starCount; i++) {
      createStar();
    }
  }

  generateStars();
  setTimeout(createShootingStar, Math.random() * shootingStarInterval); // Initial shooting star

  // Randomize shooting star interval
  function randomizeShootingStarInterval() {
    const interval = Math.random() * shootingStarInterval;
    setTimeout(function() {
      createShootingStar();
      randomizeShootingStarInterval();
    }, interval);
  }

  randomizeShootingStarInterval();
});
