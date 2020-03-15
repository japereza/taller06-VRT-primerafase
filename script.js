var fondoPagina = {
    color: 'ffffff',
    toText: function () { return '.website-background{ color: #' + this.color + ';}\n' }
};
var textoElementos = {
    color: 'ffffff',
    toText: function () { return '.element-text{ color: #' + this.color + ';}\n' }
};
var bordeElementos = {
    color: 'ffffff',
    toText: function () { return '.element-border{ border-color: #' + this.color + ';}\n' }
};
var fondoElementos = {
    color: 'ffffff',
    toText: function () { return '.element-background{ background-color: #' + this.color + ';}\n' }
};
var textoEncabezado = {
    color: 'ffffff',
    toText: function () { return '.header{ color: #' + this.color + ';}\n' }
};

var paletaColores = [];

function imprimir() {
    var mensaje = fondoPagina.toText() + textoElementos.toText() + bordeElementos.toText() + fondoElementos.toText() + textoEncabezado.toText();
    $('#css-rules').val(mensaje);
}

function limpiarpaleta() {
    fondoPagina.color = fullColorHex(255, 255, 255);
    $('#color1').css('background-color', '#' + fondoPagina.color);
    textoElementos.color = fullColorHex(255, 255, 255);
    $('#color2').css('background-color', '#' + textoElementos.color);
    bordeElementos.color = fullColorHex(255, 255, 255);
    $('#color3').css('background-color', '#' + bordeElementos.color);
    fondoElementos.color = fullColorHex(255, 255, 255);
    $('#color4').css('background-color', '#' + fondoElementos.color);
    textoEncabezado.color = fullColorHex(255, 255, 255);
    $('#color5').css('background-color', '#' + textoEncabezado.color);
    imprimir();
}

var rgbToHex = function (rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

var fullColorHex = function (r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red + green + blue;
}

function randomPalette() {
    paletaColores = [];
    var equidistancia = 1 / 5;
    var hue = Math.random();
    for (i = 1; i < 6; i++) {
        paletaColores.push(hslToRgb(hue, 1, 0.5));
        if (hue + equidistancia > 1) {
            hue = (hue + equidistancia) - 1;
        } else {
            hue += equidistancia;
        }
    }
}

function generateRules() {
    randomPalette();
    fondoPagina.color = fullColorHex(paletaColores[0][0], paletaColores[0][1], paletaColores[0][2]);
    $('#color1').css('background-color', '#' + fondoPagina.color);
    textoElementos.color = fullColorHex(paletaColores[1][0], paletaColores[1][1], paletaColores[1][2]);
    $('#color2').css('background-color', '#' + textoElementos.color);
    bordeElementos.color = fullColorHex(paletaColores[2][0], paletaColores[2][1], paletaColores[2][2]);
    $('#color3').css('background-color', '#' + bordeElementos.color);
    fondoElementos.color = fullColorHex(paletaColores[3][0], paletaColores[3][1], paletaColores[3][2]);
    $('#color4').css('background-color', '#' + fondoElementos.color);
    textoEncabezado.color = fullColorHex(paletaColores[4][0], paletaColores[4][1], paletaColores[4][2]);
    $('#color5').css('background-color', '#' + textoEncabezado.color);
    imprimir();
}

$('#nuevapaleta').click(generateRules);

$('#limpiarpaleta').click(limpiarpaleta);

imprimir();
