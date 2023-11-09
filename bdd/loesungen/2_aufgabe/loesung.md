# Lösung: "Zweite Aufgabe"

## 1. Schreiben eine Features

1) Schreibe in  die 'calculator.feature' Datei ein Feature zur Berechnung von Zahlen.
  1.1) Schreibe ein Szenario, bei dem zwei Zahlen addiert werden.

```JavaScript
  Feature: Calculating
  
    Scenario: Add two numbers
      When we add the numbers 5 and 8
      Then it should return a sum of 13 
```

2) Implementiere die entsprechenden Methoden in der 'calculatorSteps.js" Datei. Denke an die Importe und die richtigen Aufrufe.
   Der Übergabeparameter ist diesmal kein {string}, sondern zwei mal ein {int}.

```JavaScript
  const assert = require('assert');
  const cucumber = require('cucumber');

  cucumber.When("we add the numbers {int} and {int}", function (firstNo, secNo) {
    this.addition = firstNo + secNo;
  });

  cucumber.Then("it should return a sum of {int}",function (expectedResponse) {
      assert.equal(this.addition, expectedResponse);
    }
  );
```
