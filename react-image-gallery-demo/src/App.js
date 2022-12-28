import './App.css';
import React, {Component} from 'react';
import data from './data.json'

function App() {
  return (
    <div className="App">
      <Gallary style={{display: "flex", flexDirection: "column", alignItems: "center"}}/>
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
      <div>
        <Preview imageSelected={this.state.imageSelected}/>
        <Album images={this.state.images} handleClick={this.handleClick}/>
      </div>
    );
  }
}

const Album = ({images, handleClick}) => {
  return (
    <ul>
      {images.map((image, index) => {
        return (
          <ImageItem image={image} key={"img-" + index} handleClick={handleClick}/>
        );
      })}
    </ul>
  )
}

const ImageItem = ({image, handleClick}) => {
  return (
    <li className="image-item" style={{display: "flex", alignItems: "center", cursor: "pointer"}} onClick={() => handleClick(image)}>
      <img src={image.url} alt={image.altText} style={{maxWidth: "200px"}}/>
      <p>{image.title}</p>
    </li>
  );
}

const Preview = ({imageSelected}) => {
  if (!imageSelected) {
    return <div>Please Select An Image to Preview</div>
  }
  return (
    <div>
      <h2>{imageSelected.title}</h2>
      <img src={imageSelected.url} alt={imageSelected.altText} />
      <p>{imageSelected.description}</p>
    </div>
  );
}

export default App;
