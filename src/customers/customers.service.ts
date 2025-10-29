import { Injectable } from '@nestjs/common';
import { CreateEmailDTO } from './dto/create-cliente.dto';

@Injectable()
export class CustomersService {
    private emails;

    constructor() {
        this.emails= [
        {
            "id": 1,
            "email": "Isabelathings44@gmail.com"
        },
        {
            "id": 2,
            "email": "emanuelzinho00@gmail.com"
        }
        ]
    }

    findAll() {
        return this.emails;
    }
    removeAll(){
        this.emails= [];
        return{message: "todos os emails foram removidos!"}
    }

    create(email: CreateEmailDTO) {
        // last id porque eu quero controlar o próximo id
        const last_id: number = this.emails[this.emails.length - 1].id;
        const newEmail= {
            "id": last_id + 1,
            ...email
        };
        this.emails.push(newEmail);
       
        return {message: "email valido!", email: newEmail};
    }
}


