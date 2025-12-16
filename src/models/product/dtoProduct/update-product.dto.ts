import {
  IsString,
  IsNumber,
  IsOptional,
  MinLength,
  MaxLength,
  Min,
} from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  @MinLength(1)
  @MaxLength(100)
  nombre?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  precio?: number;

  @IsString()
  @IsOptional()
  @MinLength(1)
  @MaxLength(100)
  descripcion?: string;

  @IsString()
  @IsOptional()
  @MinLength(1)
  @MaxLength(100)
  categoria?: string;
}
