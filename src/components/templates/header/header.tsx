import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';

// import BlogLogo from '@img/aj-partners-ltd-low-resolution-logo-black-on-transparent-background-sm.png';
import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="/" title={t('common.homepage')}>
            {/* <BlogLogo /> */}
            <Image
              src="/assets/img/aj-partners-ltd-low-resolution-logo-black-on-transparent-background-sm.png"
              alt={t('common.homepage')}
              width={318}
              height={48}
            />
          </Link>
          <LanguageSelector />
        </Container>
      </nav>
    </header>
  );
};
