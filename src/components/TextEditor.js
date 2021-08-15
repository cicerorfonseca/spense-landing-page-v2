import texteditor from '../assets/imgs/text-editor.png';

const TextEditor = () => {
  return (
    <section className='text-editor container'>
      <div className='content-wrapper'>
        <h2 className='section-header'>A text editor like no other.</h2>
        <p>Our text editor pulls you into focus mode with it's simplistic design and usability so you can put out your best writings.</p>
        <p>
          <a href='/' className='content-anchor'>
            Text Editor Live Demo <i class='fas fa-long-arrow-alt-right'></i>
          </a>
        </p>
        <div className='img-wrapper'>
          <img src={texteditor} alt='April earning withdraw' />
        </div>
      </div>
    </section>
  );
};

export default TextEditor;
