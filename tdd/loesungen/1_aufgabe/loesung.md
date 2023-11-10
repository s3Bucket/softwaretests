# Lösung - Erste Aufgabe

> Zum Ausführen der Tests muss folgender Befehl im Hauptverzeichnis eingegeben werden:

```JavaScript
npm test
```

## 1. Verständnis für den Aufbau eines Tests

### Testaufbau

1) Wurde zuerst die Datei 'greeting.test.js' oder die Datei 'greeting.js' angelegt? Begründe deine Vermutung!

> Da wir nach dem TDD-Prinzip arbeiten muss erst der Test und dann die Implementierung geschrieben werden.
> Deshalb liegt es nahe, dass erst die 'greeting.test.js'-Datei erzeugt wurde, da hier der Test liegt.
> Die entsprechende Implementierung wurde dann später in der 'greeting.js'-Datei geschrieben.

2) Was sind die Schlüsselworte innerhalb einer Testdatei?

> describe -> Schafft eine Bedingung, die für alle Tests in diesem Kontext gelten soll.
>
> it -> Funktionsaufruf für den Test. Hier wird auf das Verhalten unter der zuvor gestellten Bedingung geprüft.
>
> assert -> Überprüft, ob die Werte ein bestimmtes Verhalten haben.
>
> equal -> Überprüft, ob die Werte gleich sind

3) Beschreibe was in den jeweiligen Teil 'arrange, act, assert' gehört!

> arrange -> Schafft die Bedingungen, die für die aktuellen Tests gelten soll
>
> act -> Führt die zu überprüfenden Methoden aus. Hier wird der Test durchgeführt.
>
> assert -> Hier wird überprüft, ob die Durchführung des Tests zu dem erwarteten Resultat führt.

4) Was sind Vorteile einer solchen Struktur?

> Wir schaffen eine einheitliche, und besser lesbare Struktur für unsere Tests. Bei einem Fehlschlagenden
> Test bekommen wir ein lesbares Feedback darüber, welcher Test fehlgeschlagen ist.
> Wir können Bedingungen für mehrere Tests zusammenfassen und müssen diese nicht für jeden Test neu definieren.

## 2. Umgang mit der Implementierung

1) Woher weiß der Test zu welcher Implementierung er 'gehört'?

> Durch den Funktionsaufruf innerhalb der Testumgebung haben wir eine Verbindung von Test zu Implementierung.

2) Was passiert, wenn wir die Erwartungshaltung des Tests ändern?

> Ändern wir die Erwartungshaltung an den Test wird dieser fehl schlagen, weil die Implementierung eine andere Erwartung erfüllt.

3) Was passiert, wenn wir die Implementierung ändern, ohne den Test anzupassen?

> Für die Änderungen an der Implementierung sind zwei Szenarien denkbar:
>
> 1. Der Test schlägt fehl: Die Implementierung erfüllt nicht mehr die Erwartungshaltung. Änderungen müssen zurückgerollt 
> oder der Test an die neue Erwartungshaltung angepasst werden.
>
> 2. Der Test bleibt erfolgreich: Die Implementierung erfüllt immer noch die Erwartung durch den Test. Ist die Implementierung
> nun in einer 'besseren' Form als Zuvor, spricht man hier von einem 'Refactoring'.

1) Wie ist das Vorgehen beim TDD bei einer Änderung der Erwartungshaltung an die Implementierung?

> Wenn sich das Verhalten einer Implementierung ändern soll muss beim TDD immer erst der Test an die neue Erwartungshaltung 
> angepasst werden. Dieser schlägt dann fehl, und erst dann darf die Implementierung angepasst werden.