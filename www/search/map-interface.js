function getTrajectoryData(searchId) {
  return {};
}

function removeSelectedSquare() {
  var http = new XMLHttpRequest();
  var url = "http://localhost:8080/squares";
  var params = "questId="+document.searchId;
  http.open('DELETE', url, true);
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http.send(params);
}

function setSelectedSquare(squareId) {
  var http = new XMLHttpRequest();
  var url = "http://localhost:8080/squares";
  var params = "number="+squareId+"&questId="+document.searchId;
  http.open('POST', url, true);
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http.send(params);
}

function getMyself() {
  document.currentUser = {
    name:'Павлюк Владимир Викторович',
    firstName:'Владимир',
    lastName:'Павлюк',
    level: 0
  };
}

function fillIn(name, value) {
  var field = document.getElementById(name);
  field.innerHTML = value;
}

function updateSearchCard(card) {
  fillIn('firstName', card.firstName);
  fillIn('dressHat', card.dressHat);
  fillIn('lastName', card.lastName);
  fillIn('dressTop', card.dressTop);
  fillIn('patronimicName', card.patronimicName);
  fillIn('dressBottom', card.dressBottom);
  fillIn('birthDate', card.birthDate);
  fillIn('dressShoes', card.dressShoes);
  fillIn('height', card.height);
  fillIn('specialMarks', card.specialMarks);
  fillIn('hairColor', card.hairColor);
  fillIn('desease', card.desease);
  fillIn('eyesColor', card.eyesColor);
  fillIn('lostDate', card.lostDate);
  fillIn('commentText', card.comment);
}

function getSearchCard(searchId, callback) {
  var http = new XMLHttpRequest();
  var url = "http://localhost:8080/quest?questId="+document.searchId;
  http.open('GET', url);
  http.send(params);
  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      var json = JSON.parse(http.responseText);
      document.card = {
        lostLat: 56.49,
        lostLon: 84.97,
        lostHoursAgo: 2,
        id: 0,
        firstName: json.firstName,
        lastName: json.lastName,
        patronimicName: json.secondName,
        dressHat: json.headdress,
        dressTop: json.clothesH,
        dressBottom: json.clothesM,
        dressShoes: json.clothesD,
        height: json.height,
        hairColor: json.hairColor,
        eyesColor: json.eyesColor,
        desease: json.illness,
        lostDate: json.lostDate,
        comment: json.comment
      };
    }
    if(document.card == undefined) {
      document.card = {
        lostLat: 56.49,
        lostLon: 84.97,
        lostHoursAgo: 2,
        id: 1,
        firstName: 'Константин',
        lastName: 'Кривцов',
        patronimicName: '&nbsp;',
        dressHat: 'без головного убора',
        dressTop: 'синяя куртка',
        dressBottom: '-',
        dressShoes: 'Кроссовки',
        height: '180-185 см',
        hairColor: '-',
        desease: '-',
        lostDate: '2019-06-05',
        birthDate: '1983-03-05',
        specialMarks: '&nbsp;',
        comment: '&nbsp;'
      };
    }
    updateSearchCard(document.card);
    callback();
  }

  return;
}

function getSquareData(searchId) {
  json = {
    '1': [
       {id:1,name:'Сергеев Сергей Сергеевич',phone:'89969999999',level:0}, 
       {id:2,name:'Степанов Степан Степанович',phone:'89969210293',level:0}, 
    ],
    '13': [
       {id:3,name:'Иванов Иван Иванович', phone: '89981238928',level:0}, 
       {id:4,name:'Сергеев Сергей Сергеевич',phone:'89969999999',level:0},
    ],
    '21': [
       {id:8,name:'Петров Петр Петрович',phone:'89982347989',level:0}, 
       {id:9,name:'Олегов Олег Олегович',phone:'89987234989',level:0}
    ],
    '18': [
       {id:10,name:'Павлюк Павел Павлович',phone:'81298347989',level:0}, 
       {id:11,name:'Данилюк Даниил Даниилович',phone:'89987234989',level:0}
    ],
    '42': [
       {id:12,name:'Алексеев Алексей Алексеевич',phone:'81298347989',level:0}, 
       {id:13,name:'Александров Александр Александрович',phone:'89987234989',level:0}
    ],
  };
  return json;
}

