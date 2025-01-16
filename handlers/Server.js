/** Connecting to Mongo DB */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/order-management', { useNewUrlParser: true, useUnifiedTopology: true });
const Order = require('../models/Order');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secret } = require('../config');
const { response } = require('express');
const { json } = require('body-parser');
const { json } = require('express');
