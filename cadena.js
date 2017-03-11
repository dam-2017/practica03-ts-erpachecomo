"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cadena) {
        this._cadena = cadena;
    }
    Object.defineProperty(Cadena.prototype, "cadena", {
        get: function () {
            return this._cadena;
        },
        enumerable: true,
        configurable: true
    });
    Cadena.prototype.esPalindromo = function () {
        var cadenaaux = this._cadena.toLowerCase();
        while (cadenaaux.includes(' ')) {
            cadenaaux = cadenaaux.replace(" ", "");
        }
        for (var i = 0, j = cadenaaux.length - 1; i < cadenaaux.length / 2; i++, j--) {
            if (cadenaaux[i] != cadenaaux[j]) {
                return false;
            }
        }
        return true;
    };
    Cadena.prototype.contarVocales = function () {
        var res = {};
        res['a'] = 0;
        res['e'] = 0;
        res['i'] = 0;
        res['o'] = 0;
        res['u'] = 0;
        for (var i = 0; i < this._cadena.length; i++) {
            if (this._cadena[i] === 'a') {
                res['a']++;
            }
            if (this._cadena[i] === 'e') {
                res['e']++;
            }
            if (this._cadena[i] === 'i') {
                res['i']++;
            }
            if (this._cadena[i] === 'o') {
                res['o']++;
            }
            if (this._cadena[i] === 'u') {
                res['u']++;
            }
        }
        return res;
    };
    Cadena.prototype.contarLetras = function () {
        return this._cadena.length;
    };
    Cadena.prototype.contarPalabras = function () {
        var noPalabras = 0;
        var esPalabra = false;
        for (var i = 0; i < this._cadena.length; i++) {
            if (this._cadena[i] != ' ') {
                if (esPalabra) {
                }
                else {
                    noPalabras++;
                    esPalabra = true;
                }
            }
            else {
                esPalabra = false;
            }
        }
        return noPalabras;
    };
    return Cadena;
}());
exports.Cadena = Cadena;
