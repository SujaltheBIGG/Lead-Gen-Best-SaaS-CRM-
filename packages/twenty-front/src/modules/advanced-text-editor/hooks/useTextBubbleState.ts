import { type Editor } from '@tiptap/core';
import { type EditorStateSnapshot, useEditorState } from '@tiptap/react';
import { isDefined } from 'twenty-shared/utils';

export const useTextBubbleState = (editor: Editor) => {
  const state = useEditorState({
    editor,
    selector: (ctx: EditorStateSnapshot) => {
      if (!isDefined(ctx.editor)) {
        return {
          isBold: false,
          isItalic: false,
          isStrike: false,
          isUnderline: false,
          isLink: false,
          linkHref: '',
          isBulletList: false,
          isOrderedList: false,
        };
      }

      return {
        isBold: ctx.editor.isActive('bold'),
        isItalic: ctx.editor.isActive('italic'),
        isStrike: ctx.editor.isActive('strike'),
        isUnderline: ctx.editor.isActive('underline'),
        isLink: ctx.editor.isActive('link'),
        linkHref: ctx.editor.getAttributes('link').href || '',
        isBulletList: ctx.editor.isActive('bulletList'),
        isOrderedList: ctx.editor.isActive('orderedList'),
      };
    },
  });

  return state;
};
