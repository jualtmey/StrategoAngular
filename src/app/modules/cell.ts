import {Character} from "./character";
export class Cell {
  isPassable : boolean;
  containsCharacter : boolean;
  column : number;
  row : number;
  character: Character;
}
