export class Community {
    public id: number;
    public name: string;
    public description?: string;//todo check
    public is_deleted: boolean;

    constructor(id: number, name: string, is_deleted: boolean, description?: string) {
        this.id = id;
        this.name = name;
        this.is_deleted = is_deleted;
        this.description = description;//todo check
    }
    /*
        getID(): number {
            return this.id;
        }
    
        setID(id: number) {
            this.id = id;
        }
    
        getName(): string {
            return this.name;
        }
    
        setName(name: string) {
            this.name = name;
        }
    
        getDescription(): string {
            if (this.description != null) {
                return this.description;
            }
            else {
                return 'No description found!';
            }
        }
    
        setDescription(description: string) {
            this.description = description;
        }
    
        getIsDeleted(): boolean {
            if (this.is_deleted != null) {
                return this.is_deleted;
            }
            else {
                return true;//if no result found => set is_deleted as true
            }
        }
    
        setIsDeleted(is_deleted: boolean) {
            this.is_deleted = is_deleted;
        }
        */
}
