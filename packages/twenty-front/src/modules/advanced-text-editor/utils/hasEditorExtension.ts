import { type Editor } from '@tiptap/core';
import { isDefined } from 'twenty-shared/utils';

// Tiptap nulls extensionManager when it destroys an editor, and menus can still
// render against that instance while its replacement is being created.
export const hasEditorExtension = (
  editor: Editor | null | undefined,
  extensionName: string,
) => {
  const extensionManager: Editor['extensionManager'] | null | undefined =
    editor?.extensionManager;

  return (
    isDefined(extensionManager) &&
    extensionManager.extensions.some(
      (extension) => extension.name === extensionName,
    )
  );
};
