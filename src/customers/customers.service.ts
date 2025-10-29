import { Injectable,NotFoundException  } from '@nestjs/common';
import { UpsertEmailDTO } from './dto/Upsert-cliente.dto';

@Injectable()
export class CustomersService {
    private emails;

    constructor() {
        this.emails = [
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

    create(email: UpsertEmailDTO ) {
        // last id porque eu quero controlar o próximo id
        const last_id: number = this.emails[this.emails.length - 1].id;
        const newEmail= {
            "id": last_id + 1,
            ...email
        };
        this.emails.push(newEmail);
       
        return {message: "email valido!", email: newEmail};
    }
    update(id: number, emailDto: UpsertEmailDTO){  
        const index = this.emails.findIndex((e) => e.id === id);
     
        if (index === -1) {
            throw new NotFoundException(`Email com ID ${id} não encontrado.`);
        }
     
        const updatedEmail = {
            'id': this.emails[index].id, 
            ...emailDto                  
        };
    
        this.emails[index] = updatedEmail; 
    
       
        return { message: `Email com ID ${id} atualizado com sucesso!`, email: updatedEmail };
    }

}


