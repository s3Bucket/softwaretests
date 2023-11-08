const assert = require('assert');
const cucumber = require('@cucumber/cucumber');

cucumber.When("the greeting method is called with the name {string}", function (name) {
  this.result = "Hello " + name;
});

cucumber.Then("it should return the greeting phrase Hello {string}",function (name) {
    assert.equal(this.result, "Hello " + name);
  }
);
