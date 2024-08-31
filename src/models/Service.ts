import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UserService } from './UserService';

@Table({
  tableName: 'services',
  timestamps: true,
})
export class Service extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description?: string;

  @HasMany(() => UserService)
  userServices!: UserService[];
}
