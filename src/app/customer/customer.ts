// use the '?' annotation to mark this property as optionnal
export interface Customer {
    id: number,
    first_name: string,
    last_name: string,
    country: string,
    city: string,
    currency?: string,
    pay_per_hour?: number,
    gender: string,
    email?: string,
    phone: number,
    date_of_birth?: string,//date in DB
    created_at_str?: string,//timestamp in DB
    updated_at_str?: string,//timestamp in DB
    is_deleted: boolean
}