function submitText(evt) {
  if(evt.ctrlKey && evt.keyCode == 10) {
    t = document.getElementById('chatWindow');
    if(t.value !== '') {
      var user = document.currentUser;
      console.log(t.value);
      chat = document.getElementById('chat');
      chat.innerHTML = chat.innerHTML + '<b>' + user.lastName + ' ' + user.firstName + '&gt</b> ' + t.value + '</br>';
      chat.scrollTop = chat.scrollHeight;
      t.value = '';
    }
  }
}

function getArea(centerLat, centerLon, rad) {
  var zone = {
    startLat: centerLat,
    endLat: centerLat,
    startLon: centerLon,
    endLat: centerLon
  };
  var coordSystem = ymaps.coordSystem.geo;
  var res = coordSystem.solveDirectProblem([centerLat, centerLon], [-1, 0], rad);
  zone.startLat = res.endPoint[0];
  res = coordSystem.solveDirectProblem([centerLat, centerLon], [1, 0], rad);
  zone.endLat = res.endPoint[0];
  res = coordSystem.solveDirectProblem([centerLat, centerLon], [0, -1], rad);
  zone.startLon = res.endPoint[1];
  res = coordSystem.solveDirectProblem([centerLat, centerLon], [0, 1], rad);
  zone.endLon = res.endPoint[1];
  return zone;
}

function closeSelectSquare() {
  document.currentSquare = undefined;
  var div = document.getElementById("ActionWindow");
  div.style.display = 'none';
}

function selectSquare() {
  var div = document.getElementById("ActionWindow");
  div.style.display = 'none';
  div = document.getElementById("mapHolder");
  div.setAttribute("class", "selected");
  div = document.getElementById("footer");
  div.setAttribute("class", "selected");
  div = document.getElementById("card");
  div.setAttribute("class", "selected");
  var sid = document.getElementById("cardSquareId");
  sid.textContent = document.currentSquare.squareId;
  document.currentSquare.options.set('fill', true);
  document.currentSquare.options.set('fillColor', "#18FAFF");
  document.currentSquare.options.set('fillOpacity', 0.3);
  document.map.container.fitToViewport();
  var info = document.currentSquare.info;
  var coords = [info.start, info.end];
  document.map.setBounds(coords);
  setSelectedSquare(document.currentSquare.squareId);
}

function exitSearch() {
  var div = document.getElementById("mapHolder");
  div.setAttribute("class", "");
  div = document.getElementById("card");
  div.setAttribute("class", "");
  div = document.getElementById("footer");
  div.setAttribute("class", "");
  document.currentSquare.options.set('fill', false);
  document.currentSquare.options.set('fillColor', "#18FAFF");
  document.currentSquare.options.set('fillOpacity', 0.0);
  document.currentSquare = undefined;
  document.map.container.fitToViewport();
  var area = document.area;
  var coords = [[area.startLat, area.startLon], [area.endLat, area.endLon]];
  document.map.setBounds(coords);
  removeSelectedSquare();
}

function processClickSquare(square) {
  if(document.currentSquare != undefined) {
    return;
  }
  var div = document.getElementById("ActionWindow");
  document.currentSquare = square;
  div.style.display = 'block';
  var span = document.getElementById("selectNumSearchers");
  var sid = document.getElementById("selectSquareId");
  span.textContent = square.info.numSearchers;
  sid.textContent = square.squareId;

  var list = square.info.searchers || [];
  var content = '<ul>';

  var levels = ['Новичок', 'Профи'];

  for(var i = 0; i < list.length; i ++) {
    content = content + '<li><div class="item"><div>' + list[i].name + '</br>' + 
              list[i].phone + 
              ' <a href="tel:' + list[i].phone + '"><img style="height:18px; vertical-align:bottom;" src="call.png"></img></a>' +
              '</div></div></li>';
  }
  content = content + '</ul>';
  span = document.getElementById("selectListSearchers");
  span.innerHTML = content;
}

function processLeaveSquare(square) {
  var div = document.getElementById("SearchWindow");
  div.style.display = 'none';
}

