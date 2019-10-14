var mongoose = require('mongoose');
var Location = require('../src/models/location');

Location.create(
  [{
    "_id": 1,
    "lng" : 108.223168,
    "lat" : 16.081414,
    "type_id" : 1,
    "place" : {
      "name_place" : "Restaurant",
      "detail" : "Madam",
      "average_rating" : 4,
      "direction" : "EA",
      "people_rating" : 12,
      "address" : "43 street",
      "warning" : 0
    }
  },
  {
    "_id": 2,
    "lng" : 108.225168,
    "lat" : 16.081414,
    "type_id" : 1,
    "place" : {
      "name_place" : "Hotel",
      "detail" : "California",
      "average_rating" : 6,
      "direction" : "NE",
      "people_rating" : 13,
      "address" : "43 street 1",
      "warning" : 1
    }
  },
  {
    "_id": 3,
    "lng" : 108.225168,
    "lat" : 16.082414,
    "type_id" : 1,
    "place" : {
      "name_place" : "Hostel",
      "detail" : "New York",
      "average_rating" : 7,
      "direction" : "E",
      "people_rating" : 135,
      "address" : "45 street 2",
      "warning" : 1
    }
  },
  {
    "_id": 4,
    "lng" : 108.215168,
    "lat" : 16.083414,
    "type_id" : 3,
    "place" : {
      "name_place" : "Homestay",
      "detail" : "La Nha",
      "average_rating" : 7,
      "direction" : "NE",
      "people_rating" : 15,
      "address" : "433 street 5",
      "warning" : 1
    }
  },
  {
    "_id": 5,
    "lng" : 108.225268,
    "lat" : 16.091414,
    "type_id" : 2,
    "place" : {
      "name_place" : "La Cle",
      "detail" : "California",
      "average_rating" : 6,
      "direction" : "NE",
      "people_rating" : 13,
      "address" : "43 street 1",
      "warning" : 1
    }
  },
  {
    "_id": 6,
    "lng" : 108.229168,
    "lat" : 16.091414,
    "type_id" : 4,
    "place" : {
      "name_place" : "Super home",
      "detail" : "123",
      "average_rating" : 6,
      "direction" : "NE",
      "people_rating" : 13,
      "address" : "43 street 1",
      "warning" : 1
    }
  },
  {
    "_id": 7,
    "lng": 108.153918,
    "lat": 16.079892,
    "type_id": 1,
    "place": {
      "name_place": "Conway",
      "detail": "Amet pariatur exercitation elit eiusmod. Qui aute adipisicing ut commodo excepteur irure commodo excepteur velit voluptate duis cillum consectetur. Proident elit sint tempor incididunt consectetur laborum est ad incididunt tempor consectetur reprehenderit quis est. Cillum consequat consequat aliqua proident aute consequat non Lorem non Lorem aute ullamco.",
      "average_rating": 649,
      "direction": "EA",
      "people_rating": 841,
      "address": "615 Eldert Lane, Farmington, Colorado, 9824",
      "warning": 0
    }
  },
  {
    "_id": 8,
    "lng": 108.152798,
    "lat": 16.073952,
    "type_id": 4,
    "place": {
      "name_place": "Anastasia",
      "detail": "Do aliqua exercitation veniam sit quis qui dolor aliquip incididunt incididunt nisi. Deserunt eiusmod ad dolore dolor magna culpa tempor laborum. Enim voluptate est irure ad irure qui magna consequat ipsum voluptate nisi exercitation occaecat. Enim eu in sit irure eu. Dolor labore mollit nostrud quis voluptate id mollit irure nisi excepteur id duis. Est aliqua do et et ea officia.",
      "average_rating": 921,
      "direction": "EA",
      "people_rating": 375,
      "address": "357 Sullivan Place, Hackneyville, Missouri, 8198",
      "warning": 0
    }
  },
  {
    "_id": 9,
    "lng": 108.150626,
    "lat": 16.076839,
    "type_id": 1,
    "place": {
      "name_place": "Kerri",
      "detail": "Duis magna sit nostrud minim consectetur enim proident quis eu. Deserunt occaecat do ad ea et nostrud eu incididunt velit ad pariatur consectetur. Ut cupidatat est magna irure aliqua commodo tempor ipsum tempor ad voluptate ullamco dolor occaecat. Aliquip pariatur pariatur velit commodo pariatur pariatur excepteur anim nulla nostrud dolor cupidatat non. Veniam labore tempor qui est qui proident id commodo aliquip incididunt. Amet adipisicing consectetur consequat reprehenderit est eu ex commodo laborum.",
      "average_rating": 529,
      "direction": "EA",
      "people_rating": 775,
      "address": "621 Orient Avenue, Cedarville, Idaho, 4695",
      "warning": 0
    }
  },
  {
    "_id": 10,
    "lng": 108.158930,
    "lat": 16.075643,
    "type_id": 2,
    "place": {
      "name_place": "Chan",
      "detail": "Aliquip dolore mollit tempor nisi ut do enim id ipsum aliquip Lorem veniam pariatur. Mollit culpa laboris ex officia proident sunt excepteur id ipsum aliqua eiusmod nisi irure laborum. Incididunt proident consequat voluptate voluptate. Amet minim Lorem do sint ex incididunt voluptate est velit fugiat. Excepteur do nulla consequat sunt minim officia laboris. Quis consectetur aliquip mollit consectetur nostrud fugiat qui enim dolor incididunt nisi. Ullamco fugiat mollit ipsum Lorem ex id.",
      "average_rating": 558,
      "direction": "EA",
      "people_rating": 664,
      "address": "375 Sands Street, Kersey, Montana, 2014",
      "warning": 0
    }
  },
  {
    "_id": 11,
    "lng": 108.149038,
    "lat": 16.073375,
    "type_id": 3,
    "place": {
      "name_place": "Chris",
      "detail": "Eu voluptate tempor officia duis mollit anim fugiat adipisicing magna occaecat non do qui. Eiusmod voluptate laborum non cillum ut exercitation cillum duis voluptate voluptate labore sint. Dolore do irure id consequat irure consequat cillum aliquip dolor sunt incididunt occaecat.",
      "average_rating": 519,
      "direction": "EA",
      "people_rating": 705,
      "address": "650 Adams Street, Tuskahoma, Wisconsin, 8223",
      "warning": 0
    }
  },
  {
    "_id": 12,
    "lng": 108.148158,
    "lat": 16.080014,
    "type_id": 1,
    "place": {
      "name_place": "Rene",
      "detail": "Amet id tempor dolor ipsum officia ipsum qui ullamco. Consequat id id Lorem laborum dolor Lorem labore eiusmod nostrud amet. Reprehenderit nulla nisi voluptate culpa.",
      "average_rating": 955,
      "direction": "EA",
      "people_rating": 454,
      "address": "668 Ryder Street, Greer, Federated States Of Micronesia, 1591",
      "warning": 0
    }
  },
  {
    "_id": 13,
    "lng": 108.159531,
    "lat": 16.072591,
    "type_id": 4,
    "place": {
      "name_place": "Kim",
      "detail": "Voluptate velit consequat ipsum et. Esse magna magna do nostrud qui nisi pariatur. Sit id in in mollit qui ea voluptate qui adipisicing. Ea et aliqua excepteur eu laboris reprehenderit deserunt non. Pariatur ipsum consequat laborum minim ex eiusmod in magna in.",
      "average_rating": 644,
      "direction": "EA",
      "people_rating": 988,
      "address": "473 Forest Place, Camino, New Jersey, 6959",
      "warning": 0
    }
  },
  {
    "_id": 14,
    "lng": 108.223168,
    "lat": 16.081414,
    "type_id": 1,
    "place": {
      "name_place": "Morgan",
      "detail": "Quis veniam voluptate cupidatat ut mollit non est ut aliqua id ad occaecat commodo. Sunt ut quis anim amet reprehenderit irure incididunt ad aliquip commodo. Consequat aliquip occaecat cupidatat eu tempor consectetur. Officia nisi id reprehenderit id occaecat commodo est nisi et est mollit esse. Minim deserunt ea nostrud proident est excepteur. Aliquip velit nostrud aliquip excepteur culpa qui.",
      "average_rating": 690,
      "direction": "EA",
      "people_rating": 710,
      "address": "239 Madoc Avenue, Watchtower, Oregon, 3906",
      "warning": 0
    }
  },
  {
    "_id": 15,
    "lng": 108.161591,
    "lat":  16.078962,
    "type_id": 1,
    "place": {
      "name_place": "Grant",
      "detail": "Culpa occaecat labore enim aute tempor. Nostrud quis do fugiat sit reprehenderit est in eu ea. Nisi esse aliqua duis nisi nostrud aliquip mollit nostrud laboris velit reprehenderit sint non adipisicing. Excepteur anim nostrud reprehenderit aliquip ad non consectetur et quis Lorem voluptate. Adipisicing qui in velit amet irure proident in est. Irure aliquip excepteur voluptate minim nostrud.",
      "average_rating": 961,
      "direction": "EA",
      "people_rating": 140,
      "address": "257 Meadow Street, Hall, Nebraska, 9449",
      "warning": 0
    }
  }
], function (err, user) {
  console.log('Done Seeds For Locations');
})

