// Lista pytań

  
  let punkty = 0;
  let aktualnePytanie = 0;
  let pytaniaLosowe = [];
  
  // Losuj 10 różnych pytań
  function losujPytania() {
    pytaniaLosowe = [];
    while (pytaniaLosowe.length < 10) {
      const losowe = Math.floor(Math.random() * pytania.length);
      if (!pytaniaLosowe.includes(losowe)) {
        pytaniaLosowe.push(losowe);
      }
    }
  }
  
  // Losowanie odpowiedzi
  function losujOdpowiedzi(odpowiedzi) {
    const odpowiedziLosowe = [...odpowiedzi];
    for (let i = odpowiedziLosowe.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [odpowiedziLosowe[i], odpowiedziLosowe[j]] = [odpowiedziLosowe[j], odpowiedziLosowe[i]]; // Zamiana miejscami
    }
    return odpowiedziLosowe;
  }
  
  function wyswietlPytanie() {
    const pytanie = pytania[pytaniaLosowe[aktualnePytanie]];
    const numer = aktualnePytanie + 1;
    document.getElementById("numer-pytania").textContent = `Pytanie ${numer} z 10`;
    document.getElementById("pytanie-tekst").textContent = pytanie.pytanie;
  
    const kontener = document.getElementById("odpowiedź-kontener");
    kontener.innerHTML = "";
  
    // Losujemy odpowiedzi
    const odpowiedziLosowe = losujOdpowiedzi(pytanie.odpowiedzi);
    
    odpowiedziLosowe.forEach((odpowiedz, index) => {
      const btn = document.createElement("button");
      btn.textContent = odpowiedz;
      btn.onclick = () => sprawdzOdpowiedz(index, btn, odpowiedziLosowe);
      kontener.appendChild(btn);
    });
  
    document.getElementById("kolejne-pytanie-btn").classList.add("ukryte");
  }
  
  // Modyfikacja sprawdzOdpowiedz, żeby obsługiwała losową kolejność odpowiedzi
  function sprawdzOdpowiedz(index, przycisk, odpowiedziLosowe) {
    const pytanie = pytania[pytaniaLosowe[aktualnePytanie]];
    const kontener = document.getElementById("odpowiedź-kontener");
  
    // Zablokowanie wszystkich przycisków odpowiedzi
    [...kontener.children].forEach((btn, i) => {
      btn.disabled = true;
      if (odpowiedziLosowe[i] === pytanie.odpowiedzi[pytanie.poprawna]) {
        btn.style.backgroundColor = "#2ecc71"; 
      } else if (odpowiedziLosowe[i] === odpowiedziLosowe[index]) {
        btn.style.backgroundColor = "#e74c3c"; 
      }
    });
  
    // Jeśli odpowiedź jest poprawna, zwiększamy punkty
    if (odpowiedziLosowe[index] === pytanie.odpowiedzi[pytanie.poprawna]) {
      punkty++;
      document.getElementById("wynik").textContent = punkty;
    }
  
    // Pokaż przycisk "Następne pytanie"
    document.getElementById("kolejne-pytanie-btn").classList.remove("ukryte");
  }
  
  // Przycisk następnego pytania
  document.getElementById("kolejne-pytanie-btn").onclick = () => {
    aktualnePytanie++;
    if (aktualnePytanie < pytaniaLosowe.length) {
      wyswietlPytanie();
    } else {
      pokazWynik();
    }
  };
  
  function pokazWynik() {
    document.getElementById("pytanie-sekcja").classList.add("ukryte");
    const wynikSekcja = document.getElementById("result-section");
    wynikSekcja.classList.remove("ukryte");
    wynikSekcja.classList.add("widoczna");
  
    document.getElementById("wynik-koncowy").textContent = `Twój wynik: ${punkty} na 10`;
    document.getElementById("wiadomosc-wyniku").textContent = punkty >= 7
      ? "Brawo, świetnie ci poszło!"
      : "Możesz to zrobić lepiej!";
  }
  
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
  }
  
  function rozpocznijQuiz() {
    losujPytania();
    document.getElementById("start-sekcja").classList.add("ukryte");
    document.getElementById("pytanie-sekcja").classList.remove("ukryte");
    document.getElementById("numer-pytania").classList.remove("ukryte");
    document.getElementById("wynik-kontener").classList.remove("ukryte");
    wyswietlPytanie();
  }
  
  // Przypięcie przycisków
  document.getElementById("przycisk-start").onclick = rozpocznijQuiz;
  document.getElementById("przycisk-reset").onclick = resetQuiz;
  
  window.addEventListener("load", () => {
    const ekran = document.getElementById("loading-screen");
    if (ekran) {
      ekran.style.display = "none";
    }
  });
  