import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';

@Schema()
export class Pokemon extends Mongoose {
  // id:string // Mongo me lo da

  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
