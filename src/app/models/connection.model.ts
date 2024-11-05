export class Connection {
  _id!: string;
  externalId!: string;
  events!: [string];
  url!: string;
  signatureSecretKey!: string;
  createdAt!: Date;
  updatedAt!: Date;
  active!: boolean;
}
