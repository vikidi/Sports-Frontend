import { Group } from './group.model';

export interface Route {
  _id: string;
  groups: Group[];
  defaultGroup: Group;
  name: string;
  description: string;
  useAutomaticGrouping: boolean;
}
