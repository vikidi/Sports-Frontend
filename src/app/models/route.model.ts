class SimpleExercise {
  _id!: string;
  elapsedSec!: number;
  averageHeartRate!: number;
  averagePace!: number;
}

class SimpleGroup {
  _id!: string;
  exercises!: SimpleExercise[];
  name!: string;
  description!: string;
}

export class Route {
  _id!: string;
  groups!: SimpleGroup[];
  defaultGroup!: SimpleGroup;
  name!: string;
  description!: string;
  useAutomaticGrouping!: boolean;
}
