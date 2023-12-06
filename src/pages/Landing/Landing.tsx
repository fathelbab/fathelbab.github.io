import React, {useState} from 'react';
import './LandingPage.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
const LandingPage = () => {
  const [itemData, setItemData] = useState([
    {
      img: '1.webp',
      title: '1',
    },
    {
      img: '2.webp',
      title: '2',
    },
    {
      img: '3.webp',
      title: '3',
    },
    {
      img: '4.webp',
      title: '4',
    },
    {
      img: '5.webp',
      title: '5',
    },
    {
      img: '6.webp',
      title: '6',
    },
    {
      img: '7.webp',
      title: '7',
    },
    {
      img: '8.webp',
      title: '8',
    },
    {
      img: '9.webp',
      title: '9',
    },
    {
      img: '10.webp',
      title: '10',
    },
    {
      img: '11.webp',
      title: '11',
    },
    {
      img: '12.webp',
      title: '12',
    },
    {
      img: '13.webp',
      title: '13',
    },
  ]);
  return (
    <div className="landing-page">
      <section className="profile-section">
        <img src="Photo.JPG" alt="Profile" className="profile-pic" />
        <h1>Mohamed Ahmed Fathelbab</h1>
        <p>Software Engineer (7+ Years) 🥸</p>
      </section>

      <section className="about-me">
        <h2>About Me  🧐</h2>
        <p>Hello  🤗 , My name is Mohamed I am <b>Software Engineer with 7+ years</b> of professional experience. My key roles in developing innovative solutions for various domains. I have contributed significantly to a wellness diet management app and a QR ordering system for restaurants, demonstrating skills in <b>Elixir, Rails, React.js, React Native, and Ruby.</b> Mohamed's achievements include <b>designing reusable components, integrating payment gateways, and optimizing Websites, mobile applications, Backend apps </b>for superior performance. My expertise extends to access control systems, where <b>I managed databases, developed APIs, and ensured security for over 10,000 users.</b> <b>I translates designs into high-quality code, creates intuitive user interfaces, and implements efficient, testable, and reusable code.</b> My commitment to excellence is reflected in my ability to troubleshoot systems, define requirements, and support operational teams.</p>
      </section>

      <section className="skills">
        <h2>Skills (but not limited to) 🤓</h2>
        <ul>
  <li>JavaScript</li>
  <li>TypeScript</li>
  <li>Elixir</li>
  <li>Erlang</li>
  <li>Phoenix</li>
  <li>Ruby</li>
  <li>Rails</li>
  <li>ES6</li>
  <li>Git</li>
  <li>GitHub</li>
  <li>Jira</li>
  <li>Trello</li>
  <li>Android Studio</li>
  <li>Xcode</li>
  <li>Material UI React</li>
  <li>PostgreSQL</li>
  <li>MySQL</li>
  <li>Kafka</li>
  <li>Kubernetes</li>
  <li>Project Management</li>
  <li>AWS</li>
  <li>React</li>
  <li>React-Native</li>
  <li>Redux</li>
  <li>Node</li>
  <li>HTML</li>
  <li>CSS</li>
        </ul>
      </section>

      <section className="portfolio">
        <h2>Portfolio  😎</h2>
        <ImageList sx={{ width: 700, height: 650 }} variant="woven" cols={3} gap={8}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=161&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
      </section>

      <section className="contact">
        <h2>Contact Me  🥹</h2>
        <form>
        <ul>
    <li>Phone: +201011377755</li>
    <li>LinkedIn: <a href="https://www.linkedin.com/in/mohamed-ahmed-fathelbab-30001a103/" target="_blank">My Linkedin</a></li>
    <li>GitHub: <a href="https://github.com/fathelbab" target="_blank">My Github</a></li>
    <li>Email: <a href="mailto:fathelbabmohamed94@gmail.com">fathelbabmohamed94@gmail.com</a></li>
  </ul>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
