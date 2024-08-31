import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { UserService } from './UserService';

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  email?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  cpf?: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  phone?: string;

  @HasMany(() => UserService)
  userServices!: UserService[];
}