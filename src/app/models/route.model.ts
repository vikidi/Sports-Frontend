class SimpleGroup {
  _id!: string;
  exercises!: string[];
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
