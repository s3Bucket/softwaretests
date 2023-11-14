# Erste Aufgabe

In diesem Ordner befindet sich ein Beispiel für das Vorgehen bei Frontend-Tests mit Selenium. Versuche die Struktur zu verstehen und
wie die Komponenten miteinander interagieren. Es muss noch kein eigener Code geschrieben werden, aber es sollen
einige Werte geändert werden, um zu sehen, wie sich die Tests verhalten.

> Zum Ausführen der Tests muss folgender Befehl im Hauptverzeichnis eingegeben werden:

```JavaScript
npm test ./selenium/aufgaben/1_aufgabe/selenium.test.js
```

## 1. Verständnis für den Aufbau eines Tests

### Testaufbau

1) Wofür steht der Begriff 'async' ? Was ist der Unterschied zu einer Methode ohne diesen Wert?
2) Was macht der Befehl ***driver.get('https://www.google.de');***?
3) Was macht der Befehl ***findElement(webdriver.By.id("L2AGLb"));***?
4) Was macht der Befehl ***.sendKeys(webdriver.Key.RETURN);***?
5) Was macht der Befehl ***driver.getTitle();***?
6) Was macht der Befehl ***driver.quit();***?
7) Was passiert, wenn man in der Zeile ***let driver = await new webdriver.Builder().forBrowser("chrome").build();*** statt 'chrome' 'firefox' schreibt?
