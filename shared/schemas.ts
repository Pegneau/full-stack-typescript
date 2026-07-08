import { z } from 'zod';

export const TaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().optional(),
  completed: z
    .union([z.number(), z.boolean()])
    .transform((v) => Boolean(v))
    .optional(),
});

export const CreateTaskSchema = TaskSchema.omit({ id: true });
export const UpdateTaskSchema = TaskSchema.partial().omit({ id: true });

export const TaskListSchema = z.array(TaskSchema);

export type Task = z.infer<typeof TaskSchema>;
export type CreateTask = z.infer<typeof CreateTaskSchema>;
export type UpdateTask = z.infer<typeof UpdateTaskSchema>;
export type taskList = z.infer<typeof TaskListSchema>;

export {};
