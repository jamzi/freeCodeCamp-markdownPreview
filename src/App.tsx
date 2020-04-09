import * as React from "react";
import marked from "marked";
import Draggable from "react-draggable";

import "./reset.css";
import "./styles.css";
import defaultMarkdown from "./default.md";

marked.setOptions({
  breaks: true
});

const defaultText = defaultMarkdown;

export default function App() {
  const [text, setText] = React.useState(defaultText);

  const parsedText = marked(text);

  return (
    <div>
      <Draggable handle="#panel-header" scale={1}>
        <div id="panel-wrapper">
          <div id="panel-header" />
          <textarea
            id="editor"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
      </Draggable>
      <Draggable handle="#panel-header" scale={1}>
        <div id="panel-wrapper">
          <div id="panel-header" />
          <div id="preview" dangerouslySetInnerHTML={{ __html: parsedText }} />
        </div>
      </Draggable>
    </div>
  );
}
