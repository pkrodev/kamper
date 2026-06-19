STRONA: kamperylublin.pl
=========================

Strona jest statyczna (HTML + CSS + JS) — wystarczy wgrać całą zawartość
tego folderu na serwer/hosting. Plik startowy to index.html.

STRUKTURA PLIKÓW
----------------
index.html              -> treść strony
assets/css/styles.css   -> wygląd
assets/js/main.js        -> menu mobilne + powiększanie zdjęć (galeria)
assets/img/             -> zdjęcia używane na stronie

JAK PODMIENIĆ / DODAĆ ZDJĘCIE
-----------------------------
1. Wrzuć plik .jpg do folderu assets/img/
2. W index.html znajdź odpowiednie miejsce (src="assets/img/...") i wpisz nazwę nowego pliku.
   Wskazówka: zdjęcia robione telefonem bywają obrócone — przed wgraniem
   warto je wyprostować i pomniejszyć (np. do ok. 1600 px szerokości),
   żeby strona szybciej się ładowała.

JAK DODAĆ NOWĄ "INSPIRACJĘ" (sekcja Nasze inspiracje)
-----------------------------------------------------
W index.html, w sekcji <section id="inspiracje">, skopiuj jeden blok:

  <article class="inspo-item">
    <a class="inspo-photo" href="assets/img/TWOJE-ZDJECIE.jpg">
      <img src="assets/img/TWOJE-ZDJECIE.jpg" alt="Opis zdjęcia" loading="lazy">
    </a>
    <div class="inspo-body">
      <h3>Tytuł miejsca</h3>
      <p>Krótki opis Twojej podróży.</p>
    </div>
  </article>

Podmień nazwę zdjęcia, tytuł i opis. Gotowy szablon jest też w komentarzu
w tym miejscu pliku.

JAK DODAĆ CENNIK
----------------
W index.html, w sekcji <section id="cennik">, jest gotowy (zakomentowany)
blok .pricing. Wystarczy go odkomentować, wpisać ceny i usunąć blok
.pricing-soon ("zadzwoń po wycenę").

DANE DO ZMIANY (gdyby się zmieniły)
-----------------------------------
- Telefon: 798 554 325 — występuje w index.html w kilku miejscach
  (przyciski "Zadzwoń", sekcja Kontakt, stopka). Numer w odnośnikach
  zapisany jest jako tel:+48798554325.
- Motto: "Samochody to nasza pasja, a podróże to hobby".
- Model kampera: Benimar Tessoro T463 (na podwoziu Forda).

UWAGA O ZDJĘCIACH NAMIOTU I SPRZĘTU
-----------------------------------
Sekcje "Namiot dachowy" i "Sprzęt turystyczny" mają na razie miejsca
zastępcze ("Zdjęcia wkrótce"). Po zrobieniu zdjęć wgraj je do assets/img/
i podmień placeholdery na galerię (tak jak przy kamperze/przyczepie).

ZDJĘCIA WNĘTRZA PRZYCZEPY
-------------------------
Były ciemne, dlatego na stronie są automatycznie rozjaśnione (klasa
"brighten" w CSS). Jeśli wgrasz jaśniejsze oryginały, możesz tę klasę usunąć.
