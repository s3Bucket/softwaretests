# TDD - Test Driven Development

## Beschreibung

Beim Testgetriebenen Ansatz wird schreiben wir erst den Test und implementieren dann die entsprechende Methode. Das hat einige Vorteile:

1) Man muss sich im Vorfeld Gedanken darüber machen, was die Methode können soll. Dadurch vermeidet man, dass die Methode unter Umständen mehr
   Aufgaben erfüllt als sie eigentlich soll.

2) Durch den Prozess „red-green-refactor“ schreibt man nur Code, der auch wirklich genutzt wird. Dadurch, dass jede Methode getestet wird,
   gibt es keine Implementierung im Projekt die nicht getestet ist.

3) Das „Refactoring“ wird durch diesen Ansatz sehr viel einfacher. Ein getesteter Code kann ohne Probleme angepasst werden; so lange
   entsprechende Tests nicht fehlschlagen, verhält sich die Methode auch nach den Änderungen wie erwartet.

***Im Wesentlichen legt TDD den Fokus auf das Vermeiden von unnötigem Code und der Implementierung gewünschten Verhaltens.***

## Vorbereitung

In diesem Projekt wird mit dem Framework "Jest" gearbeitet. Es bietet einige Funktionen, die das Arbeiten mit dem TDD-Design erleichtern.
Um sicher zu gehen, dass ein entsprechendes Modul installiert ist kann folgender Befehl im Terminal eingegeben werden:

```Terminal
  npm install jest
```
