import { ImageType } from './global';

export interface RemittanceType {
  image: ImageType;
  content: Content;
}

interface Content {
  badgeContent: string | React.ReactNode;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}
