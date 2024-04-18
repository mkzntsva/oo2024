class KMIKalkulaator {
    private kaalInput: HTMLInputElement;
    private pikkusInput: HTMLInputElement;
    private kmiElement: HTMLElement;
    private seisundElement: HTMLElement;
    private kaalValue: HTMLElement;
    private pikkusValue: HTMLElement;

    constructor() {
        this.kaalInput = document.getElementById('kaal') as HTMLInputElement;
        this.pikkusInput = document.getElementById('pikkus') as HTMLInputElement;
        this.kmiElement = document.getElementById('kmi')!;
        this.seisundElement = document.getElementById('seisund')!;
        this.kaalValue = document.getElementById('kaalValue')!;
        this.pikkusValue = document.getElementById('pikkusValue')!;

        this.kaalInput.addEventListener('input', () => this.updateValue('kaal'));
        this.pikkusInput.addEventListener('input', () => this.updateValue('pikkus'));

        this.kaalValue.textContent = this.kaalInput.value;
        this.pikkusValue.textContent = this.pikkusInput.value;
        this.arvutaKMI();
    }

    private updateValue(type: string): void {
        if (type === 'kaal') {
            this.kaalValue.textContent = this.kaalInput.value;
        } else if (type === 'pikkus') {
            this.pikkusValue.textContent = this.pikkusInput.value;
        }
        
        this.arvutaKMI();
    }

    private arvutaKMI(): void {
        const kaal = parseFloat(this.kaalInput.value);
        const pikkus = parseFloat(this.pikkusInput.value) / 100;
        const kmi = (kaal / (pikkus * pikkus)).toFixed(2);

        this.kmiElement.textContent = kmi;

        let seisund: string;
        if (parseFloat(kmi) < 18.5) {
            seisund = 'Alakaal';
        } else if (parseFloat(kmi) < 25) {
            seisund = 'Normaalkaal';
        } else {
            seisund = 'Ülekaal';
        }

        this.seisundElement.textContent = seisund;
    }
}

new KMIKalkulaator();
