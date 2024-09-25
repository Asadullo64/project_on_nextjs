import React from "react";

import Image from "next/image";
import Link from "next/link";

import { FooterDataIconProps } from "../../data";

import styles from "./FooterSocialIcons.module.scss";

export interface IconProps {
  icon?: string;
  width?: number;
  alt?: string;
  classNames?: string;
}

const Icon: React.FC<IconProps> = ({
  icon = "",
  width,
  alt = "",
  classNames = "",
}: IconProps) => (
  <span>
    <Image
      src={icon}
      width={width || 30}
      height={30}
      alt={alt}
      className={classNames}
      priority
    />
  </span>
);

interface FooterSocialIconProps {
  icons: FooterDataIconProps[];
}

export const FooterSocialIcons: React.FC<FooterSocialIconProps> = ({
  icons,
}: FooterSocialIconProps) => (
  <div className={styles.footer}>
    <div className={styles.footer__block}>
      <div className={styles.footer__txt}>
        Connect with me on social media to discuss potential collaborations and
        opportunities. I look forward to working with you!
      </div>
    </div>
    <div className={styles.footer__media}>
      {icons.map((icon) => (
        <Link
          key={icon.alt}
          href={icon.link}
          className={styles.footer__media_link}
          target="_blank"
        >
          <Icon
            icon={icon.path}
            width={30}
            alt={icon.alt}
            classNames={styles.footer__media_img}
          />
        </Link>
      ))}
    </div>
  </div>
);
