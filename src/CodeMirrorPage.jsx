import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { oneDark } from "@codemirror/theme-one-dark";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
// import { UnControlled as CodeMirror } from 'react-codemirror2';
import "./CodeMirrorPage.css"


const CodeMirrorPage = () => {
    const defaultCode = 
`//Begin your codes from here.
#include <stdio.h>
int main(){
    printf("hello world!");
return 0;
}
`;
    return (
        <div style={{ padding: '20px' , textAlign : 'left'}}>
            <h1>CodeMirror C Editor</h1>
            <CodeMirror
                theme={vscodeDark}
                extensions={[cpp(), vscodeDark]}
                options={{
                    lineNumbers: true,
                    lineWrapping: true,
                    tabSize: 2
                }}
                value={defaultCode}
                onChange={(value)=>{
                    console.log("C 代码变换：", value);
                }}
                style={{ height: '400px', border: '1px solid #ccc' }}
            ></CodeMirror>
        </div>
    )
}

export default CodeMirrorPage;
