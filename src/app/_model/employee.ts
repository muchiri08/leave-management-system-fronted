export class Employee {

    private id: number;
    private fisrtName: string;
    private lastName: string;
    private email: string;
    private gender: string;
    private password: string;
    private department: string;
    private position: string;

    constructor(
        id: number,
        fisrtName: string,
        lastName: string,
        email: string,
        gender: string,
        password: string,
        department: string,
        position: string
    ) { 
        this.id = id;
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.password = password;
        this.department = department;
        this.position = position;
    }

    public getId(): number {
        return this.id;
    }

    public getFisrtName(): string {
        return this.fisrtName;
    }

    public setFisrtName(fisrtName: string) {
        this.fisrtName = fisrtName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getEmail(): string {
        return this.email;
    }

    public getGender(): string {
        return this.gender;
    }

    public getPassword(): string {
        return this.password;
    }

    public getDepartment(): string {
        return this.department;
    }

    public getPosition(): string {
        return this.position;
    }
}
