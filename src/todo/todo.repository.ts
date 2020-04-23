import { Repository, EntityRepository } from "typeorm";
import { TodoEntity } from "./todo.entity";
import { TodoDTO } from "./todo.dto";

@EntityRepository(TodoEntity)
export class TodoRepository extends Repository<TodoEntity> {

/* -------------------------------------------------------------------------- */
//?                                async create Todo                          */
/* -------------------------------------------------------------------------- */

    async createTodo(todoDto: TodoDTO)
    {
        const { title, completed } = todoDto //* destraction method

        const todo = new TodoEntity();
        todo.title = title;
        todo.completed = completed;

        await todo.save();

        return todo;
    }

}