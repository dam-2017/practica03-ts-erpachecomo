export class Cadena{
    private _cadena:String;
    constructor(cadena:String){
        this._cadena=cadena;
    }
    get cadena():String{
        return this._cadena;
    }
    esPalindromo():boolean{
        let cadenaaux = this._cadena.toLowerCase();
        while (cadenaaux.includes(' ')) {
           cadenaaux=cadenaaux.replace(" ","");
        }
                for(let i:number=0,j:number=cadenaaux.length-1;i<cadenaaux.length/2;i++,j--){
            if(cadenaaux[i]!=cadenaaux[j]){
                return false
            }
        }
        return true;
    }
    contarVocales(){
        let res = {};
        res['a']=0;
        res['e']=0;
        res['i']=0;
        res['o']=0;
        res['u']=0;
        for(let i:number=0;i<this._cadena.length;i++){
            if(this._cadena[i]==='a'){
                res['a']++;
            }
            if(this._cadena[i]==='e'){
                res['e']++;
            }
            if(this._cadena[i]==='i'){
                res['i']++;
            }
            if(this._cadena[i]==='o'){
                res['o']++;
            }
            if(this._cadena[i]==='u'){
                res['u']++;
            }
        }
            return res;
        
    }

    contarLetras():number{

        return this._cadena.length;
    }
    contarPalabras():number{
        let noPalabras:number=0;
        let esPalabra:boolean=false;
        for(let i:number=0;i<this._cadena.length;i++){

            if(this._cadena[i]!=' '){
                if(esPalabra){

                }else{
                    noPalabras++;
                    esPalabra=true;
                }
            }else{
                esPalabra=false;
            }
        }
        return noPalabras;
    }
}