import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { ChangeEvent, useCallback, useEffect } from "react";
import "./MarkDownEditor.css"
import { useChatContext } from '../../context/ChatContextProvider';
const longText = "# My Markdown Document\n\n## Introduction\n\nWelcome to this **markdown** document. Markdown is a simple way to format text that can be easily converted to HTML.\n\n### Links\n\n- [OpenAI](https://www.openai.com): Visit OpenAI's website.\n- [GitHub](https://github.com): Explore GitHub for code repositories.\n\n### Images\n\n![OpenAI Logo](https://www.openai.com/favicon.ico)\n![Sample Image](https://via.placeholder.com/150)\n\n### Paragraphs\n\nHere’s a paragraph with some text to illustrate markdown formatting. You can use this to describe anything you like.\n\nAnother paragraph to demonstrate how multiple paragraphs are displayed.\n\n### Anchors\n\nTo jump to a specific section, click [here](#introduction).\n\n## Conclusion\n\nThis is the conclusion of the document. Thank you for reading!"


const MarkdownEditor = ({ markdownContent }: { markdownContent: string }) => {

    return (
        <div className='h-full w-full overflow-scroll'>
            <MarkdownPreview source={markdownContent} style={{ padding: 16 }} />
        </div>
    )
};

export default MarkdownEditor;
