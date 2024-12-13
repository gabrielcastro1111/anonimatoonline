export interface IconProps {
  className?: string;
  size?: number;
}

export interface BaseCardProps {
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
}

export const CONTACT: ContactInfo = {
  email: 'anonimatoonline@gmail.com'
};