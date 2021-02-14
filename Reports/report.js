$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComposeFunction.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Compose function validity",
  "description": "",
  "id": "gmail-compose-function-validity",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "TC01_Verifying Compose function availability and position",
  "description": "",
  "id": "gmail-compose-function-validity;tc01-verifying-compose-function-availability-and-position",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User should be \"Gmail2\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cEmail Address\u003e\" in the \"EmailAddress\" inputbox on \"Login\" page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks \"Next\" button on \"Login\" page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cPassword\u003e\" in the \"Password\" inputbox on \"Login\" page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks \"Next\" button on \"Login\" page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User validates \"Compose\" button is \"below\" the \"Menu\" button on \"Home\" page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And User clicks \"Next\" button on \"Login\" page"
    }
  ],
  "line": 13,
  "name": "User upload \"\u003cfilepath here\u003e\" document",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "gmail-compose-function-validity;tc01-verifying-compose-function-availability-and-position;",
  "rows": [
    {
      "cells": [
        "Email Address",
        "Password"
      ],
      "line": 17,
      "id": "gmail-compose-function-validity;tc01-verifying-compose-function-availability-and-position;;1"
    },
    {
      "cells": [
        "sagarubidwe100@gmail.com",
        "\u0026Lspf07g"
      ],
      "line": 18,
      "id": "gmail-compose-function-validity;tc01-verifying-compose-function-availability-and-position;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "TC01_Verifying Compose function availability and position",
  "description": "",
  "id": "gmail-compose-function-validity;tc01-verifying-compose-function-availability-and-position;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User launches \"Gmail\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User should be \"Gmail2\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User enters \"sagarubidwe100@gmail.com\" in the \"EmailAddress\" inputbox on \"Login\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User clicks \"Next\" button on \"Login\" page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u0026Lspf07g\" in the \"Password\" inputbox on \"Login\" page",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks \"Next\" button on \"Login\" page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User validates \"Compose\" button is \"displayed\" on \"Home\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User validates \"Compose\" button is \"below\" the \"Menu\" button on \"Home\" page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#And User clicks \"Next\" button on \"Login\" page"
    }
  ],
  "line": 13,
  "name": "User upload \"\u003cfilepath here\u003e\" document",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail",
      "offset": 15
    }
  ],
  "location": "gmailComposeStepDef.user_launches_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gmail2",
      "offset": 16
    }
  ],
  "location": "gmailComposeStepDef.user_should_be_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sagarubidwe100@gmail.com",
      "offset": 13
    },
    {
      "val": "EmailAddress",
      "offset": 47
    },
    {
      "val": "Login",
      "offset": 74
    }
  ],
  "location": "gmailComposeStepDef.user_enters_in_the_inputbox_on_page(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 13
    },
    {
      "val": "Login",
      "offset": 30
    }
  ],
  "location": "gmailComposeStepDef.user_clicks_button_on_page(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0026Lspf07g",
      "offset": 13
    },
    {
      "val": "Password",
      "offset": 31
    },
    {
      "val": "Login",
      "offset": 54
    }
  ],
  "location": "gmailComposeStepDef.user_enters_in_the_inputbox_on_page(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 13
    },
    {
      "val": "Login",
      "offset": 30
    }
  ],
  "location": "gmailComposeStepDef.user_clicks_button_on_page(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose",
      "offset": 16
    },
    {
      "val": "displayed",
      "offset": 36
    },
    {
      "val": "Home",
      "offset": 51
    }
  ],
  "location": "gmailComposeStepDef.user_validates_button_is_on_page(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Compose",
      "offset": 16
    },
    {
      "val": "below",
      "offset": 36
    },
    {
      "val": "Menu",
      "offset": 48
    },
    {
      "val": "Home",
      "offset": 65
    }
  ],
  "location": "gmailComposeStepDef.user_validates_button_is_the_button_on_page(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});