import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const renderEditor = ({input}) => {
    return (
      <CKEditor
        data={input.value}
        editor={ ClassicEditor }
        onChange={(event, editor) => {
            return input.onChange(editor.getData())
          }
        }
      />
    )
  }
  export default renderEditor;