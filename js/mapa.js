var mymap = L.map('mapid').setView([-22.90083722761145, -47.05751054635783], 11);
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/satellite-streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            subdomains: ['a', 'b', 'c'],
            accessToken: 'pk.eyJ1IjoiZGFuZ3V5YSIsImEiOiJjazhwMTNtMWcwenMyM2txenp6dTY0ZDhjIn0.N2s22ojbLoi7Ma78mMZ8Mw'
        }).addTo(mymap);

var data = [{
        "nome": "Prefeitura de campinas<br>Endereço: Av. Anchieta, 200 - Centro, Campinas - SP, 13013-173<br>Telefone:(19) 3755-6000",
        "latitud": -22.90083722761145,
        "longitud": -47.05751054635783
    },{
        "nome": "SEMURB - Secretaria Municipal de Urbanismo de Campinas<br>Repartição pública municipal em Campinas, São Paulo<br>Endereço: Av. Anchieta, 200 - Centro, Campinas - SP, 13015-101<br>Telefone: (19) 2116-0110",
        "latitud": -22.90091204356765,
        "longitud": -47.05722532278998
    },{
        "nome": "DER - Departamento de estradas e Rodagem Campinas<br>R. Cmte. Ataliba Euclides Vieira, s/n - Jardim Santana, Campinas - SP, 13088-648",
        "latitud": -22.85046715847678,
        "longitud": -47.03708884830408
    },{
        "nome": "Cofit<br>Repartição pública municipal<br>R. São Carlos, 300 - Vila Industrial (Campinas), Campinas - SP, 13035-420<br>Telefone: 1937728947",
        "latitud": -22.91329898866737,
        "longitud": -47.06485357875478 
    },{
        "nome": "Departamento de Limpeza Urbana/DLU - Secretaria Municipal de Serviços Públicos 3273-3354<br>Endereço: Av. Pref. Faria Lima, 630 - Vila Rialto, Campinas - SP, 13036-220<br>Telefone: (19) 3272-4405",
        "latitud": -22.91551055357919,
        "longitud": -47.07126063945984 
    },{
        "nome": "Fumec Dpj Departamento de Parques e Jardins<br>Av. Pref. Faria Lima, 720 - Parque Italia, Campinas - SP, 13036-220<br>Telefone: 1932436118",
        "latitud": -22.91505629473572,
        "longitud": -47.07233250478019
    },{
        "nome": "SETEC - Serviços Técnicos Gerais<br>Praça Voluntários de 32, s/n - Pte. Preta, SP, 13041-900<br>Telefone: 1937346100",
        "latitud": -22.923298447503115,
        "longitud": -47.047614936731904 
    },{
        "nome": "Prefeitura Municipal de Campinas - Administração Regional 8<br>R. Venezuela, 939 - Jardim do Trevo, Campinas - SP, 13036-350<br>Telefone: 1932780808",
        "latitud": -22.932488421671362,
        "longitud": -47.061319382606456 
    },{
        "nome": "SEMURB-Secretaria-Municipal-e-Urbanismo-Campinas<br>Av. Anchieta, 200 - Centro, Campinas - SP, 13015-101<br>Telefone: 1921160110",
        "latitud": -22.90090342949868,
        "longitud": -47.057260790218 
    },{
        "nome": "Coar- COORDENADORIA DAS ADMINISTRAÇÕES REGIONAIS DA PREFEITURA DE CAMPINAS<br>Parque Taquaral, Campinas - SP, 13084-751<br>Telefone: 1937444676",
        "latitud": -22.86894237494997,
        "longitud": -47.06925503343748 
    },{
        "nome": "Secretaria Municipal de Saúde de Campinas<br>Repartição pública em Campinas, São Paulo<br>Endereço: Av. Anchieta, 200 - Centro, Campinas - SP, 13015-101<br>Telefone: (19) 2116-0555",
        "latitud": -22.90090841296125,
        "longitud":  -47.05725057020368
    },{
        "nome": "Secretaria Municipal de Servicos Publicos da Prefeitura de Campinas<br>Final da rua da Sorveteria Sergel - Rua Padre Manuel Bernades, 1275 - Taquaral, Campinas - SP, 13087-320<br>Telefone: 1932436118",
        "latitud": -22.86940648604151,
        "longitud":  -47.064554019727275
    }]

var jsonFeatures = [];

data.forEach(function(point){
    var no = point.nome
    var lat = point.latitud;
    var lon = point.longitud;
    var feature = {type: 'Feature',
                    properties: {
                    },
                    geometry: {
                    type: 'Point',
                    coordinates: [lon,lat]
                }
            };
            L.geoJson(feature).bindPopup(no).openPopup().addTo(mymap);
        });