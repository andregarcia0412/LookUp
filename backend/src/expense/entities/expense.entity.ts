import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('expense_tb')
export class Expense {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:true})
    description: string

    @Column()
    amount: number

    @Column()
    date: Date

    @Column()
    user_id: number
}
