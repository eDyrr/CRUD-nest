import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Task } from '../task.module' ;
import { TasksService } from './tasks.service';
import { create } from 'domain';
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Post()
    createTask(@Body() createdTask: {title: string, description: string}): Task {
        return this.tasksService.CreateTask(createdTask.title, createdTask.description)
    }

    @Get(':id')
    getTaskById(@Param('id') id: number): Task {
        return this.tasksService.getTaskByID(id) ;
    }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks()
    }
    @Put(':id/status')
    updateTaskStatus(@Param('id') id: number, @Body('status') status: 'OPEN' | 'DONE'): Task {
        return this.tasksService.updateTaskStatus(id, status) ;
    }

    @Delete(':id')
    deleteTask(@Param('id') id:number): void {
        this.tasksService.deleteTask(id) ;
    }
}
