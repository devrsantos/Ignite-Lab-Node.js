import { Content } from './content';
import { Replace } from '../../helpers/Replace';
import { randomUUID } from 'node:crypto';

interface NotificationProps {
  recipient: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipient(recipient: string) {
    this.props.recipient = recipient;
  }

  public get recipient(): string {
    return this.props.recipient;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}

export { Notification, NotificationProps };
