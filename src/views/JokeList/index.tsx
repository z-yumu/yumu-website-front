import React, { FC, ReactElement, useEffect, useState } from 'react'
import '@wangeditor/editor/dist/css/style.css'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'

const JokeList: FC = (): ReactElement => {
    const [editor, setEditor] = useState<IDomEditor | null>(null)

    // 编辑器内容
    const [html, setHtml] = useState('')

    // 模拟 ajax 请求，异步设置 html
    useEffect(() => {
        setTimeout(() => {
            setHtml('')
        }, 1500)
    }, [])

    // 工具栏配置
    const toolbarConfig: Partial<IToolbarConfig> = {}

    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {
        placeholder: '请输入内容...',
    }

    // 及时销毁 editor  重要！
    useEffect(() => {
        return () => {
            if (editor === null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])
    
    return (
        <div>
            <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={(editor) => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '500px', overflowY: 'hidden' }}
                />
            </div>
        </div>
    )
}

export default JokeList
