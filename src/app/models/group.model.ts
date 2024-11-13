import { SimplifiedExercise } from './simplified-exercise.model';

export interface Group {
  _id: string;
  route: string;
  exercises: SimplifiedExercise[];
  name: string;
  description: string;
}
