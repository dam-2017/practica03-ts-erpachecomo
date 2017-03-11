export class Operaciones{

    constructor(){}

    suma(number1:number, number2:number):number{
        return number1+number2;
    }
    
    resta(number1:number, number2:number):number{
        return number1-number2;
    }

    factorial(number:number):number{
        if(number<=1){
            return 1;
        }
        return number*this.factorial(number-1);
    }
    primo(number:number):boolean{
        for(let i:number=2;i<number;i++){
            
            if(number%i==0){
                return false;
            }
        }
        return true;
    }
}