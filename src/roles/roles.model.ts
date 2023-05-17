import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({
    tableName: 'users'
})
export class Role extends Model<Role, RoleCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный индетификатор'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: 'Admin', description: 'Уникальное значение пользователя'})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}