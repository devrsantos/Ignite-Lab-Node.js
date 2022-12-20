import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/application/use-case/send-notification';

@Controller('notifications')
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipient, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipient,
      content,
      category,
    });
    return notification;
  }
}
