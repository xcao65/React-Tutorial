import './App.css';
import React, {Component} from 'react';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <Gallary/>
    </div>
  );
}

class Gallary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images:[],
      imageSelected: null
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.setState({
      images: data
    })
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
        <Album images={this.state.images} handleClick={this.handleClick}/>
      </div>
    );
  }
}

const Album = ({images, handleClick}) => {
  return (
    <ul className='wrapper'>
      {images.map((image) => {
        return (
          <ImageItem image={image} key={image} handleClick={handleClick}/>
        );
      })}
    </ul>
  )
}

const ImageItem = ({image, handleClick}) => {
  return (
    <li className="image-item wrapper" onClick={() => handleClick(image)}>
      <img src={image.url} alt={image.altText} style={{maxWidth: "200px"}}/>
      <div className='info'>
        <p>{image.title}</p>
        <p>{image.altText}</p>
      </div>
      <div className='info middle'>
        <p>Location</p>
      </div>
      <div className='info'>
        <p>timestamp</p>
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
        <img src={imageSelected.url} alt={imageSelected.altText} id='preview'/>
      </div>
      <p>{imageSelected.description}</p>
    </div>
  );
}

export default App;
