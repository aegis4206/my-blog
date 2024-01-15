'use client'
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';

interface PropsType {
    code: String,
    language?: String,
    title?: String
}

const CodeHighlight = ({ code, language = "jsx", title }: PropsType) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div style={{ marginBottom: '0.35em', marginTop: '0.35em' }}>
            {title && <div className='px-4 py-1 bg-[#3a404d] text-white text-xs items-center rounded-t'>
                {title}
            </div>}
            <pre style={{
                margin: 0,
                borderRadius: title ? "0px 0px 0.3em 0.3em" : "0.3em",
            }}>
                <code className={`line-numbers language-${language}`}
                    style={{
                        // whiteSpace: 'pre-wrap' 
                    }}
                >
                    {code}
                </code>
            </pre>
        </div>
    );
};

export default CodeHighlight;