export class IndustryClient {
    private numberRegisteredIndustry: string

    constructor(numberRegisteredIndustry: string) {
        this.numberRegisteredIndustry = numberRegisteredIndustry
    }

    getNumberRegisteredIndustry(): string {
        return this.numberRegisteredIndustry
    }
}