const Footer = () => {
  return (
    <footer className='container'>
      <h3>spence.</h3>
      <p>
        Spence is an open platform for individuals to share their unfiltered thoughts. Discuss the topics you love, and get paid for doing{' '}
        <em>just</em> that.
      </p>
      <ul className='footer-links'>
        <li>
          <h3>Company</h3>
          <ul className='footer-links-item'>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Customers</a>
            </li>
            <li>
              <a href='/'>Blog</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Opportunities</h3>
          <ul className='footer-links-item'>
            <li>
              <a href='/'>Jobs</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Sitemap</h3>
          <ul className='footer-links-item'>
            <li>
              <a href='/'>Homepage</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Resources</h3>
          <ul className='footer-links-item'>
            <li>
              <a href='/'>Support</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
            <li>
              <a href='/'>FAQ</a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
