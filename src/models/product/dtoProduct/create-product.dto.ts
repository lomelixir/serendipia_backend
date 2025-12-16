import {
  IsString,
  IsNumber,
  IsNotEmpty,
  MinLength,
  MaxLength,
  Min,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsOptional()
  @MaxLength(100)
  id?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  nombre: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  precio: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  categoria: string;

  @IsDateString()
  @IsOptional()
  createdAt?: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;
}
