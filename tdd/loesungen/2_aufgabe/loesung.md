# Zweite Aufgabe
> Zum Ausführen der Tests muss folgender Befehl im Hauptverzeichnis eingegeben werden:

```JavaScript
npm test ./tdd/aufgaben/2_aufgabe/calculator.test.js
```

## 1. Schreiben einer Implementierung

1) Führe zunächst die Test aus, ohne eine Änderung vorzunehmen. Welche Informationen können der Konsole entnommen werden?

> **FAIL  tdd/aufgaben/2_aufgabe/calculator.test.js** -> Man erkennt, in welcher Datei der Fehler auftritt.
>
> **When adding two numbers › should add 1 + 2 to equal 3** -> Man erkennt den Namen des Tests der fehlgeschlagen ist.
>
> **expect(calculator.add(1, 2)).toBe(3);** -> Man erkennt die Stelle, an welcher der Test fehlgeschlagen ist.
>
> **calculator.add is not a function** -> Man sieht die Begründung, warum der Test fehlgeschlagen ist.

2) Schreibe nun eine Implementierung in der 'calculator.js'-Datei. Bei erfolgreicher Implementierung sollte der jeweilige
   Test erfolgreich werden. (Denke daran, die Funktion mit 'exports' der Testdatei zur Verfügung zu stellen!)

```JavaScript
exports.add = function(a, b) {
  return a + b;
}

exports.sub = function(a, b) {
  return a - b;
}

exports.multiply = function(a, b) {
  return a * b;
}

exports.divide = function(a, b) {
  return a / b;
}
```