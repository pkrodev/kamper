STRONA: kamperylublin.pl  (Chołody Auto Serwis – Wynajem)
=========================================================

Strona jest statyczna (HTML + CSS + JS) — wystarczy wgrać całą zawartość
tego folderu na serwer/hosting. Plik startowy to index.html.

UWAGA: foldery "Folder kamper", "Folder przyczepa", "Folder wynajm" oraz
pliki WYNAJEM TURYSTYKA.docx i Wynajem-komplet-ogloszen.pdf to materiały
źródłowe (zdjęcia i opisy od klienta) — NIE trzeba ich wgrywać na serwer.
Na stronę idą tylko: index.html, README.txt i folder assets/.

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

Zdjęcia zostały już zmniejszone (do ok. 1680 px) i zoptymalizowane, żeby
strona ładowała się szybko. Oryginały są w folderach źródłowych.

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
