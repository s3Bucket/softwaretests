# Lösung: "Erste Aufgabe"

## 1. Verständnis für den Aufbau eines Tests

### 1.1 Der 'features'-Ordner

1) Was steht in den '*.feature'-Dateien?

> Die Feature-Dateien beinhalten die Anforderungen an die Software die durch die Test gewährleistet werden sollen.
> Dabei wird eine für alle Teilnehmer lesbare Schreibweise verwendet.

2) Was sind die Schlüsselworte innerhalb einer '.feature'-Datei?

> Feature -> Beschreibt, was durch die Implementierung erreicht werden soll
>
> Scenario -> Beschreibt einen möglichen Fall, der durch das Feature abgedeckt werden soll
>
> When -> Beschreibt die Vorbedingungen für den Test
> Then -> Beschreibt das erwartete Ergebnis

3) Was sind Vorteile dieser Schreibweise?

> Durch die lesbarkeit der Anforderungen können sowohl Techniker, als auch Tester und Entscheider auf einer für alle
> verständlichen Grundlage entscheidungen treffen.

### 1.2 Der 'steps'-Ordner

1) Was steht in den '*Steps.js'-Dateien im 'steps'-Ordner?

> Die Steps-Dateien beinhalten die Implementierung der Tests. Während die feature-Dateien die lesbare Umschreibung
> beinhalten, steht in den steps-Dateien der eigentliche Code, der in den Tests ausgeführt wird.

2) Wie stehen die "When" und "Then" - Methoden mit der '.feature'-Datei im Zusammenhang?
   
> In der When und Then-Methode steht der Text der jeweiligen feature-Datei. Dabei ist der genaue Wortlaut wichtig, damit
> die Verbindung von Feature und Step sichergestellt wird.

3) Warum stehen im Text Worte wie {int} oder {string}? Wie steht das mit den Übergabeparametern im Zusammenhang?

> Wie in 2) beschrieben, muss der Wortlaut von Methode und Umschreibung gleich sein. Jedoch ist es möglich Parameter anstelle
> des Textes zu schreiben, um den Test für verschiedene 'Scenario's verwenden zu können.

## 2. Umgang mit den Funktionen

### 2.1 Der 'features'-Ordner

1) Was passiert, wenn ein Schlüsselwort geändert wird?

> Die Schlüsselwörter "When" und "Then" müssen in der Form stehen bleiben, ansonsten schlagen die Tests fehl.

2) Was passiert, wenn man einen der Werte ändert?

Wenn man einen Wert

### 2.2 Der 'step'-Ordner

1) Was passiert, wenn der beschreibende Text in der Funktion geändert wird?

> Da der Text in der Funktion nun anders ist als in der Beschreibung der 'feature'-Datei, wird diese nicht mehr als diesem
> Test zugehörig interpretiert. Es gibt keinen Fehler, jedoch erwartet der Compiler, dass der Test für den entsprecheden 
> Text implementiert wird.

2) Was passiert, wenn man einen der Werte ändert, der als Übergabeparameter dient?

> Bei Änderung der Werte in der 'feature'-Datei, die dann in der Funktion einer 'Step'-Datei übergeben werden, kann es passierten,
> dass der Test fehlschlägt.
