interface CalculatingFunction{
    calculate(x: number):number;
    inputUnit():string;
    outputUnit():string;
}

class InchesToCm implements CalculatingFunction{
    calculate(inches: number):number{
        return inches*2.54;
    }
    inputUnit(): string {
        return "in";
    }
    outputUnit(): string{
        return "cm";
    }
}

class KmhToMs implements CalculatingFunction{
    calculate(kmh: number):number{
        return kmh/3.6;
    }
    inputUnit(): string {
        return "km/h";
    }
    outputUnit(): string{
        return "m/s";
    }
}