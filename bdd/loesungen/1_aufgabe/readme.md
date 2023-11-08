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

### 1.2 Der 'steps'-Ordner

1) Was steht in den '*Steps.js'-Dateien im 'steps'-Ordner?
2) Wie stehen die "When" und "Then" - Methoden mit der '.feature'-Datei im Zusammenhang?
3) Warum stehen im Text Worte wie {int} oder {string}? Wie steht das mit den Übergabeparametern im Zusammenhang?

## 2. Umgang mit den Funktionen

### 2.1 Der 'features'-Ordner

1) Was passiert, wenn ein Schlüsselwort geändert wird?
2) Was passiert, wenn man einen der Werte ändert?

### 2.2 Der 'step'-Ordner

1) Was passiert, wenn der beschreibende Text in der Funktion geändert wird?
2) Was passiert, wenn man die Logik innerhalb einer Funktion ändert?