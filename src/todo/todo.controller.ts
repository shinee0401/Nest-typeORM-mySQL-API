import { Controller, Body, Post, Get, Patch } from '@nestjs/common';
import { TodoDTO } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private srvTodo: TodoService) { }
    @Get()
    getAllTodos()
    {
        return this.srvTodo.getTodoList()
    }

    @Post()
    persistTodo(@Body() todoDto: TodoDTO) {
        return this.srvTodo.addTodo(todoDto)
    }

    @Patch()
    getTodoByID(@Body() todoID:any) {
        return this.srvTodo.getTodoByID(todoID)
    }

}
