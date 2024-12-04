export interface Connection {
  local: {
    _id: string;
    externalId: string;
    events: string[];
    url: string;
    signatureSecretKey: string;
    createdAt: Date;
    updatedAt: Date;
  } | null;
  remote: {
    active: boolean;
    id: string;
    events: string[];
    url: string;
  } | null;
}
