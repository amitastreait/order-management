/** Create reusable method for connecting with Salesforce */
const { response } = require('express');
const { json } = require('body-parser');
const { json } = require('express');
const { secret } = require('../config');
/** Use Jsforce */
const jsforce = require('jsforce');
const conn = new jsforce.Connection();
const { response } = require('express');
const { json } = require('body-parser');