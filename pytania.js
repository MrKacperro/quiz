const pytania = [
// pytanie nr. 1
{
    pytanie: "Co to jest algorytm?",
    odpowiedzi: ["Zbiór instrukcji do wykonania zadania", "Rodzaj programu komputerowego", "Błąd w kodzie", "Typ zmiennej"],
    poprawna: 0
},
// pytanie nr. 2
{
    pytanie: "Co to jest RAM?",
    odpowiedzi: ["Pamięć operacyjna", "Pamięć trwała", "Procesor", "Płyta główna"],
    poprawna: 0
},
// pytanie nr. 3
{
    pytanie: "Co to jest IP?",
    odpowiedzi: ["Adres internetowy urządzenia", "Typ protokołu", "System operacyjny", "Rodzaj sieci komputerowej"],
    poprawna: 0
},
// pytanie nr. 4
{
    pytanie: "Jakie jest rozszerzenie pliku HTML?",
    odpowiedzi: [".html", ".exe", ".css", ".js"],
    poprawna: 0
},
// pytanie nr. 5
{
    pytanie: "Co to jest system operacyjny?",
    odpowiedzi: ["Program do zarządzania zasobami komputera", "Program do pisania tekstów", "Typ bazy danych", "Typ algorytmu"],
    poprawna: 0
},
// pytanie nr. 6
{
    pytanie: "Czym jest CPU?",
    odpowiedzi: ["Procesorem", "Pamięcią operacyjną", "Kartą graficzną", "Systemem operacyjnym"],
    poprawna: 0
},
// pytanie nr. 7
{
    pytanie: "Co oznacza skrót URL?",
    odpowiedzi: ["Uniform Resource Locator", "Universal Reference Link", "United Remote Link", "Uniform Recursive Link"],
    poprawna: 0
},
// pytanie nr. 8
{
    pytanie: "Który język służy do stylizacji stron internetowych?",
    odpowiedzi: ["CSS", "HTML", "JavaScript", "Python"],
    poprawna: 0
},
// pytanie nr. 9
{
    pytanie: "Do czego służy Git?",
    odpowiedzi: ["Do kontroli wersji kodu", "Do edycji zdjęć", "Do przeglądania stron", "Do tworzenia grafiki 3D"],
    poprawna: 0
},
// pytanie nr. 10
{
    pytanie: "Czym jest plik .exe?",
    odpowiedzi: ["Plikiem wykonywalnym", "Plikiem tekstowym", "Obrazem", "Bazą danych"],
    poprawna: 0
},
// pytanie nr. 11
{
    pytanie: "Jakie rozszerzenie ma plik JavaScript?",
    odpowiedzi: [".js", ".java", ".script", ".jvs"],
    poprawna: 0
},
// pytanie nr. 12
{
    pytanie: "Który z poniższych to system operacyjny?",
    odpowiedzi: ["Linux", "Photoshop", "Python", "HTML"],
    poprawna: 0
 },
// pytanie nr. 13
{
    pytanie: "Jakie urządzenie przekształca dane cyfrowe na sygnał analogowy i odwrotnie?",
    odpowiedzi: ["Modem", "Router", "Switch", "Procesor"],
    poprawna: 0
},
// pytanie nr. 14
{
    pytanie: "Który protokół używany jest do przesyłania stron WWW?",
    odpowiedzi: ["HTTP", "FTP", "SMTP", "SSH"],
    poprawna: 0
},
// pytanie nr. 15
{
    pytanie: "Jak nazywa się główna strona w serwisie internetowym?",
    odpowiedzi: ["Strona główna", "Artykuł", "Footer", "Sidebar"],
    poprawna: 0
},
// pytanie nr. 16
{
    pytanie: "Czym jest phishing?",
    odpowiedzi: ["Atakiem polegającym na wyłudzaniu danych", "Oprogramowaniem antywirusowym", "Typem serwera", "Protokołem sieciowym"],
    poprawna: 0
},
// pytanie nr. 17
{
    pytanie: "Które z poniższych to język programowania?",
    odpowiedzi: ["Python", "Photoshop", "Excel", "Chrome"],
    poprawna: 0
},
// pytanie nr. 18
{
    pytanie: "Co oznacza skrót SSD?",
    odpowiedzi: ["Solid State Drive", "Super Speed Data", "System Storage Device", "Serial Server Drive"],
    poprawna: 0
},
// pytanie nr. 19
{
    pytanie: "Co robi funkcja 'print' w Pythonie?",
    odpowiedzi: ["Wyświetla tekst na ekranie", "Usuwa plik", "Zamyka program", "Dodaje dane do bazy"],
    poprawna: 0
},
// pytanie nr. 20
{
    pytanie: "Czym jest bug w programowaniu?",
    odpowiedzi: ["Błędem w kodzie", "Nową funkcją", "Ulepszeniem", "Typem zmiennej"],
    poprawna: 0
},
// pytanie nr. 21
{
    pytanie: "Czym jest BIOS?",
    odpowiedzi: ["Podstawowym systemem wejścia-wyjścia", "Programem graficznym", "Typem pamięci RAM", "Systemem plików"],
    poprawna: 0
},
// pytanie nr. 22
{
    pytanie: "Co oznacza skrót WWW?",
    odpowiedzi: ["World Wide Web", "Wide Web World", "Web Wide World", "World Web Wide"],
    poprawna: 0
},
// pytanie nr. 23
{
    pytanie: "Do czego służy klucz publiczny w kryptografii?",
    odpowiedzi: ["Do szyfrowania wiadomości", "Do logowania do systemu", "Do uruchamiania komputera", "Do formatowania dysku"],
    poprawna: 0
},
// pytanie nr. 24
{
    pytanie: "Czym jest SQL?",
    odpowiedzi: ["Językiem zapytań do baz danych", "Rodzajem dysku twardego", "Programem do grafiki", "Protokołem sieciowym"],
    poprawna: 0
},
// pytanie nr. 25
{
    pytanie: "Jakie jest rozszerzenie pliku z arkuszem kalkulacyjnym Excela?",
    odpowiedzi: [".xlsx", ".docx", ".pptx", ".txt"],
    poprawna: 0
},
// pytanie nr. 26
{
    pytanie: "Co to jest router?",
    odpowiedzi: ["Urządzenie kierujące ruchem w sieci", "Program antywirusowy", "Typ kabla", "Część monitora"],
    poprawna: 0
},
// pytanie nr. 27
{
    pytanie: "Do czego służy przeglądarka internetowa?",
    odpowiedzi: ["Do wyświetlania stron WWW", "Do pisania kodu", "Do tworzenia grafiki", "Do odtwarzania muzyki"],
    poprawna: 0
},
// pytanie nr. 28
{
    pytanie: "Który z poniższych to przeglądarka internetowa?",
    odpowiedzi: ["Google Chrome", "Windows", "Facebook", "Spotify"],
    poprawna: 0
},
// pytanie nr. 29
{
    pytanie: "Czym jest firewall?",
    odpowiedzi: ["Zaporą sieciową chroniącą przed atakami", "Programem graficznym", "Typem kabla", "Dyskiem zewnętrznym"],
    poprawna: 0
},
// pytanie nr. 30
{
    pytanie: "Jakie rozszerzenie ma plik tekstowy?",
    odpowiedzi: [".txt", ".jpg", ".exe", ".bat"],
    poprawna: 0
},
// pytanie nr. 31
{
    pytanie: "Czym zajmuje się frontend developer?",
    odpowiedzi: ["Tworzy interfejsy użytkownika", "Konfiguruje serwery", "Zarządza bazami danych", "Tworzy sterowniki"],
    poprawna: 0
},
// pytanie nr. 32
{
    pytanie: "Co oznacza skrót HTTP?",
    odpowiedzi: ["HyperText Transfer Protocol", "Hyperlink Text Protocol", "Host Transfer Text Protocol", "Home Transfer Text Page"],
    poprawna: 0
},
// pytanie nr. 33
{
    pytanie: "Jakiego języka używa się głównie po stronie serwera?",
    odpowiedzi: ["PHP", "CSS", "HTML", "Photoshop"],
    poprawna: 0
},
// pytanie nr. 34
{
    pytanie: "Jakiego skrótu używa się do zapisu adresów IP w wersji 6?",
    odpowiedzi: ["IPv6", "IP6v", "IP-Next", "IPvX"],
    poprawna: 0
},
// pytanie nr. 35
{
    pytanie: "Czym jest open source?",
    odpowiedzi: ["Oprogramowaniem z otwartym kodem źródłowym", "Płatnym programem", "Zamkniętym systemem", "Rodzajem komputera"],
    poprawna: 0
},
// pytanie nr. 36
{
    pytanie: "Która jednostka mierzy prędkość procesora?",
    odpowiedzi: ["GHz", "GB", "MB", "ms"],
    poprawna: 0
},
// pytanie nr. 37
{
    pytanie: "Który z tych języków jest kompilowany?",
    odpowiedzi: ["C++", "HTML", "JavaScript", "CSS"],
    poprawna: 0
},
// pytanie nr. 38
{
    pytanie: "Czym jest pętla w programowaniu?",
    odpowiedzi: ["Instrukcją wykonującą coś wielokrotnie", "Błędem", "Nowym językiem", "Rodzajem zmiennej"],
    poprawna: 0
},
// pytanie nr. 39
{
    pytanie: "Jakiego systemu używa większość serwerów?",
    odpowiedzi: ["Linux", "Windows 10", "Android", "macOS"],
    poprawna: 0
},
// pytanie nr. 40
{
    pytanie: "Czym jest IDE?",
    odpowiedzi: ["Zintegrowanym środowiskiem programistycznym", "Typem pliku", "Rodzajem wirusa", "Sterownikiem drukarki"],
    poprawna: 0
},
// pytanie nr. 41
{
    pytanie: "Który format pliku służy do przechowywania obrazów?",
    odpowiedzi: [".jpg", ".txt", ".exe", ".sql"],
    poprawna: 0
},
// pytanie nr. 42
{
    pytanie: "Jakie urządzenie wskazujące służy do sterowania kursorem?",
    odpowiedzi: ["Mysz", "Klawiatura", "Monitor", "Głośnik"],
    poprawna: 0
},
// pytanie nr. 43
{
    pytanie: "Jak nazywa się kod zamieniany na język maszynowy?",
    odpowiedzi: ["Kod źródłowy", "Kod błędu", "Kod pocztowy", "Kod kolorów"],
    poprawna: 0
},
// pytanie nr. 44
{
    pytanie: "Jak nazywa się główna pamięć komputera?",
    odpowiedzi: ["RAM", "ROM", "CPU", "GPU"],
    poprawna: 0
},
// pytanie nr. 45
{
    pytanie: "Czym jest debugowanie?",
    odpowiedzi: ["Procesem usuwania błędów z programu", "Tworzeniem grafiki", "Aktualizacją systemu", "Instalacją systemu"],
    poprawna: 0
},
// pytanie nr. 46
{
    pytanie: "Który z tych formatów służy do przechowywania danych audio?",
    odpowiedzi: [".mp3", ".jpg", ".doc", ".exe"],
    poprawna: 0
},
// pytanie nr. 47
{
    pytanie: "Do czego służy język SQL?",
    odpowiedzi: ["Do zarządzania bazami danych", "Do edycji grafiki", "Do tworzenia animacji", "Do szyfrowania"],
    poprawna: 0
},
// pytanie nr. 48
{
    pytanie: "Czym jest aplikacja webowa?",
    odpowiedzi: ["Aplikacją działającą przez przeglądarkę", "Programem instalowanym na komputerze", "Grą offline", "Oprogramowaniem systemowym"],
    poprawna: 0
},
// pytanie nr. 49
{
    pytanie: "Czym jest chmura (cloud computing)?",
    odpowiedzi: ["Zdalnym przechowywaniem danych i usług", "Nowym rodzajem komputera", "Systemem operacyjnym", "Programem antywirusowym"],
    poprawna: 0
},
// pytanie nr. 50
{
    pytanie: "Czym jest malware?",
    odpowiedzi: ["Złośliwym oprogramowaniem", "Sterownikiem", "Rodzajem języka", "Formatem pliku"],
    poprawna: 0
},
// pytanie nr. 51
{
    pytanie: "Co to jest API?",
    odpowiedzi: ["Interfejs programowania aplikacji", "Program antywirusowy", "Typ bazy danych", "Protokół sieciowy"],
    poprawna: 0
},
// pytanie nr. 52
{
    pytanie: "Czym jest JSON?",
    odpowiedzi: ["Format wymiany danych", "Językiem programowania", "Typem komputera", "Format grafiki"],
    poprawna: 0
},
// pytanie nr. 53
{
    pytanie: "Co to jest SSL?",
    odpowiedzi: ["Protokół zabezpieczający transmisję danych", "System operacyjny", "Rodzaj języka programowania", "Typ dysku twardego"],
    poprawna: 0
},
// pytanie nr. 54
{
    pytanie: "Do czego służy CSS?",
    odpowiedzi: ["Do stylizacji stron internetowych", "Do tworzenia aplikacji mobilnych", "Do programowania baz danych", "Do edytowania tekstu"],
    poprawna: 0
},
// pytanie nr. 55
{
    pytanie: "Co oznacza skrót Wi-Fi?",
    odpowiedzi: ["Wireless Fidelity", "Wide Frequency Interlink", "Web Interface File", "World Internet Functionality"],
    poprawna: 0
},
// pytanie nr. 56
{
    pytanie: "Co to jest VPN?",
    odpowiedzi: ["Wirtualna sieć prywatna", "Protokół bezpieczeństwa", "Rodzaj zapory ogniowej", "Typ aplikacji mobilnej"],
    poprawna: 0
},
// pytanie nr. 57
{
    pytanie: "Czym jest Docker?",
    odpowiedzi: ["Platformą do tworzenia i uruchamiania aplikacji w kontenerach", "Językiem programowania", "Typem systemu operacyjnego", "Platformą do tworzenia baz danych"],
    poprawna: 0
},
// pytanie nr. 58
{
    pytanie: "Co to jest GitHub?",
    odpowiedzi: ["Platformą do hostowania kodu i współpracy nad projektami", "Oprogramowaniem antywirusowym", "Programem do tworzenia grafik", "Rodzajem serwera"],
    poprawna: 0
},
// pytanie nr. 59
{
    pytanie: "Co to jest GitLab?",
    odpowiedzi: ["Platformą do zarządzania kodem źródłowym", "Rodzajem języka programowania", "Typem bazy danych", "Protokół komunikacyjny"],
    poprawna: 0
},
// pytanie nr. 60
{
    pytanie: "Co oznacza skrót DNS?",
    odpowiedzi: ["Domain Name System", "Dynamic Network Service", "Direct Network Server", "Distributed Network System"],
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

// pytanie nr. 1
{
    pytanie: "Czym różni się TCP od UDP w praktycznym zastosowaniu?",
    odpowiedzi: ["TCP zapewnia niezawodność, UDP jest szybszy, ale bez gwarancji dostarczenia", "UDP jest bezpieczniejszy od TCP", "TCP nie używa portów", "UDP zawsze szyfruje dane"],
    poprawna: 0
},
// pytanie nr. 2
{
    pytanie: "Co to jest 'race condition' w programowaniu współbieżnym?",
    odpowiedzi: ["Błąd wynikający z nieprzewidywalnej kolejności wykonania wątków", "Sytuacja, gdy proces nie kończy się", "Specjalna optymalizacja kodu", "Zabezpieczenie przed deadlockiem"],
    poprawna: 0
},
// pytanie nr. 3
{
    pytanie: "Który algorytm ma najlepszą średnią złożoność czasową w sortowaniu?",
    odpowiedzi: ["Merge sort", "Bubble sort", "Insertion sort", "Selection sort"],
    poprawna: 0
},
// pytanie nr. 4
{
    pytanie: "Czym jest 'memoizacja' w kontekście funkcji rekurencyjnych?",
    odpowiedzi: ["Techniką zapamiętywania wyników funkcji, by nie liczyć ich ponownie", "Rodzajem optymalizacji pamięci RAM", "Systemem wersjonowania funkcji", "Sposobem na sortowanie danych"],
    poprawna: 0
},
// pytanie nr. 5
{
    pytanie: "Co robi 'fork()' w systemie Unix/Linux?",
    odpowiedzi: ["Tworzy nowy proces będący kopią bieżącego", "Tworzy nowy wątek", "Zamyka bieżący proces", "Zamyka deskryptor pliku"],
    poprawna: 0
},
// pytanie nr. 6
{
    pytanie: "Jakie jest domyślne TTL (Time To Live) dla pakietów IP?",
    odpowiedzi: ["64", "128", "255", "32"],
    poprawna: 0
},
// pytanie nr. 7
{
    pytanie: "Czym różni się kodowanie Base64 od haszowania SHA-256?",
    odpowiedzi: ["Base64 to kodowanie, a SHA-256 to haszowanie – Base64 można odkodować, SHA-256 nie", "SHA-256 to metoda szyfrowania, Base64 to haszowanie", "Base64 jest szybsze i bezpieczniejsze niż SHA-256", "SHA-256 kompresuje dane, Base64 nie"],
    poprawna: 0
},
// pytanie nr. 8
{
    pytanie: "Co to jest 'lazy loading' w programowaniu webowym?",
    odpowiedzi: ["Technika ładowania zasobów dopiero wtedy, gdy są potrzebne", "Sposób pisania mniej kodu", "Rodzaj CSS", "Rodzaj bazy danych"],
    poprawna: 0
},
// pytanie nr. 9
{
    pytanie: "W języku C++, czym jest 'RAII'?",
    odpowiedzi: ["Techniką zarządzania zasobami za pomocą obiektów", "Rodzajem wyjątku", "Biblioteką do grafiki", "Standardem szyfrowania"],
    poprawna: 0
},
// pytanie nr. 10
{
    pytanie: "Jaka jest różnica między 'stack' a 'heap' w zarządzaniu pamięcią?",
    odpowiedzi: ["Stack jest szybki i automatyczny, heap wymaga ręcznego zarządzania", "Heap jest używany tylko w Pythonie", "Stack to pamięć stała, heap to tymczasowa", "Heap nie używa wskaźników"],
    poprawna: 0
},
// pytanie nr. 11
{
    pytanie: "Czym jest XSS (Cross-site scripting)?",
    odpowiedzi: ["Wstrzyknięciem złośliwego kodu JS do strony", "Rodzajem szyfrowania SSL", "Metodą brute-force", "Oprogramowaniem do backupu"],
    poprawna: 0
},
// pytanie nr. 12
{
    pytanie: "Która z poniższych struktur danych jest najlepsza do implementacji kolejki priorytetowej?",
    odpowiedzi: ["Kopiec binarny (heap)", "Stos", "Lista dwukierunkowa", "Tablica dynamiczna"],
    poprawna: 0
},
// pytanie nr. 13
{
    pytanie: "Czym jest LRU cache?",
    odpowiedzi: ["Mechanizmem usuwającym najmniej używane dane z pamięci", "Typem systemu plików", "Metodą szyfrowania", "Zamiennikiem CPU"],
    poprawna: 0
},
// pytanie nr. 14
{
    pytanie: "Jak działa protokół OAuth 2.0?",
    odpowiedzi: ["Pozwala na autoryzację bez udostępniania hasła aplikacjom trzecim", "Służy do szyfrowania połączeń", "Umożliwia dostęp offline do serwera", "Pozwala zapisywać hasła lokalnie"],
    poprawna: 0
},
// pytanie nr. 15
{
    pytanie: "Czym jest system plików ZFS?",
    odpowiedzi: ["Zaawansowanym systemem plików z obsługą snapshotów i integralności danych", "Formatem zapisu obrazów", "Protokółem komunikacyjnym", "Rodzajem szyfrowania"],
    poprawna: 0
},
// pytanie nr. 16
{
    pytanie: "Który algorytm znajdowania najkrótszej ścieżki działa na grafie z wagami ujemnymi?",
    odpowiedzi: ["Bellman-Ford", "Dijkstra", "A*", "Kruskal"],
    poprawna: 0
},
// pytanie nr. 17
{
    pytanie: "Do czego służy wskaźnik 'void*' w języku C?",
    odpowiedzi: ["Do przechowywania adresu dowolnego typu danych", "Do wskazywania na NULL", "Jest to specjalny typ zmiennej globalnej", "Nie istnieje taki wskaźnik w C"],
poprawna: 0
},
// pytanie nr. 18
{
    pytanie: "Czym jest atak typu 'man-in-the-middle'?",
    odpowiedzi: ["Podsłuchiwaniem i modyfikacją danych przesyłanych między dwiema stronami", "Zainfekowaniem systemu trojanem", "Użyciem złośliwego makra", "Włamaniem do BIOSu"],
    poprawna: 0
},
// pytanie nr. 19
{
    pytanie: "Czym różni się Docker od maszyny wirtualnej?",
    odpowiedzi: ["Docker działa na poziomie systemu operacyjnego, VM emuluje cały sprzęt", "Docker wymaga więcej zasobów", "Docker nie obsługuje systemu plików", "VM działa tylko na Linuksie"],
    poprawna: 0
},
// pytanie nr. 20
{
    pytanie: "Czym jest wskaźnik typu 'smart pointer' w C++?",
    odpowiedzi: ["Wskaźnikiem zarządzającym pamięcią automatycznie", "Rodzajem iteratora", "Typem zmiennej globalnej", "Stałym wskaźnikiem do funkcji"],
    poprawna: 0
},
// pytanie nr. 21
{
    pytanie: "Co to jest 'deadlock' w programowaniu współbieżnym?",
    odpowiedzi: ["Zatrzymanie procesu z powodu wzajemnego oczekiwania na zasoby", "Błąd pamięci", "Zatrzymanie wątku z powodu błędnej synchronizacji", "Zwiększenie priorytetu wątku"],
    poprawna: 0
},
// pytanie nr. 22
{
    pytanie: "Co oznacza termin 'big O notation' w analizie algorytmów?",
    odpowiedzi: ["Oznacza złożoność czasową lub pamięciową algorytmu", "Opisuje format danych wejściowych", "Określa liczbę iteracji w pętli", "Zapisuje czas działania funkcji"],
    poprawna: 0
},
// pytanie nr. 23
{
    pytanie: "Jakie jest zastosowanie wzorca projektowego Singleton?",
    odpowiedzi: ["Zapewnia istnienie jednej instancji klasy w całej aplikacji", "Umożliwia tworzenie wielu obiektów tej samej klasy", "Ułatwia testowanie klas", "Zoptymalizowane zarządzanie pamięcią"],
    poprawna: 0
},
// pytanie nr. 24
{
    pytanie: "Co to jest protokół ARP?",
    odpowiedzi: ["Protokół odpowiedzialny za mapowanie adresów IP na adresy MAC", "Protokół szyfrujący dane w sieci", "Protokół wykorzystywany do routingu w internecie", "Protokół aplikacji w sieci"],
    poprawna: 0
},
// pytanie nr. 25
{
    pytanie: "Czym jest SQL Injection?",
    odpowiedzi: ["Atakiem, w którym złośliwy kod jest wstrzykiwany do zapytania SQL", "Techniką optymalizacji zapytań SQL", "Metodą kodowania danych w bazie danych", "Rodzajem szyfrowania połączeń z bazą danych"],
    poprawna: 0
},
// pytanie nr. 26
{
    pytanie: "Co to jest 'load balancing'?",
    odpowiedzi: ["Rozdzielanie obciążenia na wiele serwerów lub zasobów", "Algorytm kompresji danych", "Metoda zabezpieczania danych przed utratą", "Typy baz danych wykorzystywane w aplikacjach webowych"],
    poprawna: 0
},
// pytanie nr. 27
{
    pytanie: "Czym jest 'cloud computing'?",
    odpowiedzi: ["Model przetwarzania danych, gdzie zasoby są dostępne przez internet", "Metodą szyfrowania danych w chmurze", "Systemem operacyjnym dla rozproszonych systemów", "Technologią szybszego internetu"],
    poprawna: 0
},
// pytanie nr. 28
{
    pytanie: "Co oznacza skrót 'API'?",
    odpowiedzi: ["Application Programming Interface", "Application Process Integration", "Automatic Program Interface", "Automated Performance Indicator"],
    poprawna: 0
},
// pytanie nr. 29
{
    pytanie: "Czym różni się język C od C++?",
    odpowiedzi: ["C++ to język obiektowy, C jest proceduralny", "C jest szybszy od C++", "C++ nie obsługuje wskaźników", "C++ jest używany tylko do aplikacji webowych"],
    poprawna: 0
},
// pytanie nr. 30
{
    pytanie: "Co to jest protokół TCP/IP?",
    odpowiedzi: ["Zbiór protokołów komunikacyjnych wykorzystywanych w Internecie", "Rodzaj szyfrowania danych", "Specyfikacja adresowania IP", "Format pakietów HTTP"],
    poprawna: 0
},
// pytanie nr. 31
{
    pytanie: "Czym jest 'pointer arithmetic' w języku C?",
    odpowiedzi: ["Operacje na wskaźnikach, takie jak dodawanie i odejmowanie", "Typ wskaźnika w C", "Metoda szyfrowania wskaźników", "Technika zarządzania pamięcią"],
    poprawna: 0
},
// pytanie nr. 32
{
    pytanie: "Czym jest protokół HTTP?",
    odpowiedzi: ["Protokół wykorzystywany do komunikacji między klientem a serwerem w sieci WWW", "Protokół używany do szyfrowania połączeń", "Rodzaj zapytania w bazach danych", "Rodzaj protokołu w systemach plików"],
    poprawna: 0
},
// pytanie nr. 33
{
    pytanie: "Co to jest Git?",
    odpowiedzi: ["System kontroli wersji", "Język programowania", "Skrót od 'Graphical Interface Tool'", "Rodzaj bazy danych"],
    poprawna: 0
},
// pytanie nr. 34
{
    pytanie: "Jakie jest zastosowanie wzorca projektowego Factory?",
    odpowiedzi: ["Tworzenie obiektów bez ujawniania szczegółów implementacji", "Zarządzanie zasobami systemowymi", "Organizacja danych w aplikacjach", "Optymalizacja kodu"],
    poprawna: 0
},
// pytanie nr. 35
{
    pytanie: "Co to jest AJAX?",
    odpowiedzi: ["Technika pozwalająca na asynchroniczne ładowanie danych z serwera", "Typ bazy danych", "Rodzaj protokołu internetowego", "Algorytm kompresji danych"],
    poprawna: 0
},
// pytanie nr. 36
{
    pytanie: "Co to jest JSON?",
    odpowiedzi: ["Format wymiany danych w formacie tekstowym", "Rodzaj bazy danych", "Protokół komunikacyjny", "System wersjonowania danych"],
    poprawna: 0
},
// pytanie nr. 37
{
    pytanie: "Czym jest 'denial of service' (DoS)?",
    odpowiedzi: ["Atakiem mającym na celu zablokowanie dostępu do zasobów systemowych", "Rodzajem szyfrowania danych", "Zabezpieczeniem przed włamaniami", "Algorytmem kompresji danych"],
    poprawna: 0
},
// pytanie nr. 38
{
    pytanie: "Co to jest REST API?",
    odpowiedzi: ["Zasady i konwencje umożliwiające komunikację między aplikacjami przez HTTP", "Format wymiany danych między serwerem a aplikacją", "Rodzaj protokołu TCP", "Język zapytań w bazach danych"],
    poprawna: 0
},
// pytanie nr. 39
{
    pytanie: "Czym jest protokół HTTPS?",
    odpowiedzi: ["Bezpieczna wersja protokołu HTTP, używająca szyfrowania", "Protokół do wymiany plików", "System autoryzacji użytkowników", "Rodzaj szyfrowania aplikacji internetowych"],
    poprawna: 0
},
// pytanie nr. 40
{
    pytanie: "Czym jest 'Docker container'?",
    odpowiedzi: ["Izolowanym środowiskiem, w którym działa aplikacja", "Rodzajem maszyny wirtualnej", "Specjalnym procesem w systemie operacyjnym", "Zaawansowaną metodą szyfrowania danych"],
    poprawna: 0
},
];

// Własność Kacper Jasiński 3 Ti