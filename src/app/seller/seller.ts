export interface Seller {
    id: number,
    first_name: string,
    last_name: string,
    country: string,
    city: string,
    currency?: string,// use the '?' annotation to mark this property as optionnal
    cost_per_hour?: number,// use the '?' annotation to mark this property as optionnal
    gender: string,
    skills: string,
    email: string,
    phone: number,
    date_of_birth?: string,// use the '?' annotation to mark this property as optionnal
    is_deleted: boolean
}

/*
// inheritance
interface specialSeller extends Seller{}
 birthdate: Date;
 biography?: string;  
}
*/