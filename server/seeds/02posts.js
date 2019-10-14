var mongoose = require('mongoose');
var Post = require('../src/models/post');
var PostLike = require('../src/models/postlike');
var Comment = require('../src/models/comment');
var Counter = require('../src/models/Counter');

Post.create(
  [
    {
      "content" : "Happy life ",
      "image" : "1538549474376.jpeg",
      "posted_by" : 1,
      "hashtag" : "#",
      "comment_counter" : 0,
      "likes" : 0,
    },
    {
      "content": "Sit velit exercitation fugiat id consequat irure proident officia fugiat excepteur ea. Velit est elit incididunt tempor nulla reprehenderit laborum est ullamco ut duis proident. Sunt veniam officia anim consectetur tempor et. Dolore nostrud et sint duis sint consequat commodo proident amet pariatur velit duis ex. Dolor minim laborum eiusmod incididunt nisi occaecat.",
      "image": "https://www.frommers.com/system/media_items/attachments/000/855/301/s500/Screenshot_2015-07-28_15.22.jpg",
      "posted_by": 1,
      "hashtag": '#incididunt,#enim,#exercitation,#deserunt,#Lorem',
      "comment_counter": 0,
      "likes": 0
    },
    {
      "content": "Nulla incididunt ullamco incididunt dolor voluptate pariatur. Dolor ea reprehenderit consectetur cillum officia ad tempor consequat sint ut. In esse elit pariatur ipsum reprehenderit ex culpa sint deserunt eiusmod officia ullamco proident. Veniam proident dolore excepteur sint aliquip.",
      "image": "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/campaign_images/webdr07/20/9/this-man-has-one-of-the-best-instagram-accounts-y-2-30616-1397999373-12_dblbig.jpg",
      "posted_by": 1,
      "hashtag": '#incididunt,#enim,#exercitation,#deserunt,#Lorem',
      "comment_counter": 0,
      "likes": 0
    },
    {
      "content": "Dolore reprehenderit est consectetur ex sit incididunt consectetur do id nostrud esse consectetur officia id. Nulla fugiat elit deserunt magna ullamco et. Duis aute duis esse magna. In mollit pariatur enim ea sunt nisi et elit sunt nostrud ea excepteur duis velit. Esse fugiat et laboris exercitation excepteur cupidatat dolor ea in laborum nisi in officia. Esse do occaecat voluptate in ea.",
      "image": "https://www.travellingking.com/wp-content/uploads/2018/01/13-of-the-Best-Instagram-photos-in-Paris-who-to-follow.png",
      "posted_by": 1,
      "hashtag": '#incididunt,#enim,#exercitation,#deserunt,#Lorem',
      "comment_counter": 0,
      "likes": 0
    },
    {
      "content": "Aliquip sunt dolor ipsum minim irure aliqua id esse pariatur. Voluptate consequat occaecat voluptate ipsum ex proident cupidatat fugiat. Minim amet ad consequat amet nulla incididunt deserunt et veniam tempor eiusmod elit. Labore dolore est Lorem do minim ullamco tempor deserunt id id culpa commodo anim laborum. Magna cupidatat ad nostrud sunt fugiat laborum anim veniam excepteur dolor. Veniam est dolore irure exercitation consectetur nostrud eu et ipsum nostrud deserunt ipsum culpa. Labore voluptate reprehenderit minim cupidatat ex nostrud cupidatat.",
      "image": "https://i.amz.mshcdn.com/UIXBi-ATK1K-DEStZq68SuAbURI=/fit-in/850x850/https%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fbest-instagram-images%2F1mattrubin.jpg",
      "posted_by": 1,
      "hashtag": '#incididunt,#enim,#exercitation,#deserunt,#Lorem',
      "comment_counter": 0,
      "likes": 0
    },
    {
      "content": "Ut enim nostrud laboris ullamco Lorem enim nostrud. Culpa sit fugiat labore deserunt et ad voluptate consequat cupidatat duis aute reprehenderit nisi. Elit veniam id Lorem laboris labore. Quis sit in consequat anim. Velit tempor Lorem dolor ullamco Lorem deserunt ad excepteur voluptate tempor ut ipsum cupidatat magna. Aliquip id qui cupidatat qui nulla excepteur commodo adipisicing cillum sunt tempor consectetur nulla.",
      "image": "http://1.bp.blogspot.com/-TBR7hNn8ETA/VZPHqe5xecI/AAAAAAAATfs/EM0kurKhGj0/s1600/Best%2BInstagram%2Baccounts%2Bto%2Bfollow.jpg",
      "posted_by": 1,
      "hashtag": '#incididunt,#enim,#exercitation,#deserunt,#Lorem',
      "comment_counter": 0,
      "likes": 0
    },
    {
      "content": "Laboris non ea deserunt non anim enim laboris in minim eu cillum nulla occaecat. Mollit labore proident mollit nostrud eiusmod. Et anim non aute dolore amet Lorem incididunt eu cillum anim. Pariatur incididunt consectetur qui magna eiusmod nisi exercitation duis.",
      "image": "1538549474376.jpeg",
      "posted_by": 1,
      "hashtag": '#incididunt,#enim,#exercitation,#deserunt,#Lorem',
      "comment_counter": 0,
      "likes": 0
    },
    {
      "content": "Aute pariatur minim ut qui elit enim duis. Sunt eiusmod enim proident excepteur fugiat culpa. Cupidatat consequat eiusmod in cillum nulla amet culpa fugiat. Laborum est minim dolore proident.",
      "image": "http://thestyletraveller.com/wp-content/uploads/2018/04/Facetune_18-04-2018-09-54-42-918x1024.jpg",
      "posted_by": 1,
      "hashtag": '#incididunt,#enim,#exercitation,#deserunt,#Lorem',
      "comment_counter": 0,
      "likes": 0
    },
    {
      "content": "Aliquip exercitation proident ad pariatur do aliqua sint duis excepteur deserunt. Amet incididunt nulla eu dolor. Consequat ipsum sit et culpa amet ut enim.",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrRSjbrSSTXtqBJfNJdyFXKteHNDsdmmmXeXlnnHslxn8ZauHwg",
      "posted_by": 1,
      "hashtag": '#incididunt,#enim,#exercitation,#deserunt,#Lorem',
      "comment_counter": 0,
      "likes": 0
    }
], function (err, posts) {
    console.log('Done Seeds For Posts');
    postLike = [];
    for (i=0; i<30; i++) {
      postLike.push(
        {
          "post_id" : posts[Math.floor(Math.random()*posts.length)]._id,
          "user_id" : Math.floor(Math.random()*8)
        })
    }

    PostLike.create(postLike, function (err, postlike) {
      console.log('Done Seeds For PostLikes');
    })

    Comment .create(
      [
      {
        "content": "Voluptate aliqua occaecat deserunt ex voluptate adipisicing est aute aute quis commodo do reprehenderit. Et occaecat velit occaecat irure anim ex velit laboris laborum. Esse elit aliqua cupidatat amet. Reprehenderit id dolor anim consequat velit ullamco. Incididunt incididunt elit commodo minim. In commodo excepteur ut velit cupidatat et pariatur.",
        "user_id": 3,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Ut deserunt elit irure ullamco labore. Id irure culpa enim esse ipsum ullamco ad nisi adipisicing et incididunt laborum ut. Sunt velit culpa cillum cupidatat nostrud qui voluptate ut sint ullamco voluptate minim.",
        "user_id": 8,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Minim eu ullamco excepteur non ipsum est sunt mollit incididunt id velit sit deserunt ad. Sit proident est sit elit laborum cillum exercitation ad excepteur qui id est pariatur. Tempor id deserunt sint deserunt et sunt sit in eu excepteur laboris. Officia eiusmod velit anim officia sit quis eu deserunt mollit sit aliquip. Lorem sit tempor veniam Lorem.",
        "user_id": 3,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Consequat nisi culpa sit esse veniam dolor eiusmod. Incididunt consectetur ad est ea velit ea laborum laboris cillum incididunt esse officia esse sit. Velit pariatur officia sint officia eu in tempor veniam consectetur. Veniam eiusmod incididunt irure laborum fugiat. Mollit sunt duis do veniam aliquip. Aliqua eiusmod et nulla non aliquip tempor labore eiusmod mollit consectetur.",
        "user_id": 8,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Reprehenderit ea et aliquip quis elit consectetur ex enim veniam ipsum cupidatat. Duis anim laborum proident ut. Ex adipisicing Lorem labore quis do nostrud dolor incididunt. Lorem esse tempor occaecat proident duis ut mollit.",
        "user_id": 2,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Esse ea amet nostrud ad occaecat veniam sit laborum in mollit proident non labore. Excepteur esse aute eiusmod laborum sint elit occaecat eu enim Lorem ad. Cillum in dolor veniam incididunt velit voluptate minim fugiat irure laboris ex.",
        "user_id": 9,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Mollit duis cillum labore pariatur voluptate elit. Dolor exercitation incididunt laborum fugiat cupidatat minim sunt mollit non fugiat. Minim anim do mollit consequat qui nostrud irure irure amet cillum ullamco. Mollit id consectetur qui ex amet pariatur eu cupidatat mollit ea adipisicing adipisicing. Laboris consequat aliqua veniam sit occaecat.",
        "user_id": 1,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Sunt ex eu exercitation tempor aliqua proident mollit sint. Est anim aliquip fugiat dolor esse cillum exercitation quis est. Mollit laborum dolor eiusmod ea ex adipisicing sint veniam. Magna excepteur pariatur occaecat exercitation eiusmod non fugiat laborum. Amet deserunt consequat dolor exercitation do consequat. Et eiusmod dolor laboris consectetur et nulla occaecat veniam deserunt do dolore aliquip dolor.",
        "user_id": 1,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Duis et adipisicing sint veniam aliqua nisi in. Consectetur voluptate labore non nostrud duis. Do qui dolor voluptate et laboris pariatur non ipsum consectetur laboris. Qui voluptate laboris Lorem veniam et sint reprehenderit enim enim. Labore excepteur eiusmod voluptate consectetur labore mollit amet. Et duis elit dolor mollit incididunt. Cillum dolor ut deserunt dolor excepteur elit esse commodo sint.",
        "user_id": 3,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Consequat voluptate nisi fugiat magna laboris magna mollit laborum laboris in. Id cillum consectetur Lorem qui deserunt eiusmod adipisicing anim qui sunt aute voluptate. Ea pariatur eu sunt sunt.",
        "user_id": 7,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Fugiat excepteur deserunt veniam exercitation irure amet cillum. Elit do nisi magna do nulla ullamco mollit commodo amet. Deserunt culpa ipsum Lorem quis in id Lorem non consectetur aute voluptate duis.",
        "user_id": 1,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Sunt reprehenderit nulla nisi elit fugiat. Ut nulla nulla veniam tempor. Laborum fugiat amet aliqua qui ipsum eu. Sit proident excepteur cillum id eiusmod sunt incididunt aute incididunt qui consequat. Culpa proident consectetur non ex sint proident cillum magna. Cupidatat dolor cupidatat incididunt duis ipsum dolor occaecat magna est commodo.",
        "user_id": 4,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Commodo aliqua voluptate duis amet sunt sint ex in labore voluptate ex. Eiusmod consequat nisi occaecat adipisicing veniam anim. Tempor do minim mollit excepteur qui. Adipisicing laborum in esse sint laboris ut nulla nostrud sit id deserunt labore eiusmod aliquip. Consequat quis sunt est et in.",
        "user_id": 4,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Sunt laborum laboris est voluptate qui qui duis nostrud nulla. Voluptate pariatur cillum labore ullamco do do voluptate excepteur id do voluptate deserunt magna adipisicing. Excepteur veniam adipisicing enim laboris nisi culpa sint do aliquip. Laboris esse in eiusmod minim. Eiusmod sint in fugiat occaecat. Anim velit id sint ullamco do anim minim aute Lorem enim excepteur cillum exercitation excepteur. Dolor do consectetur proident quis dolore elit mollit.",
        "user_id": 3,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Occaecat do duis ut adipisicing qui magna esse deserunt. Consequat eu nulla labore quis est aute et aliquip ex sunt ex. Ullamco adipisicing ut reprehenderit officia laborum dolor ad ullamco et veniam laboris. Eiusmod ut id velit deserunt nisi aliqua mollit.",
        "user_id": 6,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Tempor ex excepteur quis aute irure qui mollit aliqua eu mollit veniam irure et. Nulla esse veniam labore dolor. Labore est non dolor labore. Et exercitation est consectetur consectetur velit eu ex cillum fugiat consequat Lorem.",
        "user_id": 5,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Velit minim ut nisi est deserunt deserunt anim do irure esse velit incididunt enim magna. Tempor fugiat anim sunt labore laborum adipisicing duis excepteur commodo ullamco Lorem duis sit. Deserunt ea laboris magna ea exercitation velit tempor minim. Est et laborum Lorem anim adipisicing sint dolor ad consectetur magna magna. Magna dolor anim ex esse qui ipsum.",
        "user_id": 4,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Incididunt excepteur adipisicing magna incididunt cupidatat esse. Quis nulla aute consequat est excepteur in. Anim elit eu eu eu nisi reprehenderit labore quis excepteur quis. Adipisicing commodo duis est aliquip laboris. Ullamco voluptate fugiat adipisicing nisi ea.",
        "user_id": 5,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      },
      {
        "content": "Reprehenderit et veniam tempor tempor laborum cillum in commodo veniam eu elit incididunt aliquip culpa. Ad cillum dolor magna et commodo laboris anim voluptate minim nostrud laboris id irure. Occaecat duis nulla sunt consectetur deserunt dolor pariatur do. Adipisicing commodo sint ex nostrud nostrud.",
        "user_id": 5,
        "post_id": posts[Math.floor(Math.random()*posts.length)]._id,
        "likes": 0
      }
    ], function (err, comment) {
      console.log('Done Seeds For Comments');
    })
    Counter.findOneAndUpdate({_id: 'userid'}, { $set: { sequence_value: 101 }}, {upsert: true, new: true}, function (err, comment) {
      console.log('Fix User Id');
    })
    Counter.findOneAndUpdate({_id: 'locationid'}, { $set: { sequence_value: 101 }}, {upsert: true, new: true}, function (err, comment) {
      console.log('Fix Location Id');
    })
  })

