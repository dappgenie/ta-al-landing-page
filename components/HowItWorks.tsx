import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from '../components/Icons';
import { Transition } from './Transition';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: 'Accessibility',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
  },
  {
    icon: <MapIcon />,
    title: 'Community',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
  },
  {
    icon: <PlaneIcon />,
    title: 'Scalability',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
  },
  {
    icon: <GiftIcon />,
    title: 'Gamification',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum',
  },
];

export const HowItWorks = () => {
  return (
    <section id='howItWorks' className='container py-16 sm:py-24'>
      <Transition
        animationType='left'
        className='mb-4 text-3xl font-bold md:text-4xl'
      >
        How It Works
      </Transition>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            className='!bg-transparent !text-center !border-none'
            key={title}
          >
            <CardHeader>
              <CardTitle className='grid gap-4 place-items-center'>
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
