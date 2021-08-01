// FEATURES DATA IN TABS
angular.module("vikingApp").service("displayFeatures", function() {
    var featureObj = {
        // DECK FEATURES
        deckA: [ "Medical Center" ],
        deck1: [ "The Spa", "The Viking Living Room", "Guest Services", "Fitness Center", "Viking Bar" ],
        deck2: [ "The Theatre & Bar", "Cinema 1 & 2", "Torshavn", "The Shops", "Atrium" ],
        deck3: [ "Staterooms 3000 - 3097", "Self-service launderette", "Atrium (top level)" ],
        deck4: [ "Staterooms 4000 - 4123"],
        deck5: [ "Staterooms 5000 - 5111", "Self-service launderette" ],
        deck6: [ "Navigational Bridge", "Staterooms 6000-6099", "Self-service launderette", "Staterooms 6020 & 6021 are ADA staterooms. Room configuration varies; ask for details" ],
        deck7: [ "Main Pool (with retractable roof)", "Explorers' Lounge (main level)", "Wintergarden", "Aquavit Terrace (with al fresco dining)", "Infinity Pool & Hot Tub" ],
        deck8: [ "Staterooms 8000-8019", "Explorers' Lounge (upper level)" ],
        deck9: [ "Outdoor Gym & Yoga Area" ],
        // CREATE LIST OF ARRAY ELEMENTS
        createList: function features(elems, deckNum) {
            var sum = "<ul>";
            for (var i = 0; i < elems.length; i++) {
                sum += "<li>" + elems[i] + "</li>";
            }
            sum += "</ul>";
            items.innerHTML = sum;
        }
    };
    return featureObj;
});

