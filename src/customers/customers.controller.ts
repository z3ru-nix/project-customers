import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateEmailDTO } from './dto/create-cliente.dto';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Get('/')
    findAll() {
        return this.customersService.findAll();
    }

    @Post('/')
    create(@Body() emailbody: CreateEmailDTO) {
        return this.customersService.create(emailbody);
    }
    @Put('/')
    update(){
        return {message: "nota de upadate de email"}
    }
    @Delete('/')
    removeAll(){
        return this.customersService.removeAll();
    }
}