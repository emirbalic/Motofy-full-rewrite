export interface IMotofy {
    id: string;
    name: string;
    brand: string;
    model: string;
    cubicCentimeters?: number;
    photoUrl?: string | null;
    description?: string;
    yearOfProduction?: string;// Date;
    datePublished?: string; // Date | undefined;
    city?: string;
    pricePaid?: number;
    estimatedValue?: number;
    numberOfKilometers?: number;

}