angular.module("vikingApp").service("divService", function() {
    var myObj = {
        // IMAGE GALLERY PICS & THUMBS
        galleryPics: {
            vikingRoom: [ "https://assets.codepen.io/1470716/1.jpg", "https://assets.codepen.io/1470716/2.jpg", "https://assets.codepen.io/1470716/3.jpg", "https://assets.codepen.io/1470716/4.jpg,", "https://assets.codepen.io/1470716/5.jpg" ],
                theSpa: [ "https://assets.codepen.io/1470716/6.jpg", "https://assets.codepen.io/1470716/7.jpg", "https://assets.codepen.io/1470716/8.jpg", "https://assets.codepen.io/1470716/9.jpg", "https://assets.codepen.io/1470716/10.jpg" ],
             vikingBar: [ "https://assets.codepen.io/1470716/11.jpg", "https://assets.codepen.io/1470716/12.jpg", "https://assets.codepen.io/1470716/13.jpg", "https://assets.codepen.io/1470716/14.jpg", "https://assets.codepen.io/1470716/15.jpg" ],
         theRestaurant: [ "https://assets.codepen.io/1470716/16.jpg", "https://assets.codepen.io/1470716/17.jpg", "https://assets.codepen.io/1470716/18.jpg", "https://assets.codepen.io/1470716/19.jpg", "https://assets.codepen.io/1470716/20.jpg" ],
             theAtrium: [ "https://assets.codepen.io/1470716/21.jpg", "https://assets.codepen.io/1470716/22.jpg", "https://assets.codepen.io/1470716/23.jpg", "https://assets.codepen.io/1470716/24.jpg", "https://assets.codepen.io/1470716/25.jpg" ],
               theater: [ "https://assets.codepen.io/1470716/26.jpg", "https://assets.codepen.io/1470716/27.jpg", "https://assets.codepen.io/1470716/28.jpg", "https://assets.codepen.io/1470716/29.jpg", "https://assets.codepen.io/1470716/30.jpg" ],
            dkThreeOne: [ "https://assets.codepen.io/1470716/31.jpg", "https://assets.codepen.io/1470716/32.jpg", "https://assets.codepen.io/1470716/33.jpg", "https://assets.codepen.io/1470716/34.jpg", "https://assets.codepen.io/1470716/35.jpg" ],
            dkThreeTwo: [ "https://assets.codepen.io/1470716/36.jpg", "https://assets.codepen.io/1470716/37.jpg", "https://assets.codepen.io/1470716/38.jpg", "https://assets.codepen.io/1470716/39.jpg", "https://assets.codepen.io/1470716/40.jpg" ],
          dkThreeThree: [ "https://assets.codepen.io/1470716/41.jpg", "https://assets.codepen.io/1470716/42.jpg", , "https://assets.codepen.io/1470716/43.jpg", "https://assets.codepen.io/1470716/44.jpg", "https://assets.codepen.io/1470716/45.jpg" ],
           dkThreeFour: [ "https://assets.codepen.io/1470716/46.jpg", "https://assets.codepen.io/1470716/47.jpg", "https://assets.codepen.io/1470716/48.jpg", "https://assets.codepen.io/1470716/49.jpg", "https://assets.codepen.io/1470716/50.jpg" ],
           dkThreeFive: [ "https://assets.codepen.io/1470716/51.jpg", "https://assets.codepen.io/1470716/52.jpg", "https://assets.codepen.io/1470716/53.jpg", "https://assets.codepen.io/1470716/54.jpg", "https://assets.codepen.io/1470716/55.jpg" ],
            dkThreeSix: [ "https://assets.codepen.io/1470716/56.jpg", "https://assets.codepen.io/1470716/57.jpg", "https://assets.codepen.io/1470716/58.jpg", "https://assets.codepen.io/1470716/59.jpg", "https://assets.codepen.io/1470716/60.jpg" ],
             dkFourOne: [ "https://assets.codepen.io/1470716/61.jpg", "https://assets.codepen.io/1470716/62.jpg", "https://assets.codepen.io/1470716/63.jpg", "https://assets.codepen.io/1470716/64.jpg", "https://assets.codepen.io/1470716/65.jpg" ],
             dkFourTwo: [ "https://assets.codepen.io/1470716/66.jpg", "https://assets.codepen.io/1470716/67.jpg", "https://assets.codepen.io/1470716/68.jpg", "https://assets.codepen.io/1470716/69.jpg", "https://assets.codepen.io/1470716/70.jpg" ],
           dkFourThree: [ "https://assets.codepen.io/1470716/71.jpg", "https://assets.codepen.io/1470716/72.jpg", "https://assets.codepen.io/1470716/73.jpg", "https://assets.codepen.io/1470716/74.jpg", "https://assets.codepen.io/1470716/75.jpg" ],
            dkFourFour: [ "https://assets.codepen.io/1470716/76.jpg", "https://assets.codepen.io/1470716/77.jpg", "https://assets.codepen.io/1470716/78.jpg", "https://assets.codepen.io/1470716/79.jpg", "https://assets.codepen.io/1470716/80.jpg" ],
            dkFourFive: [ "https://assets.codepen.io/1470716/81.jpg", "https://assets.codepen.io/1470716/82.jpg", "https://assets.codepen.io/1470716/83.jpg", "https://assets.codepen.io/1470716/84.jpg", "https://assets.codepen.io/1470716/85.jpg" ],
             dkFourSix: [ "https://assets.codepen.io/1470716/86.jpg", "https://assets.codepen.io/1470716/87.jpg", "https://assets.codepen.io/1470716/88.jpg", "https://assets.codepen.io/1470716/89.jpg", "https://assets.codepen.io/1470716/90.jpg" ],
             dkFiveOne: [ "https://assets.codepen.io/1470716/91.jpg", "https://assets.codepen.io/1470716/92.jpg", "https://assets.codepen.io/1470716/93.jpg", "https://assets.codepen.io/1470716/94.jpg", "https://assets.codepen.io/1470716/95.jpg" ],
             dkFiveTwo: [ "https://assets.codepen.io/1470716/96.jpg", "https://assets.codepen.io/1470716/97.jpg", "https://assets.codepen.io/1470716/98.jpg", "https://assets.codepen.io/1470716/99.jpg", "https://assets.codepen.io/1470716/100.jpg" ],
           dkFiveThree: [ "https://assets.codepen.io/1470716/1.jpg", "https://assets.codepen.io/1470716/2.jpg", "https://assets.codepen.io/1470716/3.jpg", "https://assets.codepen.io/1470716/4.jpg", "https://assets.codepen.io/1470716/5.jpg" ],
            dkFiveFour: [ "https://assets.codepen.io/1470716/6.jpg", "https://assets.codepen.io/1470716/7.jpg", "https://assets.codepen.io/1470716/8.jpg", "https://assets.codepen.io/1470716/9.jpg", "https://assets.codepen.io/1470716/10.jpg" ],
            dkFiveFive: [ "https://assets.codepen.io/1470716/11.jpg", "https://assets.codepen.io/1470716/12.jpg", "https://assets.codepen.io/1470716/13.jpg", "https://assets.codepen.io/1470716/14.jpg", "https://assets.codepen.io/1470716/15.jpg" ],
             dkFiveSix: [ "https://assets.codepen.io/1470716/16.jpg", "https://assets.codepen.io/1470716/17.jpg", "https://assets.codepen.io/1470716/18.jpg", "https://assets.codepen.io/1470716/19.jpg", "https://assets.codepen.io/1470716/20.jpg" ],
           dkFiveSeven: [ "https://assets.codepen.io/1470716/21.jpg", "https://assets.codepen.io/1470716/22.jpg", "https://assets.codepen.io/1470716/23.jpg", "https://assets.codepen.io/1470716/24.jpg", "https://assets.codepen.io/1470716/25.jpg" ],
              dkSixOne: [ "https://assets.codepen.io/1470716/26.jpg", "https://assets.codepen.io/1470716/27.jpg", "https://assets.codepen.io/1470716/28.jpg", "https://assets.codepen.io/1470716/29.jpg", "https://assets.codepen.io/1470716/30.jpg" ],
              dkSixTwo: [ "https://assets.codepen.io/1470716/31.jpg", "https://assets.codepen.io/1470716/32.jpg", "https://assets.codepen.io/1470716/33.jpg", "https://assets.codepen.io/1470716/34.jpg", "https://assets.codepen.io/1470716/35.jpg" ],
            dkSixThree: [ "https://assets.codepen.io/1470716/36.jpg", "https://assets.codepen.io/1470716/37.jpg", "https://assets.codepen.io/1470716/38.jpg", "https://assets.codepen.io/1470716/39.jpg", "https://assets.codepen.io/1470716/40.jpg" ],
             dkSixFour: [ "https://assets.codepen.io/1470716/41.jpg", "https://assets.codepen.io/1470716/42.jpg", "https://assets.codepen.io/1470716/43.jpg", "https://assets.codepen.io/1470716/44.jpg", "https://assets.codepen.io/1470716/45.jpg" ],
            dkSevenOne: [ "https://assets.codepen.io/1470716/46.jpg", "https://assets.codepen.io/1470716/47.jpg", "https://assets.codepen.io/1470716/48.jpg", "https://assets.codepen.io/1470716/49.jpg", "https://assets.codepen.io/1470716/50.jpg" ],
            dkSevenTwo: [ "https://assets.codepen.io/1470716/51.jpg", "https://assets.codepen.io/1470716/52.jpg", "https://assets.codepen.io/1470716/53.jpg","https://assets.codepen.io/1470716/54.jpg", "https://assets.codepen.io/1470716/55.jpg" ],
          dkSevenThree: [ "https://assets.codepen.io/1470716/56.jpg", "https://assets.codepen.io/1470716/57.jpg", "https://assets.codepen.io/1470716/58.jpg", "https://assets.codepen.io/1470716/59.jpg", "https://assets.codepen.io/1470716/60.jpg" ],
           dkSevenFour: [ "https://assets.codepen.io/1470716/61.jpg", "https://assets.codepen.io/1470716/62.jpg", "https://assets.codepen.io/1470716/63.jpg", "https://assets.codepen.io/1470716/64.jpg", "https://assets.codepen.io/1470716/65.jpg" ],
           dkSevenFive: [ "https://assets.codepen.io/1470716/66.jpg", "https://assets.codepen.io/1470716/67.jpg", "https://assets.codepen.io/1470716/68.jpg", "https://assets.codepen.io/1470716/69.jpg", "https://assets.codepen.io/1470716/70.jpg" ],
            dkSevenSix: [ "https://assets.codepen.io/1470716/71.jpg", "https://assets.codepen.io/1470716/72.jpg", "https://assets.codepen.io/1470716/73.jpg", "https://assets.codepen.io/1470716/74.jpg", "https://assets.codepen.io/1470716/75.jpg" ],
          dkSevenSeven: [ "https://assets.codepen.io/1470716/76.jpg", "https://assets.codepen.io/1470716/77.jpg", "https://assets.codepen.io/1470716/78.jpg", "https://assets.codepen.io/1470716/79.jpg", "https://assets.codepen.io/1470716/80.jpg" ],
          dkSevenEight: [ "https://assets.codepen.io/1470716/81.jpg", "https://assets.codepen.io/1470716/82.jpg", "https://assets.codepen.io/1470716/83.jpg", "https://assets.codepen.io/1470716/84.jpg", "https://assets.codepen.io/1470716/85.jpg" ],
           dkSevenNine: [ "https://assets.codepen.io/1470716/86.jpg", "https://assets.codepen.io/1470716/87.jpg", "https://assets.codepen.io/1470716/88.jpg", "https://assets.codepen.io/1470716/89.jpg", "https://assets.codepen.io/1470716/90.jpg" ]
        }
    };
    return myObj;
});
