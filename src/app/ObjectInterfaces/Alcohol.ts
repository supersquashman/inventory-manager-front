export interface Alcohol{
    name: string;
    type: string;
    upc: string;
    stocked?: boolean;
    restock?: boolean;
    notes: string;
    doc_id: string
}