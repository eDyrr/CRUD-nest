import { Injectable } from '@nestjs/common';
import { Task } from '../task.module'
@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: 1,
            title: 'Complete project report',
            description: 'Finalize the project report and submit it to the manager.',
            status: 'OPEN'
        },
        {
            id: 2,
            title: 'Code review',
            description: 'Review the code for the new feature implementation.',
            status: 'DONE'
        },
        {
            id: 3,
            title: 'Team meeting',
            description: 'Attend the team meeting to discuss project milestones.',
            status: 'OPEN'
        },
        {
            id: 4,
            title: 'Client presentation',
            description: 'Prepare slides and present the project progress to the client.',
            status: 'DONE'
        },
        {
            id: 5,
            title: 'Update documentation',
            description: 'Update the project documentation with the latest changes.',
            status: 'OPEN'
        },
        {
            id: 6,
            title: 'Fix bugs',
            description: 'Fix the bugs reported in the latest QA testing.',
            status: 'DONE'
        },
        {
            id: 7,
            title: 'Deploy to staging',
            description: 'Deploy the latest build to the staging environment for testing.',
            status: 'OPEN'
        },
        {
            id: 8,
            title: 'Research new technology',
            description: 'Research and document the findings on the new technology stack.',
            status: 'DONE'
        },
        {
            id: 9,
            title: 'Refactor codebase',
            description: 'Refactor the legacy codebase to improve readability and performance.',
            status: 'OPEN'
        },
        {
            id: 10,
            title: 'One-on-one meeting',
            description: 'Have a one-on-one meeting with the team lead to discuss career goals.',
            status: 'DONE'
        }
    ] ;
    CreateTask(title: string, description: string): Task {
        const id = this.tasks.length + 1 ;
        const task: Task = {
            id,
            title,
            description,
            status: 'OPEN',
        };
        this.tasks.push(task) ;
        return task ;
    }
    getAllTasks(): Task[] {
        return this.tasks ;
    }
    getTaskByID(id: number): Task {
        return this.tasks.find((task) => task.id === id);
    }
    updateTaskStatus(id: number, status: 'OPEN' | 'DONE'): Task {
        const task = this.getTaskByID(id)
        
        if(task) {
            task.status = status
        }

        return task ;
    }
    deleteTask(id: number): void {
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }
}
