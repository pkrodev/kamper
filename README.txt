STRONA: kamperylublin.pl  (Chołody Auto Serwis – Wynajem)
=========================================================

Strona jest statyczna (HTML + CSS + JS) — wystarczy wgrać całą zawartość
tego folderu na serwer/hosting. Plik startowy to index.html.

UWAGA: foldery "Folder kamper", "Folder przyczepa", "Folder wynajm" oraz
pliki WYNAJEM TURYSTYKA.docx i Wynajem-komplet-ogloszen.pdf to materiały
źródłowe (zdjęcia i opisy od klienta) — NIE trzeba ich wgrywać na serwer.
Na serwer wgrywamy: index.html, robots.txt, sitemap.xml, llms.txt,
folder assets/ oraz folder umowy/ (PDF-y linkowane w sekcji "Cennik").
README.txt jest tylko dla Ciebie – nie musi trafiać na serwer.

SEO / WIDOCZNOŚĆ W GOOGLE I W AI
-------------------------------
- robots.txt   -> zezwala robotom (w tym AI: ChatGPT, Perplexity, Gemini,
                  Claude) na indeksowanie i wskazuje sitemap.
- sitemap.xml  -> mapa strony dla wyszukiwarek. Po zmianie treści warto
                  zaktualizować datę <lastmod>. Zgłoś ją w Google Search Console.
- llms.txt     -> zwięzłe streszczenie oferty dla wyszukiwarek AI.
- W index.html w sekcji <head> są meta tagi (opis, Open Graph do podglądu
  linków na FB/Messenger) oraz dane strukturalne JSON-LD (LocalBusiness +
  produkty z cenami). Jeśli zmienisz ceny/adres/telefon, zaktualizuj też
  te dane w JSON-LD.
- Dane firmy (stopka + JSON-LD): Chołody Dariusz Chołody Auto Serwis,
  ul. Stadionowa 7, 20-405 Lublin, NIP 7121016156, REGON 430554004.
- Współrzędne geo (51.2216, 22.5451) są przybliżone dla ul. Stadionowej —
  jeśli chcesz, mogę je doprecyzować pod dokładny punkt.
- Zalecane: załóż wizytówkę Google (Profil Firmy) na ten sam adres i telefon
  — to najmocniej podbija widoczność lokalną "wynajem kampera Lublin".

STRUKTURA PLIKÓW
----------------
index.html              -> treść strony
assets/css/styles.css   -> wygląd
assets/js/main.js        -> menu mobilne, animacje, powiększanie zdjęć (galeria)
assets/img/             -> zdjęcia używane na stronie

ZDJĘCIA NA STRONIE (assets/img/)
--------------------------------
hero.jpg                -> duże zdjęcie w nagłówku (kamper w słońcu)
kamper-1..7.jpg         -> galeria kampera (zewnątrz + wnętrze + kabina)
przyczepa-1..5.jpg      -> galeria przyczepy Bailey
namiot-1..4.jpg         -> galeria namiotu dachowego (hard-top)
inspo-1.jpg             -> zdjęcie w sekcji "Nasze inspiracje"

Wszystkie zdjęcia na stronie są w formacie .jpg, zmniejszone do maks.
1400 px (kafelki "wizualizacja" do 1000 px) i skompresowane — cały folder
assets/img/ waży ok. 7 MB zamiast 56 MB, dzięki czemu strona ładuje się
szybko także na telefonie. Oryginały są w folderach źródłowych.

JAK PODMIENIĆ / DODAĆ ZDJĘCIE
-----------------------------
1. Wrzuć plik .jpg do folderu assets/img/ (najlepiej zmniejszony do ok.
   1600 px szerokości i wyprostowany — telefony często obracają zdjęcia).
2. W index.html znajdź odpowiednie miejsce (src="assets/img/...") i wpisz
   nazwę nowego pliku. W galeriach podmień też adres w href="..." (to ten
   sam plik — otwiera się po kliknięciu w powiększeniu).

CENNIK
------
Ceny są już wpisane w sekcji <section id="cennik"> (tabela) oraz w boxach
"Warunki wynajmu" przy każdym produkcie i na kafelkach (plakietki "od ... zł").
Jeśli zmienisz cenę, popraw ją w TRZECH miejscach: kafelek (price-tag),
box "Warunki wynajmu" w danej sekcji i tabela w "Cennik".

DO UZUPEŁNIENIA PRZEZ WŁAŚCICIELA
--------------------------------
- BOX DACHOWY — litraż: w opisie sprzętu można dodać pojemność (np. 400 l).
  Szukaj w index.html sekcji id="sprzet", kafelek "Box dachowy".
- FACEBOOK — dokładny adres profilu: w index.html są dwa linki Facebooka
  (sekcja Kontakt i stopka) ustawione tymczasowo na https://www.facebook.com/.
  Podmień je na pełny adres strony "Chołody Auto Serwis".
  Instagram jest już ustawiony: instagram.com/cholody_auto_serwis

DANE DO ZMIANY (gdyby się zmieniły)
-----------------------------------
- Telefon: 798 554 325 — w index.html w kilku miejscach (przyciski "Zadzwoń",
  Kontakt, stopka). W odnośnikach zapisany jako tel:+48798554325.
- E-mail: cholodyserwis@gmail.com (sekcja Kontakt, zapis mailto:).
- Motto: "Samochody to nasza pasja, a podróże to hobby".
- Kamper: Benimar Tessoro T463, nowy 2026, na bazie Ford Transit.
- Przyczepa: Bailey Pageant Series 5.

JAK DODAĆ NOWĄ "INSPIRACJĘ" (sekcja Nasze inspiracje)
-----------------------------------------------------
W index.html, w sekcji <section id="inspiracje">, skopiuj jeden blok
<article class="inspo-item"> ... </article>, podmień nazwę zdjęcia
(src oraz href), tytuł i opis. Gotowy pusty szablon jest w komentarzu
w tym miejscu pliku.
