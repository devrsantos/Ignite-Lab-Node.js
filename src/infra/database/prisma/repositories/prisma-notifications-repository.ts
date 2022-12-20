import { Injectable } from '@nestjs/common';
import { Notification } from '../../../..//application/entities/notification';
import { NotificationRepository } from '../../../../application/repositories/notification-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
class PrismaNotificationsRepository implements NotificationRepository {
  constructor(private PrismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.PrismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipient: notification.recipient,
        readAt: notification.readAt,
        createdAT: notification.createdAt,
      },
    });
  }
}

export { PrismaNotificationsRepository };
