import './App.css';
import React, {Component, useState} from 'react';
import search from './search';

function App() {
  return (
    <div className="App">
      <Gallary/>
    </div>
  );
}

class Gallary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[],
      imageSelected: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
  }

  async fetchImages(term) {
    let results = [];
    if (!term) {
      return;
    }
    try {
      results = await search.get('', {
        params: {
          q: term
        }
      });
    } catch (e) {
      console.log(e);
      results = []
    }
    const data = results?.data?.items || [];
    this.setState({
      images: data
    });
  }

  handleClick(image) {
    this.setState(
      {
        imageSelected: image
      }
    )
  }

  render() {
    return (
      <div className='wrapper'>
        <Preview imageSelected={this.state.imageSelected}/>
        <SearchBar handleSearch={this.fetchImages}/>
        <Album images={this.state.images} handleClick={this.handleClick}/>
      </div>
    );
  }
}

const SearchBar = (props) => {
  const [term, setTerm] = useState('');
  const onFormSubmit = event => {
    // prevent form's default get request sent by browser
    // and page refresh
    // so that custom handleSearch gets to run
    event.preventDefault();
    props.handleSearch(term);
  }
  return (
    <form className='searchbar' onSubmit={onFormSubmit}>
      <input className='searchbar' type='text' onChange={(e) => setTerm(e.target.value)}/>
      <input type='submit' value='Search' />
    </form>
  );
}

const Album = ({images, handleClick}) => {
  return (
    <ul className='wrapper'>
      {images.map((image) => {
        return (
          <ImageItem image={image} key={image.link} handleClick={handleClick}/>
        );
      })}
    </ul>
  )
}

const ImageItem = ({image, handleClick}) => {
  return (
    <li className="image-item wrapper" onClick={() => handleClick(image)}>
      <img src={image?.image?.thumbnailLink} alt={image?.altText} style={{maxWidth: "200px"}}/>
      <div className='info'>
        <p>{image?.title}</p>
        <p>{image?.displayLink}</p>
      </div>
      <div className='info middle'>
        <p>{image?.snippet}</p>
      </div>
      <div className='info'>
        <p>{image?.displayLink}</p>
      </div>
    </li>
  );
}

const Preview = ({imageSelected}) => {
  if (!imageSelected) {
    return <div>Please Select An Image to Preview</div>
  }
  return (
    <div className='wrapper'>
      <h2>{imageSelected.title}</h2>
      <div className='wrapper container'>
        <img src={imageSelected.link} alt={imageSelected.altText} id='preview'/>
      </div>
      <p>{imageSelected.snippet}</p>
    </div>
  );
}

export default App;
