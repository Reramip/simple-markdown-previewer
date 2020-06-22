import React from 'react';
import Marked from "marked";

const STYLES={
  app:{
    display: "flex",
    justifyContent:"space-between",
    margin:0,
    padding:0,
    fontFamily:"Arial"
  },
  editorWrapper:{
    width:"49vw",
    display: "flex",
    flexDirection: "column",
    alignItems:"stretch"
  },
  toolbar:{
    lineHeight:"4vh",
    fontSize:"1rem",
    fontWeight:800,
    backgroundColor:"#ccc",
    padding:"0 0 0 1vw"
  },
  editor:{
    height:"86vh",
    resize: "none"
  },
  previewer:{
    width: "49vw",
    height: "90vh",
    overflow: "auto",
    overflowWrap: "break-word",
    backgroundColor:"#fcfaf2"
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      markdown:'',
    };
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      markdown:event.target.value,
    });
  }

  render(){
    return (
      <div className="App" style={STYLES.app}>
      <div id="editorWrapper" style={STYLES.editorWrapper}>
        <div id="toolbar" style={STYLES.toolbar}>
          EDITOR
        </div>
        <textarea id="editor" style={STYLES.editor}
          onChange={this.handleChange}>
        </textarea>
      </div>
      <div id="previewer" style={STYLES.previewer}
          dangerouslySetInnerHTML={{__html: Marked(this.state.markdown)}}>
      </div>
      </div>
    );
  }
}

export default App;
