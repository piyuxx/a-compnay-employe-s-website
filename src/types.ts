export type Status = "active" | "inactive";

export interface IContact {
  id: string;
  firstName: string;
  lastName: string;
  status: Status;
}
