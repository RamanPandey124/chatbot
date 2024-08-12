import React from 'react';
import Editor from '@monaco-editor/react';
import ReactMarkdown from 'react-markdown';
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { ChangeEvent, useCallback, useEffect } from "react";
import "./MarkDownEditor.css"


const MarkdownEditor = ({ markdownContent }: { markdownContent: string }) => {
    const editor = useCreateBlockNote();

    useEffect(() => {
        async function loadInitialHTML() {
            const blocks = await editor.tryParseMarkdownToBlocks(markdownContent);
            editor.replaceBlocks(editor.document, blocks);
        }
        loadInitialHTML();
    }, [editor, markdownContent]);

    return (
        <div className='h-full w-full overflow-scroll'>
            <BlockNoteView editor={editor} editable={false} />
        </div>
    )
};

export default MarkdownEditor;
