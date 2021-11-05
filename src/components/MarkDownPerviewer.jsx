import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './mkdPreviewer.css'

const placeholder = `# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.org), and
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


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const Previewer = ({input}) => {
    return <div id='preview'>
    <ReactMarkdown children={input} remarkPlugins={[remarkGfm]} />    
    </div>
}

export default function ParseToMkd() {

    const [input, setInput] = useState(placeholder)

    const onChange = (e) => {
        setInput(e.target.value)
    }

    return <div className="container">
      <div className="row justify-content-center">       
       <div className='my-2 form-group w-50'>
        <p className='text-center alert alert-success'>Editeur Textes :</p>
        <textarea type="textarea" id='textearea' rows="8" className='form-control' value={input} onChange={onChange} />
        </div>
      </div>
        <div className="my-2">
        <p className='text-center alert alert-success'>Previewer</p>
        <Previewer input={input} />
        </div>
        </div>
}