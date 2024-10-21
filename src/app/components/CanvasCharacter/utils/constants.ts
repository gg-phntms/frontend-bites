export enum Level {
  PLAZA = "plaza",
  TOWN = "town",
}

export type Obstacle = { x: number; y: number; width: number; height: number };
export type Teleport = {
  destination: string;
  x: number;
  y: number;
  width: number;
  height: number;
};
