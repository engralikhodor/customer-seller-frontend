export interface Customer {
    id: number,
    first_name: string,
    last_name: string,
    country: string,
    city: string,
    currency?: string,// use the '?' annotation to mark this property as optionnal
    pay_per_hour?: number,// use the '?' annotation to mark this property as optionnal
    gender: string,
    email: string,
    phone: number,
    date_of_birth?: string,// use the '?' annotation to mark this property as optionnal
    is_deleted: boolean
}