import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { User } from './User';
import { Service } from './Service';

@Table({
  tableName: 'user_services',
  timestamps: true,
})
export class UserService extends Model {
  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Service)
  @Column
  serviceId!: number;
}
