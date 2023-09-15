import { SimplifiedExercise } from './simplified-exercise.model';

export class Group {
  _id!: string;
  exercises!: SimplifiedExercise[];
  name!: string;
  description!: string;
}
