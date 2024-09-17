export default class Auto{
    _color="-";
    _precio=0;
    _marca="-";
    _fecha= Date;
    retorno = "No es del tipo 'Auto'.";

    constructor(color,precio,marca,fecha){
        if(typeof color === 'string'){
            this._color=color;
        }
        if(typeof precio === 'number'){
            this._precio=precio;
        }
        if(typeof marca === 'string'){
            this._marca=marca;
        }
        if(fecha instanceof Date){
            this._fecha=fecha;
        }
    }
    AgregarImpuestos(valor){
        if(typeof valor === 'number'){
            this._precio+=valor;
        }
    }
    static MostrarAuto(auto){
        if(auto instanceof Auto){
            cadena=`-> Informacion del Auto: 
            > Color: ${_color}
            > Precio: ${_precio}
            > Marca: ${_marca}
            > Fecha: ${_fecha}`.trim();
            return cadena;
        }
        return retorno;
    }
    Equals(auto1, auto2){
        if(auto1 instanceof Auto && auto2 instanceof Auto){
            if(auto1._marca === auto2._marca){
                return true;
            }
            return false;
        }
        return console.log(retorno);
    }
    static Add(auto1, auto2){
        if(auto1 instanceof Auto && auto2 instanceof Auto){
            if(this.Equals(auto1,auto2) && auto1._color === auto2._color){
                return (auto1._precio + auto2._precio);
            }
            return 0;
        }
        return retorno;
    }

}