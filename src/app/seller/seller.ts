// use the '?' annotation to mark this property as optionnal
export interface Seller {
    id: number,
    first_name: string,
    last_name: string,
    full_name: string,
    country: string,
    city: string,
    currency?: string,
    cost_per_hour?: number,
    gender: string,
    skills: string,
    email?: string,
    phone: number,
    date_of_birth?: string,//date in DB
    created_at_str?: string,//timestamp in DB
    updated_at_str?: string,//timestamp in DB
    is_deleted: boolean
}

/*
// inheritance
interface specialSeller extends Seller{}
 birthdate: Date;
 biography?: string;  
}
*/