import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';

@Table({
  tableName: 'contacts',
  timestamps: true,
})
export class Contacts extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone?: string;
}