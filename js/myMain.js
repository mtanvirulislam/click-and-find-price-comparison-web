$(document).ready(function() {
    /*$(".js-remove-item").click(function() {
        $(this).parent().parent().remove();
    });*/

    $(".js-product-list").click(function() {
        $(".js-product-list").removeClass("active-button");
        $(this).addClass("active-button");

        if ($(this).attr("id") == "btn-grid-view") {
            $("#view-list").hide();
            $("#view-map").hide();
            $("#view-grid").show();
        }
        if ($(this).attr("id") == "btn-list-view") {
            $("#view-map").hide();
            $("#view-grid").hide();
            $("#view-list").show();
        }
        if ($(this).attr("id") == "btn-map-view") {
            $("#view-list").hide();
            $("#view-grid").hide();
            $("#view-map").show();
        }
    });

    /*buscador */
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function() {
        $('#result').empty();
        if ($.trim(document.getElementById("search").value).length != 0) {
            var searchField = $('#search').val();
            var expression = new RegExp(searchField, "i");

            $.ajax({
                method: "GET",
                url: "php/search.php",
                data: { key: searchField }
            }).done(function(msg) {
                //console.log(msg);
                var result = JSON.parse(msg);
                $.each(result, function(key, value) {
                    var aux = value.nombre.toLowerCase();
                    aux = aux.replace(searchField, "<strong>" + searchField + "</strong>");
                    $('#result').append('<li class="list-group-item link-class">' + aux + ' | <span class="text-muted">' + value.tipo + '</span></li>');
                    //$('#result').append('<li class="list-group-item link-class">' + value.title + '</span></li>');
                });
            });
        }
    });

    var searchCate;
    $('#result').on('click', 'li', function() {
        var click_text = $(this).text().split('|');
        searchCate = $.trim(click_text[1]);
        $('#search').val($.trim(click_text[0]));
        $("#result").html('');
        console.log(searchCate);
    });

    $('form').submit(false);
    $('#btn-buscar').on('click', function() {
        var textoSearch = $('#search').val();
        if (textoSearch.length != 0) {
            if (textoSearch == "tablets" || textoSearch == "consolas" ||
                textoSearch == "smartphones" || textoSearch == "televisores" ||
                textoSearch == "periféricos" || textoSearch == "portátiles") {

                location.href = "product.html?nivel=1&cate=" + textoSearch;
            } else {
                location.href = "product.html?nivel=" + searchCate + "&cate=" + textoSearch;
            }
        }
    });


    /*formulario */
    $('#formulario').submit(false);
    $('#btn_submit').on('click', function() {
        var nombre = $.trim($("input[name=nombre]").val());
        var correo = $.trim($("input[name=correo]").val());
        var telefono = $.trim($("input[name=telefono]").val());
        var usuario = $.trim($("input[name=usuario]").val());
        var mensaje = $.trim($("textarea[name=mensaje]").val());
        var telefonoInt = parseInt(telefono);

        if ((nombre.length != 0) && (correo.length != 0) && (telefono.length != 0) && (usuario.length != 0) && (mensaje.length != 0)) {
            $.ajax({
                method: "GET",
                url: "php/form.php",
                data: { nombre: nombre, correo: correo, telefono: telefonoInt, usuario: usuario, mensaje: mensaje }
            }).done(function(msg) {
                sweetAlert(msg);
            });
        } else {
            sweetAlert("Los campos no pueden estar vacios!!");
        }
    });


    //cargar las tiendas
    cargarTiendas();
    //poner url
    $('ul a').each(function() {
        if ($(this).attr('class') == 'js-product-request') {
            var nivel = $(this).attr('nivel');
            var cate = $(this).text();
            $(this).attr('href', "product.html?nivel=" + nivel + "&cate=" + cate);
            //console.log(this);
        }
    });
    //url categoria inicio
    var arrayCategoria = [];
    var arrayNivel = [];
    var num = 0;
    $('#categorias-inicio a, span').each(function() {
        if ($(this).attr('class').split(' ')[0] == 'js-product-request') {
            arrayNivel.push($(this).attr('nivel'));
        }
        if ($(this).attr('class').split(' ')[0] == 'block1-name') {
            arrayCategoria.push($(this).text());
        }
    });
    $('#categorias-inicio a').each(function() {
        $(this).attr('href', "product.html?nivel=" + arrayNivel[num] + "&cate=" + arrayCategoria[num]);
        //console.log($(this).attr('href'));
        num++;
    });
    $('#link-footer li a').each(function() {
        $(this).attr('href', "product.html?nivel=1&cate=" + $(this).text());
        //console.log($(this).attr('href'));
    });
});

function cargarTiendas() {
    $.ajax({
        method: "GET",
        url: "php/shop.php",
    }).done(function(msg) {
        var data = JSON.parse(msg);
        $.each(data, function(key, value) {
            $("#tiendas").append(
                '<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3  m-b-20">\
                    <div class="m-b-20">\
                        <div class="tiendas-hover">\
                            <a href="#">\
                                <img class="img-responsive" src="' + value.logo + '" alt="">\
                                <div class="overlay">\
                                    <h2>' + value.nombre + '</h2>\
                                </div>\
                            </a>\
                        </div>\
                    </div>\
                </div>'
            );
        });
    });
}