import { Cell } from '../Cell'
import logo from '../../assets/black-bishop.png'
import { Colors } from '../Colors'

export enum FigureName {
  FIGURE = 'Фигура',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
}

export class Figure {
  cell: Cell
  logo: typeof logo | null
  color: Colors
  name: FigureName
  id: number

  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.logo = null
    this.name = FigureName.FIGURE
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false
    }
    if (target.figure?.name === FigureName.KING) {
      return false
    }
    return true
  }
  moveFigure(target: Cell) {}
}
