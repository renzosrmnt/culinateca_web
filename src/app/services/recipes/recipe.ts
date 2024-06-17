export interface Recipe {
    _id: string;
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
    preparationTime: string;
    servingSize: string;
    imageUrl?: string;
    category: string;
    createdAt: Date;
    __v: number;
}