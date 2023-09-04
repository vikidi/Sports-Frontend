class SimpleGroup {
  exercises!: string[];
  name!: string;
  description!: string;
}

export class Route {
  _id!: string;
  groups!: SimpleGroup[];
  defaultGroup!: string;
  name!: string;
  description!: string;
}
