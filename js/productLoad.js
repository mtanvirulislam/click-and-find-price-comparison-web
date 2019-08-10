var map, geocoder;

$(document).ready(function() {
    var nivel = param("nivel");
    var nomCategoria = param("cate");
    if (nomCategoria == "Tablets/Ebooks") {
        nomCategoria = nomCategoria.split('/')[0];
    }
    console.log(nivel, nomCategoria);
    //var nivel = $(this).attr('nivel');
    //var nomCategoria = $(this).text();
    $.ajax({
        method: "GET",
        url: "php/product.php",
        data: { nivel: nivel, categoria: nomCategoria }
    }).done(function(msg) {
        console.log("prueba", msg);
        var data = JSON.parse(msg);
        console.log(data);
        $.each(data, function(key, value) {
            productGrid(value.nombre, value.img, value.categoria, value.precio, value.tienda);
            productList(value.nombre, value.categoria, value.tienda, value.precio);
            productMap(value.tienda, value.la, value.lo);
        });
    });
});

function param(name) {
    return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]);
}

function productGrid(nombre, img, cate, precio, tienda) {
    $('#view-grid').append(
        '<div class="col-sm-6 col-md-4 col-lg-3 isotope-item m-b-30">\
            <!-- Block2 -->\
            <a href="#">\
                <div class="border-product p-all-10">\
                    <div class="block2">\
                        <div class="block2-pic hov-img0">\
                            <img src="' + img + '" alt="IMG-PRODUCT">\
                        </div>\
                        <div class="block2-txt flex-w flex-t p-t-14">\
                            <div class="block2-txt-child1 flex-col-l ">\
                                <a href="#" class="mtext-101 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">\
                                    ' + nombre + '\
                                </a>\
                                <span class="stext-109 cl3 m-b-5">\
                                    ' + cate + '\
                                </span>\
                                <span class="stext-109 cl3 m-b-5">\
                                    ' + tienda + '\
                                </span>\
                                <span class="mtext-103 cl3 m-t-5">\
                                    ' + precio + '€\
                                </span>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </a>\
        </div>'
    );
}

function productList(nombre, cate, tienda, precio) {
    console.log("#################3", nombre, cate, tienda, precio);
    $('#view-list').append(
        '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 m-b-30">\
            <a href="#">\
                <div class="border-product p-all-10">\
                    <div class="block2">\
                        <div class="block2-txt flex-w flex-t">\
                            <div class="block2-txt-child1">\
                                <div class="float-left m-r-20 p-r-20 border-right">\
                                    <a href="#" class="mtext-101 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">\
                                        ' + nombre + '\
                                    </a>\
                                </div>\
                                <div class="float-left border-right m-r-20 p-r-20">\
                                    <span class="stext-109 cl3 m-b-5">\
                                        ' + cate + '\
                                    </span>\
                                </div>\
                                <div class="float-left m-r-20">\
                                    <span class="stext-109 cl3 m-b-5">\
                                        ' + tienda + '\
                                    </span>\
                                </div>\
                                <span class="mtext-103 cl3 price-list">\
                                    ' + precio + '€\
                                </span>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </a>\
        </div>'
    );
}

function productMap(tienda, la, lo) {
    console.log(tienda, la, lo);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(la, lo),
        title: tienda
    });
    marker.setMap(map);
}

/*funcion cargar mapa */
function initMapProduct() {

    var latlng = new google.maps.LatLng(40.0000000, -4.0000000);

    var style = [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#242f3e"
            }]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#746855"
            }]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#242f3e"
            }]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#263c3f"
            }]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#6b9a76"
            }]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#38414e"
            }]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#212a37"
            }]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9ca5b3"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#746855"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#1f2835"
            }]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#f3d19c"
            }]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#2f3948"
            }]
        },
        {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#d59563"
            }]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#17263c"
            }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#515c6d"
            }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#17263c"
            }]
        }
    ];

    var mapOptions = {
        zoom: 6.3,
        center: latlng,
        zoomControl: true,
        disableDoubleClickZoom: false,
        scrollwheel: 0,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: false,
        draggable: 1,
        styles: style,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("product-map"), mapOptions);
    // llama a la funcion
    geocoder = new google.maps.Geocoder();

};