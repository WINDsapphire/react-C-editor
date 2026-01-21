import React, {useEffect, useState} from "react";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { oneDark } from "@codemirror/theme-one-dark";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import axios from 'axios'
import "./CodeMirrorPage.css"


const CodeMirrorPage = () => {
    const [code, setCode] = useState(
`//Begin your codes from here.
#include <stdio.h>
int main(){
    printf("hello world!\\n");
    return 0;
}`
    );

    const postCodes = async() => {
        try{
            const response = await axios.post(
                'http://localhost:5000/api/post-c-code',
                {
                    userId: 'vegird',
                    content: code
                }
            );
            console.log(JSON.stringify(response.data, null, 2));
        } catch (err) {
            console.log('post fail:' + (err.response?.data?.message || err.message));
        }
    }


    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const fetchData = async () => {
        // fetch('http://localhost:5000/api/hello')
        //     .then(res => res.json())
        //     .then(data => setMessage(data.message));
        setMessage('');
        setError('');
        setLoading(true);

        try{
            // 发送axios请求
            const response = await axios.get('http://localhost:5000/api/hello');
            setMessage(response.data.message);
        } catch (err) {
            setError('请求失败：' + (err.response?.data?.message || err.message));
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ padding: '20px' , textAlign : 'left'}}>
            <h1>CodeMirror C Editor</h1>
            <CodeMirror
                theme={vscodeDark}
                extensions={[cpp(), vscodeDark]}
                options={{
                    lineNumbers: true,
                    lineWrapping: true,
                    tabSize: 4 // 兜底配置，确保兼容性
                }}
                value={code}
                onChange={(value)=>{
                    setCode(value);
                }}
                style={{ height: 'auto', border: '1px solid #ccc' }}
            ></CodeMirror>
            <button
            onClick={postCodes}>Submit</button>
            <button
            onClick={fetchData}
            disabled={loading}
            style={{ padding : '8px 16px', cursor : 'pointer' }}
            >
                {loading ? 'fetching' : 'go fetch'}
            </button>
            {message && <p style={{ color : 'green', marginTop : '10px' }}>{message}</p>}
            {error && <p style={{ color : 'red', marginTop : '10px' }}>{error}</p>}
        </div>
        
    )
}

export default CodeMirrorPage;