function processHoverSquare(square) {
  if(document.currentSquare != undefined) {
    return;
  }
  var div = document.getElementById("SearchWindow");
  div.style.display = 'block';
  var span = document.getElementById("numSearchers");
  var sid = document.getElementById("squareId");
  var num = square.info.numSearchers;
  span.textContent = square.info.numSearchers;
  sid.textContent = square.squareId;

  var list = square.info.searchers || [];
  var content = '<ul>';

  for(var i = 0; i < list.length; i ++) {
    content = content + '<li>' + list[i].name + '</li>';
  }
  content = content + '</ul>';
  span = document.getElementById("listSearchers");
  span.innerHTML = content;
}

function zone(map, startLat, startLon, endLat, endLon, stepMetres, searchId) {
  var searchData = getSquareData(searchId);
  var coordSystem = ymaps.coordSystem.geo;
  var lenY = coordSystem.getDistance([startLat, startLon], [endLat, startLon]);
  var lenX = coordSystem.getDistance([startLat, startLon], [startLat, endLon]);
  var lineStringGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "LineString",
        coordinates: [[startLat, startLon], [startLat, endLon], [endLat, endLon], [endLat, startLon], [startLat, startLon]]
      }
    },
    {
      strokeWidth: 3,
      strokeColor: "#18FAFF"
    });
  map.geoObjects.add(lineStringGeoObject);
  var res = coordSystem.solveDirectProblem([startLat, startLon], [1, 0], stepMetres);
  var stepLat = res.endPoint[0] - startLat;
  res = coordSystem.solveDirectProblem([startLat, startLon], [0, 1], stepMetres);
  var origStepLon = res.endPoint[1] - startLon;
  var squareId = 1;
  console.log("endLat: ", endLat, "endLon:", endLon);
  for(var i = startLat; i < endLat;) {
    var stepLon = origStepLon;
    for(var j = startLon; j < endLon;) {
      console.log("Lat: ", i, " Lon: ", j);
      var lineStringGeoObject = new ymaps.GeoObject({
          geometry: {
            type: "Rectangle",
            coordinates: [[i, j], [i+stepLat, j+stepLon]]
          }
        },
        {
          strokeWidth: 1,
          strokeColor: "#18FAFF",
          fill: false
        }
      );
      lineStringGeoObject.squareId = squareId.toString();
      lineStringGeoObject.info = {numSearchers: 0};
      if(searchData[squareId.toString()] != undefined) {
        lineStringGeoObject.info.numSearchers = searchData[squareId.toString()].length;
      }
      lineStringGeoObject.info.searchers = searchData[squareId.toString()];
      lineStringGeoObject.info.start = [i, j];
      lineStringGeoObject.info.end = [i+stepLat, j+stepLon];

      lineStringGeoObject.events.add('mouseenter', function(obj) {
        processHoverSquare(obj.originalEvent.target);
      });
      lineStringGeoObject.events.add('mouseleave', function(obj) {
        processLeaveSquare(obj.originalEvent.target);
      });
      lineStringGeoObject.events.add('click', function(obj) {
        processClickSquare(obj.originalEvent.target);
      });
      map.geoObjects.add(lineStringGeoObject);

      j += stepLon;
      res = coordSystem.solveDirectProblem([i, j], [0, 1], stepMetres);
      stepLon = res.endPoint[1] - j;
      stepLon = Math.min(endLon-j, stepLon);
      console.log(stepLon);
      squareId ++;
    }
    i += stepLat;
    res = coordSystem.solveDirectProblem([i, startLon], [1, 0], stepMetres);
    stepLat = res.endPoint[0] - i;
    stepLat = Math.min(endLat-i, stepLat);
  }
}

ymaps.ready(function () {
  var map = new ymaps.Map("YMapsView", {
    center: [56.49, 84.97],
    zoom: 11.5
  });
  params = getParameters();
  getMyself();
  document.searchId = params['searchId'];
  document.map = map;
  getSearchCard(document.searchId, function() {
    var area = getArea(document.card.lostLat, document.card.lostLon, 5000 * document.card.lostHoursAgo);
    document.area = area;
    zone(map, area.startLat, area.startLon, area.endLat, area.endLon, 2000);
    var coords = [[area.startLat, area.startLon], [area.endLat, area.endLon]];
    document.map.setBounds(coords);
  });
});

function getParameters() {
  var result = {}, tmp = [];
  location.search
          .substr(1)
          .split("&")
          .forEach(function (item) {
            tmp = item.split("=");
            result[tmp[0]] = decodeURIComponent(tmp[1]);
          });
  return result;
}
