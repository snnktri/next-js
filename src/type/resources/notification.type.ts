export type NotificationCategory =
  | 'like'
  | 'comment'
  | 'attachment'
  | 'follow'
  | 'follow_back'
  | 'download_resume'
  | 'seen_resume'
  | 'repost';

export type NotificationType = {
    avatar: string;
    name: string;
    category: NotificationCategory;
    timestamp: string;
}

export type NotificationPartial = Partial<NotificationType>;