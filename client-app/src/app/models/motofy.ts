export interface IMotofy {
    id: string;
    name: string;
    brand: string;
    model: string;
    cubicCentimeters: number;
    photoUrl?: string | null;
    description?: string;
    yearOfProduction?: Date;
    datePublished?: Date | undefined;
    city?: string;
    pricePaid?: number;
    estimatedValue?: number;
    numberOfKilometers?: number;

}