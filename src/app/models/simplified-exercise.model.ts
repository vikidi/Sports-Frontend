export interface SimplifiedExercise {
  _id: string;
  sport: string;
  group: string;
  startingEpoch: number;
  parsedDate: Date;
  distanceMeters: number;
  elapsedSec: number;
  averageHeartRate: number;
  averagePace: number;
  averageCadence: number;
  averageWatts: number;
  trackPoints: {
    latitude: number;
    longitude: number;
    altitudeMeters: number;
    elapsedSec: number;
  }[];
}
