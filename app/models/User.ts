import { Column, CreatedAt, UpdatedAt, DataType, PrimaryKey, Table, Model, Default, Unique } from 'sequelize-typescript';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Table
export default class User extends Model<User> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  public id!: string;

  @Field()
  @Unique
  @Column
  public email!: string;

  @Field()
  @CreatedAt
  public createdAt!: Date;

  @Field()
  @UpdatedAt
  public updatedAt!: Date;
}
