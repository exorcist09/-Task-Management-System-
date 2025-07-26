export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

// Schema of a Task object
export interface Task {
  id: string;             // Unique identifier (UUID)
  title: string;          
  description: string;    
  status: TaskStatus;     // Current status of task
  createdAt: string;      
  updatedAt: string;      
}
