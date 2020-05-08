function Oct(decimal) {
    var result = [];
    var x = 8;
    //checamos si el numero esta en el rango de 1 - 8
    if((decimal % x) == decimal) {
        result.unshift(decimal)
    }else {//si no lo metemos en un while hasta el decimal restante sea del mismo tamano que el residuo
        while(decimal != (decimal % x)) {
            //se introduce el residuo al inicio del arreglo
            result.unshift(decimal % x);
            //se agarra el nuevo valor decimal
            decimal = parseInt(decimal / x);
        }
        //se procesa una vez mas al haber terminado el while
        result.unshift(decimal % x);
        decimal = parseInt(decimal / x);
    }
    
    return result;
}

exports.Oct = Oct;