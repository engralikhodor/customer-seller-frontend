// use the '?' annotation to mark this property as optionnal
export interface Task {
    id: number,
    date_time_from: string,//datetime in DB
    date_time_to: string,//datetime in DB
    city: string,
    location_lat: number,
    location_lng: number,
    total_cost?: number,
    task_type: string,
    created_by_id: number,
    assigned_to_id?: number,
    status: string,
    created_at_str?: string,//timestamp in DB
    updated_at_str?: string,//timestamp in DB
    is_deleted: boolean,
}