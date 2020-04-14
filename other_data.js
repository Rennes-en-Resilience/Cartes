my_office_ENS = L.marker([48.11165, -1.65732]);
my_places.push(my_office_ENS)
my_office_ENS.addTo(neighborhood)
    .bindPopup("Dr Lilian Besson,<br>Office XXX,<br>ENS de Rennes, Inria Bretagne Atlantique<br>35000 - Rennes,<br>France.")
    //.openPopup()
    ;

my_office_CentraleSupelec = L.marker([48.11165, -1.65732]);
my_places.push(my_office_CentraleSupelec)
my_office_CentraleSupelec.addTo(neighborhood)
    .bindPopup("Dr Lilian Besson,<br>Office XXX,<br>CentraleSupelec, Inria Bretagne Atlantique<br>35000 - Rennes,<br>France.")
    //.openPopup()
    ;

// TODO add data for other offices,

// ------ #2 My bakeries ------
var bakeries = [];

gourmandise_gregoire = L.marker([48.11165, -1.65732]);
bakeries.push(gourmandise_gregoire)
gourmandise_gregoire.addTo(neighborhood)
    .bindPopup("Les Gourmandises de Grégoire<br>Horaires : XX - XX<br>Ouvert jusqu'au vendredi 10 avril <i>normalement</i>.")
    .openPopup()
    ;

paris_breizh = L.marker([48.11165, -1.65732]);
bakeries.push(paris_breizh)
paris_breizh.addTo(neighborhood)
    .bindPopup("Paris Breizh<br>Horaires : XX - XX<br>Ouvert jusqu'au vendredi 10 avril <i>normalement</i>.")
    //.openPopup()
    ;

// TODO 1 : only the open ones
// TODO 2 : then the closed ones
// ------ #3 foodstores like Carrefour or BioCoop ------
var foodstores = [];

carrefour_bdMetz = L.marker([48.11165, -1.65732]);
bakeries.push(carrefour_bdMetz)
carrefour_bdMetz.addTo(neighborhood)
    .bindPopup("Carrefour Market : boulevard de Metz<br>Horaires : XX - XX<br>Ouvert jusqu'au vendredi 10 avril <i>normalement</i>.")
    .openPopup()
    ;

carrefour_bdAristideBriand = L.marker([48.11165, -1.65732]);
bakeries.push(carrefour_bdAristideBriand)
carrefour_bdAristideBriand.addTo(neighborhood)
    .bindPopup("Carrefour Market : boulevard Aristide Briand<br>Horaires : XX - XX<br>Ouvert jusqu'au vendredi 10 avril <i>normalement</i>.")
    .openPopup()
    ;

biocoop_rue_Paris = L.marker([48.11165, -1.65732]);
bakeries.push(biocoop_rue_Paris)
biocoop_rue_Paris.addTo(neighborhood)
    .bindPopup("BioCoop rue de Paris<br>Horaires : XX - XX<br>Ouvert jusqu'au vendredi 10 avril <i>normalement</i>.")
    //.openPopup()
    ;


var drugstores = [];

gourmandise_gregoire = L.marker([48.11165, -1.65732]);
bakeries.push(gourmandise_gregoire)
gourmandise_gregoire.addTo(neighborhood)
    .bindPopup("Les Gourmandises de Grégoire<br>Horaires : XX - XX<br>Ouvert jusqu'au vendredi 10 avril <i>normalement</i>.")
    .openPopup()
    ;

paris_breizh = L.marker([48.11165, -1.65732]);
bakeries.push(paris_breizh)
paris_breizh.addTo(neighborhood)
    .bindPopup("Paris Breizh<br>Horaires : XX - XX<br>Ouvert jusqu'au vendredi 10 avril <i>normalement</i>.")
    //.openPopup()
    ;

// ------ #5 other useful stores ------
var usefulstores = [];

// TODO 3 : other stuff
// ------ #6 friends' homes ? If they want ------
var friendhomes = [];

// ------ #7 foodstores like Carrefour or BioCoop ------
var others = [];
