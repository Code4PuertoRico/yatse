import Head from 'next/head';
import Link from 'next/link';
import Search from './search';

const URL = '';
const SHARE_IMAGE_URL = `${URL}/static/share.png`;
const SOURCES = {
  original: {
    title: '',
    description: '',
    url: URL
  }
};

function Header(props) {
  let source = SOURCES[props.source || 'original'];
  let headTitle = source.title;
  let headerStyle = {};
  let headerStickyClassNames = '';

  if (props.sticky) {
    headerStyle.boxShadow = '0 4px 3px -2px rgba(0, 0, 0, 0.1)';
    headerStickyClassNames = 'sm:sticky static';
  }

  if (props.headTitle) {
    headTitle = `${props.headTitle} | ${source.title}`;
  }

  let linkAs = `/`;

  let linkHref = `/index`;

  return (
    <>
      <Head>
        <title>{headTitle}</title>

        <meta name="title" content={headTitle} />
        <meta name="description" content={source.description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={headTitle} />
        <meta property="og:description" content={source.description} />
        <meta property="og:image" content={SHARE_IMAGE_URL} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={URL} />
        <meta property="twitter:title" content={headTitle} />
        <meta property="twitter:description" content={source.description} />
        <meta property="twitter:image" content={SHARE_IMAGE_URL} />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div
        className={`py-4 mb-4 border-b border-gray-100 top-0 bg-white z-10 ${headerStickyClassNames}`}
        style={headerStyle}
      >
        <h1 className="text-xl text-gray-900">
          <Link href={linkHref} as={linkAs}>
            <a>{source.title}</a>
          </Link>
        </h1>
        <h2 className="text-md text-gray-700">{source.description}</h2>
        <h4 className="text-xs text-gray-500">
          Desarrollado por{' '}
          <a className="underline" href="">
            Cambiame
          </a>
          . Código abierto en{' '}
          <a className="underline" href="">
            Cambiame
          </a>
        </h4>

        <Search source={props.source} query={props.query} />
      </div>
    </>
  );
}

export default Header;
