import Link from 'next/link';
import Home from './Home/Home';
import Social from './Social/Social';

export default function IndexPage() {
  return (
    <div>
      <Home />
      <Social />
    </div>
  );
}
