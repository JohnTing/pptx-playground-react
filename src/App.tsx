import React from 'react';
import logo from './logo.svg';
import './App.css';
import JSZip from 'jszip';







function App() {

  async function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      alert("no file.");
      return;
    }
    console.log('files:', event.target.files);
    const zip = await JSZip.loadAsync(event.target.files[0]);
    console.log(zip);
    const page1 = zip.file("ppt/slideLayouts/slideLayout1.xml")

    const page1string = await page1?.async("string");
    console.log(page1string);

  };


  return (
    <div className="App">
      <input type={"file"}  onChange={onChange} accept=".pptx" />

    </div>
  );
}

export default App;
