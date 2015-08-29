var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:verse', function(req, res, next) {
  var verse = req.params.verse;
  if (verse == 'verse1') {
    res.render('index', {
      title: 'Verse 1',
      lyrics: "This is the song that doesn't end",
      next: "http://localhost:3000/verse2",
      img: "http://rophydoes.rintin.com/wp-content/uploads/2011/01/lambchop1.jpg"
    });
  }
  if (verse == 'verse2') {
    res.render('index', {
      title: 'Verse 2',
      lyrics: "It just goes on and on my friends",
      next: "http://localhost:3000/verse3",
      img: "http://i.ytimg.com/vi/1_47KVJV8DU/mqdefault.jpg"
    });
  }
  if (verse == 'verse3') {
    res.render('index', {
      title: 'Verse 3',
      lyrics: "And they'll continue singing it forever just because...",
      next: "http://localhost:3000/verse4",
      img: "http://media-cache-ak0.pinimg.com/236x/4d/61/6c/4d616c5f67a37d1b7db7acc79a3dcf03.jpg"
    });
  }
  if (verse == 'verse4') {
    res.render('index', {
      title: 'Verse 4',
      lyrics: "Some people started singing it not knowing what it was",
      next: "http://localhost:3000/verse1",
      img: "http://media-cache-ak0.pinimg.com/236x/75/a1/d4/75a1d4cba1954c1abee9b4bd85d21de9.jpg"
    });
  }
});



module.exports = router;
