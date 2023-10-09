import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>
          {/* <a href="/about">About</a> */}
          {/* Dont use simle a tag, it will make brand new HTTP request and everything(states etc) will be lost */}
          <Link replace href="/about">
            About
          </Link>
          {/* replace -> replace the page don't push, so can't go back */}
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
export default HomePage;
