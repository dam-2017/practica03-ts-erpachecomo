"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones() {
    }
    Operaciones.prototype.suma = function (number1, number2) {
        return number1 + number2;
    };
    Operaciones.prototype.resta = function (number1, number2) {
        return number1 - number2;
    };
    Operaciones.prototype.factorial = function (number) {
        if (number <= 1) {
            return 1;
        }
        return number * this.factorial(number - 1);
    };
    Operaciones.prototype.primo = function (number) {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    };
    return Operaciones;
}());
exports.Operaciones = Operaciones;
