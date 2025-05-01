const pytania = [
    {
        pytanie: "Co to jest algorytm?",
        odpowiedzi: ["Zbiór instrukcji do wykonania zadania", "Rodzaj programu komputerowego", "Błąd w kodzie", "Typ zmiennej"],
        poprawna: 0
    },
    {
        pytanie: "Co to jest RAM?",
        odpowiedzi: ["Pamięć operacyjna", "Pamięć trwała", "Procesor", "Płyta główna"],
        poprawna: 0
    },
    {
        pytanie: "Co to jest IP?",
        odpowiedzi: ["Adres internetowy urządzenia", "Typ protokołu", "System operacyjny", "Rodzaj sieci komputerowej"],
        poprawna: 0
    },
    {
        pytanie: "Jakie jest rozszerzenie pliku HTML?",
        odpowiedzi: [".html", ".exe", ".css", ".js"],
        poprawna: 0
    },
    {
        pytanie: "Co to jest system operacyjny?",
        odpowiedzi: ["Program do zarządzania zasobami komputera", "Program do pisania tekstów", "Typ bazy danych", "Typ algorytmu"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest CPU?",
        odpowiedzi: ["Procesorem", "Pamięcią operacyjną", "Kartą graficzną", "Systemem operacyjnym"],
        poprawna: 0
    },
    {
        pytanie: "Co oznacza skrót URL?",
        odpowiedzi: ["Uniform Resource Locator", "Universal Reference Link", "United Remote Link", "Uniform Recursive Link"],
        poprawna: 0
    },
    {
        pytanie: "Który język służy do stylizacji stron internetowych?",
        odpowiedzi: ["CSS", "HTML", "JavaScript", "Python"],
        poprawna: 0
    },
    {
        pytanie: "Do czego służy Git?",
        odpowiedzi: ["Do kontroli wersji kodu", "Do edycji zdjęć", "Do przeglądania stron", "Do tworzenia grafiki 3D"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest plik .exe?",
        odpowiedzi: ["Plikiem wykonywalnym", "Plikiem tekstowym", "Obrazem", "Bazą danych"],
        poprawna: 0
    },
    {
        pytanie: "Jakie rozszerzenie ma plik JavaScript?",
        odpowiedzi: [".js", ".java", ".script", ".jvs"],
        poprawna: 0
    },
    {
        pytanie: "Który z poniższych to system operacyjny?",
        odpowiedzi: ["Linux", "Photoshop", "Python", "HTML"],
        poprawna: 0
    },
    {
        pytanie: "Jakie urządzenie przekształca dane cyfrowe na sygnał analogowy i odwrotnie?",
        odpowiedzi: ["Modem", "Router", "Switch", "Procesor"],
        poprawna: 0
    },
    {
        pytanie: "Który protokół używany jest do przesyłania stron WWW?",
        odpowiedzi: ["HTTP", "FTP", "SMTP", "SSH"],
        poprawna: 0
    },
    {
        pytanie: "Jak nazywa się główna strona w serwisie internetowym?",
        odpowiedzi: ["Strona główna", "Artykuł", "Footer", "Sidebar"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest phishing?",
        odpowiedzi: ["Atakiem polegającym na wyłudzaniu danych", "Oprogramowaniem antywirusowym", "Typem serwera", "Protokołem sieciowym"],
        poprawna: 0
    },
    {
        pytanie: "Które z poniższych to język programowania?",
        odpowiedzi: ["Python", "Photoshop", "Excel", "Chrome"],
        poprawna: 0
    },
    {
        pytanie: "Co oznacza skrót SSD?",
        odpowiedzi: ["Solid State Drive", "Super Speed Data", "System Storage Device", "Serial Server Drive"],
        poprawna: 0
    },
    {
        pytanie: "Co robi funkcja 'print' w Pythonie?",
        odpowiedzi: ["Wyświetla tekst na ekranie", "Usuwa plik", "Zamyka program", "Dodaje dane do bazy"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest bug w programowaniu?",
        odpowiedzi: ["Błędem w kodzie", "Nową funkcją", "Ulepszeniem", "Typem zmiennej"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest BIOS?",
        odpowiedzi: ["Podstawowym systemem wejścia-wyjścia", "Programem graficznym", "Typem pamięci RAM", "Systemem plików"],
        poprawna: 0
    },
    {
        pytanie: "Co oznacza skrót WWW?",
        odpowiedzi: ["World Wide Web", "Wide Web World", "Web Wide World", "World Web Wide"],
        poprawna: 0
    },
    {
        pytanie: "Do czego służy klucz publiczny w kryptografii?",
        odpowiedzi: ["Do szyfrowania wiadomości", "Do logowania do systemu", "Do uruchamiania komputera", "Do formatowania dysku"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest SQL?",
        odpowiedzi: ["Językiem zapytań do baz danych", "Rodzajem dysku twardego", "Programem do grafiki", "Protokołem sieciowym"],
        poprawna: 0
    },
    {
        pytanie: "Jakie jest rozszerzenie pliku z arkuszem kalkulacyjnym Excela?",
        odpowiedzi: [".xlsx", ".docx", ".pptx", ".txt"],
        poprawna: 0
    },
    {
        pytanie: "Co to jest router?",
        odpowiedzi: ["Urządzenie kierujące ruchem w sieci", "Program antywirusowy", "Typ kabla", "Część monitora"],
        poprawna: 0
    },
    {
        pytanie: "Do czego służy przeglądarka internetowa?",
        odpowiedzi: ["Do wyświetlania stron WWW", "Do pisania kodu", "Do tworzenia grafiki", "Do odtwarzania muzyki"],
        poprawna: 0
    },
    {
        pytanie: "Który z poniższych to przeglądarka internetowa?",
        odpowiedzi: ["Google Chrome", "Windows", "Facebook", "Spotify"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest firewall?",
        odpowiedzi: ["Zaporą sieciową chroniącą przed atakami", "Programem graficznym", "Typem kabla", "Dyskiem zewnętrznym"],
        poprawna: 0
    },
    {
        pytanie: "Jakie rozszerzenie ma plik tekstowy?",
        odpowiedzi: [".txt", ".jpg", ".exe", ".bat"],
        poprawna: 0
    },
    {
        pytanie: "Czym zajmuje się frontend developer?",
        odpowiedzi: ["Tworzy interfejsy użytkownika", "Konfiguruje serwery", "Zarządza bazami danych", "Tworzy sterowniki"],
        poprawna: 0
    },
    {
        pytanie: "Co oznacza skrót HTTP?",
        odpowiedzi: ["HyperText Transfer Protocol", "Hyperlink Text Protocol", "Host Transfer Text Protocol", "Home Transfer Text Page"],
        poprawna: 0
    },
    {
        pytanie: "Jakiego języka używa się głównie po stronie serwera?",
        odpowiedzi: ["PHP", "CSS", "HTML", "Photoshop"],
        poprawna: 0
    },
    {
        pytanie: "Jakiego skrótu używa się do zapisu adresów IP w wersji 6?",
        odpowiedzi: ["IPv6", "IP6v", "IP-Next", "IPvX"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest open source?",
        odpowiedzi: ["Oprogramowaniem z otwartym kodem źródłowym", "Płatnym programem", "Zamkniętym systemem", "Rodzajem komputera"],
        poprawna: 0
    },
    {
        pytanie: "Która jednostka mierzy prędkość procesora?",
        odpowiedzi: ["GHz", "GB", "MB", "ms"],
        poprawna: 0
    },
    {
        pytanie: "Który z tych języków jest kompilowany?",
        odpowiedzi: ["C++", "HTML", "JavaScript", "CSS"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest pętla w programowaniu?",
        odpowiedzi: ["Instrukcją wykonującą coś wielokrotnie", "Błędem", "Nowym językiem", "Rodzajem zmiennej"],
        poprawna: 0
    },
    {
        pytanie: "Jakiego systemu używa większość serwerów?",
        odpowiedzi: ["Linux", "Windows 10", "Android", "macOS"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest IDE?",
        odpowiedzi: ["Zintegrowanym środowiskiem programistycznym", "Typem pliku", "Rodzajem wirusa", "Sterownikiem drukarki"],
        poprawna: 0
    },
    {
        pytanie: "Który format pliku służy do przechowywania obrazów?",
        odpowiedzi: [".jpg", ".txt", ".exe", ".sql"],
        poprawna: 0
    },
    {
        pytanie: "Jakie urządzenie wskazujące służy do sterowania kursorem?",
        odpowiedzi: ["Mysz", "Klawiatura", "Monitor", "Głośnik"],
        poprawna: 0
    },
    {
        pytanie: "Jak nazywa się kod zamieniany na język maszynowy?",
        odpowiedzi: ["Kod źródłowy", "Kod błędu", "Kod pocztowy", "Kod kolorów"],
        poprawna: 0
    },
    {
        pytanie: "Jak nazywa się główna pamięć komputera?",
        odpowiedzi: ["RAM", "ROM", "CPU", "GPU"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest debugowanie?",
        odpowiedzi: ["Procesem usuwania błędów z programu", "Tworzeniem grafiki", "Aktualizacją systemu", "Instalacją systemu"],
        poprawna: 0
    },
    {
        pytanie: "Który z tych formatów służy do przechowywania danych audio?",
        odpowiedzi: [".mp3", ".jpg", ".doc", ".exe"],
        poprawna: 0
    },
    {
        pytanie: "Do czego służy język SQL?",
        odpowiedzi: ["Do zarządzania bazami danych", "Do edycji grafiki", "Do tworzenia animacji", "Do szyfrowania"],
    poprawna: 0
    },
    {
        pytanie: "Czym jest aplikacja webowa?",
        odpowiedzi: ["Aplikacją działającą przez przeglądarkę", "Programem instalowanym na komputerze", "Grą offline", "Oprogramowaniem systemowym"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest chmura (cloud computing)?",
        odpowiedzi: ["Zdalnym przechowywaniem danych i usług", "Nowym rodzajem komputera", "Systemem operacyjnym", "Programem antywirusowym"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest malware?",
        odpowiedzi: ["Złośliwym oprogramowaniem", "Sterownikiem", "Rodzajem języka", "Formatem pliku"],
        poprawna: 0
    },
//###################################################################################
//###################################################################################
//##                                                                               ##
//##                                                                               ##
//##    ________   ______     __    __   ______        __      _    _____          ##
//##    (___  ___) (   __ \    ) )  ( (  (_  __ \      /  \    / )  / ___/         ##
//##        ) )     ) (__) )  ( (    ) )   ) ) \ \    / /\ \  / /  ( (__           ##
//##       ( (     (    __/    ) )  ( (   ( (   ) )   ) ) ) ) ) )   ) __)          ##
//##        ) )     ) \ \  _  ( (    ) )   ) )  ) )  ( ( ( ( ( (   ( (             ##
//##       ( (     ( ( \ \_))  ) \__/ (   / /__/ /   / /  \ \/ /    \ \___         ##
//##       /__\     )_) \__/   \______/  (______/   (_/    \__/      \____\        ##
//##                                                                               ##
//##                                                                               ##
//##                                                                               ##
//###################################################################################
//###################################################################################                                                                                                                             
    {
        pytanie: "Czym różni się TCP od UDP w praktycznym zastosowaniu?",
        odpowiedzi: ["TCP zapewnia niezawodność, UDP jest szybszy, ale bez gwarancji dostarczenia", "UDP jest bezpieczniejszy od TCP", "TCP nie używa portów", "UDP zawsze szyfruje dane"],
        poprawna: 0
    },
    {
        pytanie: "Co to jest 'race condition' w programowaniu współbieżnym?",
        odpowiedzi: ["Błąd wynikający z nieprzewidywalnej kolejności wykonania wątków", "Sytuacja, gdy proces nie kończy się", "Specjalna optymalizacja kodu", "Zabezpieczenie przed deadlockiem"],
        poprawna: 0
    },
    {
        pytanie: "Który algorytm ma najlepszą średnią złożoność czasową w sortowaniu?",
        odpowiedzi: ["Merge sort", "Bubble sort", "Insertion sort", "Selection sort"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest 'memoizacja' w kontekście funkcji rekurencyjnych?",
        odpowiedzi: ["Techniką zapamiętywania wyników funkcji, by nie liczyć ich ponownie", "Rodzajem optymalizacji pamięci RAM", "Systemem wersjonowania funkcji", "Sposobem na sortowanie danych"],
        poprawna: 0
    },
    {
        pytanie: "Co robi 'fork()' w systemie Unix/Linux?",
        odpowiedzi: ["Tworzy nowy proces będący kopią bieżącego", "Tworzy nowy wątek", "Zamyka bieżący proces", "Zamyka deskryptor pliku"],
        poprawna: 0
    },
    {
        pytanie: "Jakie jest domyślne TTL (Time To Live) dla pakietów IP?",
        odpowiedzi: ["64", "128", "255", "32"],
        poprawna: 0
    },
    {
        pytanie: "Czym różni się kodowanie Base64 od haszowania SHA-256?",
        odpowiedzi: ["Base64 to kodowanie, a SHA-256 to haszowanie – Base64 można odkodować, SHA-256 nie", "SHA-256 to metoda szyfrowania, Base64 to haszowanie", "Base64 jest szybsze i bezpieczniejsze niż SHA-256", "SHA-256 kompresuje dane, Base64 nie"],
        poprawna: 0
    },
    {
        pytanie: "Co to jest 'lazy loading' w programowaniu webowym?",
        odpowiedzi: ["Technika ładowania zasobów dopiero wtedy, gdy są potrzebne", "Sposób pisania mniej kodu", "Rodzaj CSS", "Rodzaj bazy danych"],
        poprawna: 0
    },
    {
        pytanie: "W języku C++, czym jest 'RAII'?",
        odpowiedzi: ["Techniką zarządzania zasobami za pomocą obiektów", "Rodzajem wyjątku", "Biblioteką do grafiki", "Standardem szyfrowania"],
        poprawna: 0
    },
    {
        pytanie: "Jaka jest różnica między 'stack' a 'heap' w zarządzaniu pamięcią?",
        odpowiedzi: ["Stack jest szybki i automatyczny, heap wymaga ręcznego zarządzania", "Heap jest używany tylko w Pythonie", "Stack to pamięć stała, heap to tymczasowa", "Heap nie używa wskaźników"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest XSS (Cross-site scripting)?",
        odpowiedzi: ["Wstrzyknięciem złośliwego kodu JS do strony", "Rodzajem szyfrowania SSL", "Metodą brute-force", "Oprogramowaniem do backupu"],
        poprawna: 0
    },
    {
        pytanie: "Która z poniższych struktur danych jest najlepsza do implementacji kolejki priorytetowej?",
        odpowiedzi: ["Kopiec binarny (heap)", "Stos", "Lista dwukierunkowa", "Tablica dynamiczna"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest LRU cache?",
        odpowiedzi: ["Mechanizmem usuwającym najmniej używane dane z pamięci", "Typem systemu plików", "Metodą szyfrowania", "Zamiennikiem CPU"],
        poprawna: 0
    },
    {
        pytanie: "Jak działa protokół OAuth 2.0?",
        odpowiedzi: ["Pozwala na autoryzację bez udostępniania hasła aplikacjom trzecim", "Służy do szyfrowania połączeń", "Umożliwia dostęp offline do serwera", "Pozwala zapisywać hasła lokalnie"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest system plików ZFS?",
        odpowiedzi: ["Zaawansowanym systemem plików z obsługą snapshotów i integralności danych", "Formatem zapisu obrazów", "Protokółem komunikacyjnym", "Rodzajem szyfrowania"],
        poprawna: 0
    },
    {
        pytanie: "Który algorytm znajdowania najkrótszej ścieżki działa na grafie z wagami ujemnymi?",
        odpowiedzi: ["Bellman-Ford", "Dijkstra", "A*", "Kruskal"],
        poprawna: 0
    },
    {
        pytanie: "Do czego służy wskaźnik 'void*' w języku C?",
        odpowiedzi: ["Do przechowywania adresu dowolnego typu danych", "Do wskazywania na NULL", "Jest to specjalny typ zmiennej globalnej", "Nie istnieje taki wskaźnik w C"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest atak typu 'man-in-the-middle'?",
        odpowiedzi: ["Podsłuchiwaniem i modyfikacją danych przesyłanych między dwiema stronami", "Zainfekowaniem systemu trojanem", "Użyciem złośliwego makra", "Włamaniem do BIOSu"],
        poprawna: 0
    },
    {
        pytanie: "Czym różni się Docker od maszyny wirtualnej?",
        odpowiedzi: ["Docker działa na poziomie systemu operacyjnego, VM emuluje cały sprzęt", "Docker wymaga więcej zasobów", "Docker nie obsługuje systemu plików", "VM działa tylko na Linuksie"],
        poprawna: 0
    },
    {
        pytanie: "Czym jest wskaźnik typu 'smart pointer' w C++?",
        odpowiedzi: ["Wskaźnikiem zarządzającym pamięcią automatycznie", "Rodzajem iteratora", "Typem zmiennej globalnej", "Stałym wskaźnikiem do funkcji"],
        poprawna: 0
    }
]
