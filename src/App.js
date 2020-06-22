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

const SAMPLE_MARKDOWN=
`---

sample text from [freeCodeCamp](https://codepen.io/freeCodeCamp/full/GrZVVO)

---

# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      markdown:SAMPLE_MARKDOWN,
    };
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      markdown:event.target.value,
    });
  }

  componentDidMount(){
    document.getElementById("editor").innerHTML=SAMPLE_MARKDOWN;
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
