class KmhToMs {
    calculate(kmh: number): number {
        return kmh / 3.6;
    }

    inputUnit(): string {
        return "km/h";
    }

    outputUnit(): string {
        return "m/s";
    }
}