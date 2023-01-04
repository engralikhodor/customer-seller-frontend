export class Community {
    private id: number;
    private name: string;
    private description?: string;//todo check

    constructor(id: number, name: string, description?: string) {
        this.id = id;
        this.name = name;
        this.description = description;//todo check
    }

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
}
