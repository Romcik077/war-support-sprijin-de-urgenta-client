import { useTranslation } from 'react-i18next'
import Image from '@/components/Image'
import clsx from 'clsx'
import Spacer from '../Spacer'

const WelcomeBanner = ({}) => {
  const { t } = useTranslation('common')

  return (
    <div
      className={clsx(
        'flex flex-col-reverse gap-5 justify-between',
        'md:flex-row'
      )}
    >
      <div className="pr-4">
        <h1 className="mb-6 text-3xl font-bold leading-normal md:max-w-[30ch]">
          {t('hero.title')}
        </h1>
        <h2 className="text-base md:max-w-lg">{t('hero.subtitle_one')}</h2>
        <Spacer size="1.5rem" />
        <h2 className="text-base md:max-w-lg">{t('hero.subtitle_two')}</h2>
      </div>

      <Image
        src="/hero.png"
        alt="Code 4 Romania logo"
        className="md:max-w-[426px]"
      />
    </div>
  )
}

export default WelcomeBanner
