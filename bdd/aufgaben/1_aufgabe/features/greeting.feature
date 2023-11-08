Feature: Begrüßung

	Scenario: Begrüßung der Teilnehmer
		When the greeting method is called with the name "Colin"
		Then it should return the greeting phrase Hello "Colin"