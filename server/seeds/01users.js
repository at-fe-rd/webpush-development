var mongoose = require('mongoose');
var User = require('../src/models/user');

User.create(
  [{
    '_id': 1,
    'name': 'Kirk',
    'phone': '9405553779',
    'gender': 1
  },
  {
    '_id': 2,
    'name': 'Quan Tom',
    'phone': '9405553779',
    'gender': 1
  },
  {
    '_id': 3,
    'name': 'Peter Parker',
    'phone': '9405553779',
    'gender': 1
  },
  {
    '_id': 4,
    'name': 'Venom',
    'phone': '9405553779',
    'gender': 1
  },
  {
    '_id': 5,
    'name': 'Marvel',
    'phone': '9405553779',
    'gender': 1
  },
  {
    '_id': 6,
    'name': 'Thor',
    'phone': '9405553779',
    'gender': 1
  },
  {
    '_id': 7,
    'name': 'Tonny Stark',
    'phone': '9405553779',
    'gender': 1
  },
  {
    '_id': 8,
    'name': 'Spider man',
    'phone': '9405553779',
    'gender': 1
  },
  {
    '_id': 9,
    'name': 'Captian America',
    'phone': '9405553779',
    'gender': 1
  }
], function (err, user) {
  console.log(12, 'Done Seeds For Users');
})
