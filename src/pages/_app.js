import './index.scss';
import MainPage from './index.tsx';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function MyApp() {
  return (
    <ParallaxProvider>
      <MainPage />;
    </ParallaxProvider>
  );
}
