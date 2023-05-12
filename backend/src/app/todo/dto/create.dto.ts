/* eslint-disable prettier/prettier */
import { IsIn, IsNotEmpty } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTodoDto {
  @IsNotEmpty()
  @ApiProperty()
  task: string;

  @IsNotEmpty()
  @IsIn([0, 1])
  @ApiPropertyOptional()
  isDone: number
}
