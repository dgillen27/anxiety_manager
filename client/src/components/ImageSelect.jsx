import React from 'react';

const ImageSelect = (props) => {
  const { selectImage } = props
  return(
    <div className="image-select-container">
      <h1>Select a Profile Picture</h1>
      <img className="login-image" onClick={() => selectImage("https://i.imgur.com/nwRqeIJ.jpg")} src="https://i.imgur.com/nwRqeIJ.jpg" alt="picture-option" />
      <img className="login-image" onClick={() => selectImage("https://i.imgur.com/oeAy5t4.png")} src="https://i.imgur.com/oeAy5t4.png" alt="picture-option" />
      <img className="login-image" onClick={() => selectImage("https://i.imgur.com/PuypgrS.jpg")} src="https://i.imgur.com/PuypgrS.jpg" alt="picture-option" />
      <img className="login-image" onClick={() => selectImage("https://i.imgur.com/VXltKvj.png")} src="https://i.imgur.com/VXltKvj.png" alt="picture-option" />
      <img className="login-image" onClick={() => selectImage("https://i.imgur.com/xYivAbf.jpg")} src="https://i.imgur.com/xYivAbf.jpg" alt="picture-option" />
      <img className="login-image" onClick={() => selectImage("https://i.imgur.com/SkPcqfX.jpg")} src="https://i.imgur.com/SkPcqfX.jpg" alt="picture-option" />
      <img className="login-image" onClick={() => selectImage("https://i.imgur.com/M4AiPI7.jpg")} src="https://i.imgur.com/M4AiPI7.jpg" alt="picture-option" />
      <img className="login-image" onClick={() => selectImage("https://i.imgur.com/SF2YpwS.png")} src="https://i.imgur.com/SF2YpwS.png" alt="picture-option" />
    </div>
  )
}

export default ImageSelect;
