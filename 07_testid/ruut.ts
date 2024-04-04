export function kasRuut(küljed: number[]): boolean {
    if (küljed.length !== 4) {
        return false;
    }

    const esimeneKülg = küljed[0];

    for (let i = 1; i < küljed.length; i++) {
        if (küljed[i] !== esimeneKülg) {
            return false; 
        }
    }
    return true;
}