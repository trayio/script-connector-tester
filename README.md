# Tray.io Script Connector Tester

This is a tool to test a script that is intended for the Tray.io Script connector.  You can use it to quickly debug and modify a script, based on a standard input.

# Usage

First, you need to copy some example input JSON into `input.json`.  This should be in the exact format that the connector receives this, so its best to do a test run within the workflow builder and then copy the whole input JSON from the debug logs. Then add your actual Javascript code to `script.js`.

Make sure to run `npm install` on the repo to install dependencies.

Finally run `node run.js` to test your `script.js` with the `input.json`
 
