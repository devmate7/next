import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
	tableName: 'example',
	timestamps: false
})
export default class Example extends Model<Example> {
	@PrimaryKey
	@Column
	declare id: number;

	@Column
	declare done: boolean;

	@Column
	declare message: string;
}
