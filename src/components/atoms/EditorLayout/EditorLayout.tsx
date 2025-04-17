import React, { HtmlHTMLAttributes } from 'react'

import './editor-layout.css'

interface IEditorLayoutProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const EditorLayout = ({children}:IEditorLayoutProps) => {
  return (
    <div className='editor'>
       {children}
    </div>
  )
}
