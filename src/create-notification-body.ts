import { IsNotEmpty, Length } from 'class-validator';

class CreateNotificationBody {
  @IsNotEmpty()
  recipient: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}

export { CreateNotificationBody };
