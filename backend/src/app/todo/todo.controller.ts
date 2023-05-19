import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create.dto';
import { IndexTodoSwagger } from './swagger/index-todo.swagger';
import { CreateTodoSwagger } from './swagger/create-todo.swagger';
import { ShowTodoSwagger } from './swagger/show-todo.swagger';
import { UpdateTodoSwagger } from './swagger/update-todo.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from './../../helpers/swagger/not-found.swagger';

@Controller('api/v1/todos')
@ApiTags('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiOperation({ summary: 'List All tasks' })
  @ApiResponse({
    status: 200,
    description: 'List of tasks returned succesfully',
    type: IndexTodoSwagger,
    isArray: true,
  })
  async index() {
    return await this.todoService.findAll({ order: { createdAt: 'DESC' } });
  }

  @Post()
  @ApiOperation({ summary: 'Add a new task' })
  @ApiResponse({
    status: 201,
    description: 'New task successfully created',
    type: CreateTodoSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid parameters',
    type: BadRequestSwagger,
  })
  async create(@Body() body: CreateTodoDto) {
    return await this.todoService.create(body);
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'Data from a task returned successfully',
    type: ShowTodoSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid data',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Task not found',
    type: NotFoundSwagger,
  })
  @ApiOperation({ summary: 'Display task data' })
  async show(
    @Param('id', new ParseUUIDPipe())
    id: string,
  ) {
    return await this.todoService.findOneOrFail(id);
  }

  @Put(':id')
  @ApiResponse({
    status: 201,
    description: 'Task updated successfully',
    type: UpdateTodoSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Task not found',
    type: NotFoundSwagger,
  })
  @ApiOperation({ summary: 'Update task data' })
  async update(
    @Param('id', new ParseUUIDPipe())
    id: string,
    @Body() body: UpdateTodoDto,
  ) {
    return await this.todoService.update(id, body);
  }

  @Delete(':id')
  @ApiResponse({
    status: 204,
    description: 'Task removed successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Task not found',
    type: NotFoundSwagger,
  })
  @ApiOperation({ summary: 'Remove a task' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(
    @Param('id', new ParseUUIDPipe())
    id: string,
  ) {
    await this.todoService.deleteById(id);
  }
}
