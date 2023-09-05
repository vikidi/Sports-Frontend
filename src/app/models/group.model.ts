class SimpleExercise {
  _id!: string;
  sport!: string;
  startingEpoch!: number;
  parsedDate!: Date;
  distanceMeters!: number;
  elapsedSec!: number;
  averageHeartRate!: number;
  averagePace!: number;
  averageCadence!: number;
  averageWatts!: number;
}

export class Group {
  _id!: string;
  exercises!: SimpleExercise[];
  name!: string;
  description!: string;
}
