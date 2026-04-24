import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

export type SocialIcon = 'facebook' | 'instagram' | 'youtube' | 'tiktok';

export const SOCIAL_ICON_MAP = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  tiktok: FaTiktok,
};

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/profile.php?id=61579146742661#',
    icon: 'facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/obimii',
    icon: 'instagram',
  },
  {
    label: 'YouTube',
    href: 'http://www.youtube.com/@obimi-p5w',
    icon: 'youtube',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@obimisend',
    icon: 'tiktok',
  },
];
