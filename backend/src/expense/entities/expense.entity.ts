import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('expense_tb')
export class Expense {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    category: string

    @Column({nullable:true})
    description: string

    @Column("decimal", {precision: 10, scale: 2})
    amount: number

    @Column()
    date: Date

    @Column()
    user_id: number
}
