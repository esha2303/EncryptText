import React, { useState } from 'react'
import './HomePage.css';
import encrypt from './encrypt';
import decrypt from './decrypt';
import Plant from '../assets/plant.png';

const HomePage = () => {

    const [encText, setencText] = useState("");
    const [decText, setDecText] = useState("");

    const encryptText =() => {
        const val = encrypt(encText);
        setDecText(val);
    }

    const decryptText =() => {
        const val = decrypt(decText);
        setencText(val);
    }

  return (
      <div className="container">
        <div className="header">
            <text className="header-text">ENCRYPT YOUR TEXT</text>
        </div>
        <div className="leftContainer">
            <form>
                <textarea 
                rows="25" className="encrypt-text" type="text" placeholder="Enter text to Encrypt"
                onChange={(e) => setencText(e.target.value)} 
                value={encText}
                />
            </form>
        </div>
        <div className="buttonContainer">
            <button className="encrypt-button" onClick={encryptText}>Encrypt</button>
            <button className="decrypt-button" onClick={decryptText}>Decrypt</button>
        </div>
        <div className="rightContainer">
            <form>
                <textarea rows="25" 
                className="decrypt-text" type="text" placeholder="Enter text to decrypt"
                onChange={(e) => setDecText(e.target.value)} 
                value={decText} 
                />
            </form>
        </div>
        <div className="image-plant">
            <img src={Plant}/>
        </div>

      </div>
  )
}

export default HomePage