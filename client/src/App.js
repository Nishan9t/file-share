import {useRef, useState,useEffect} from 'react'
import './App.css';
import {uploadFile} from './services/api' 

function App() {

  const fileInputRef=useRef();//useRef provides the virtual DOM to pick the elements of html

  const [file,setFile]=useState('');
  const [result,setResult]=useState('');

const logo="https://img.freepik.com/free-vector/transfer-files-concept-landing-page_52683-24770.jpg?w=1060&t=st=1690282902~exp=1690283502~hmac=cc6a98eb0acece78c35f5e34ffefb966e322f28056b3ba19b8a1c4ca0e58b022";

useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        const response=await uploadFile(data);
        console.log(response);
        setResult(response.path);

      }

    }
    getImage();
},[file])

const onuploadClick=()=>{
  fileInputRef.current.click();
}

  return (
    <div className="container">
      <img src={logo} alt="banner"/>
      <div className="wrapper">
          <h1>Simple File Sharing</h1>
          <p>Upload and share the download link</p>
          <button onClick={()=>onuploadClick()}>Upload</button>

          <input type="file"
            ref={fileInputRef}
            style={{display:'none'}}
            onChange={(e)=> setFile(e.target.files[0])}
          />

          <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
