import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import {   UpsertEmailDTO } from './dto/Upsert-cliente.dto';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}

    @Get('/')
    findAll() {
        return this.customersService.findAll();
    }

    @Post('/')
    create(@Body() emailbody: UpsertEmailDTO ) {
        return this.customersService.create(emailbody);
    }
    @Put(':id')
    update(@Param('id') customersID: number, @Body() updatebody: UpsertEmailDTO){
        return this.customersService.update(customersID,updatebody);
    }
    @Delete('/')
    removeAll(){
        return this.customersService.removeAll();
    }
}