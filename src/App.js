import './App.css';
import {React, useEffect, useRef, useState } from 'react';
import * as d3 from "d3";
import SelectBox from './components/SelectBox';
import SvgTemplate from './components/SvgTemplate';

function App() {
  const [templateId, setTemplateId] = useState("template1")
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const aTag = useRef();

  useEffect(() => {
    setTitle("");
    setSubTitle("");
  },[templateId])

  const svgExport = (e) =>{
    console.log(d3.select('#svg_' + templateId).html());
    d3.select('#download')
      .attr("href", 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(d3.select('#templateDiv').html()))))
      .attr("download", "test.svg") 

      console.log(document.getElementById("download")[0]);
      setTimeout(() =>{
        aTag.current.click();
      }, 300);
    
  }

  const titleChange = (e) => {
    d3.select('#svg_' + templateId).select("#title").text(e.target.value);
    setTitle(e.target.value);

  }

  const subTitleChange = (e) => {
    d3.select('#svg_' + templateId).select("#subTitle").text(e.target.value);
    setSubTitle(e.target.value);
  }

  return (
    <div style={{width:'100%', height: '100%'}}>
      <SelectBox templateId={templateId} setTemplateId={setTemplateId} />
      <div style={{width: '100%', height: '20px'}}>
        <label style={{float: 'left'}}>타이틀</label>
        <input type="text" value={title} onChange={titleChange} style={{float: 'left'}}/>

        <label style={{marginLeft: '10px', float: 'left'}}>SUB 타이틀</label>
        <input type="text" value={subTitle} onChange={subTitleChange} style={{float: 'left'}}/>
        <button onClick={svgExport} style={{float: 'left'}}>export</button>
        <a id="download" href="#" ref={aTag} style={{display: 'none'}}>Download SVG</a>        
      </div>
      <div id="templateDiv">
        <SvgTemplate templateId={templateId} />
      </div>

      {/* <svg ref={svgRef}></svg>
      <button onClick={svgExport}>export</button> */}
    </div>
  );
}

export default App;
