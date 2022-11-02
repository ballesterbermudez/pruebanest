import { Picture } from 'src/pictures/picture.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @OneToMany(()=> Picture, (picture)=> picture.user)
    pictures: Picture[]

}