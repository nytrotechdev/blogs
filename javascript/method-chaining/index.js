class Calculator{
    constructor(number){
        this.number = number;
    }

    add(number){
        if(typeof number != "number"){
            console.error("the value passed in add method must be a number");
            return;
        }
        this.number += number;
        return this;
    }

    subtract(number){
        if(typeof number != "number"){
            console.error("the value passed in subtract method must be a number");
            return;
        }
        this.number -= number;
        return this;
    }

    multiply(number){
        if(typeof number != "number"){
            console.error("the value passed in multiply method must be a number");
            return;
        }
        this.number *= number;
        return this;
    }

    divide(number){
        if(typeof number != "number"){
            console.error("the value passed in divide method must be a number");
            return;
        }
        this.number /= number;
        return this;
    }

    result(){
        return this.number;
    }
}

var NewNumber = new Calculator(12);

console.log(NewNumber.add("10").subtract(2).multiply(5).divide(4).result());