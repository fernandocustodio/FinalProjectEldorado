import { BaseModel } from "./base-model";

export class Login extends BaseModel{
    constructor(public id: string | number, public password: string, public userName: string) {
        super(id);
    }
}