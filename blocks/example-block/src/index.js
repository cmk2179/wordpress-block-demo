import "@wordpress/element";

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import "./style.scss";

// Import editor styles
import "./editor-style.scss";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
  useBlockProps,
  BlockControls,
  PlainText,
  InspectorControls,
  ColorPalette,
  RichText,
} from "@wordpress/block-editor";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import { ExampleBlock } from "./components/example-block";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType("ckjaersig/example-block", {
  /**
   * @see ./edit.js
   */
  edit: ({ attributes, setAttributes }) => {
    const onChangeTitle = (newTitle) => {
      setAttributes({
        title: newTitle,
      });
    };

    const onChangeBackgroundColor = (newColor) => {
      setAttributes({ backgroundColor: newColor });
    };

    const onChangeContent = (newContent) => {
      setAttributes({ content: newContent });
    };

    return (
      <div {...useBlockProps()}>
        <BlockControls>
          <button>B</button>
        </BlockControls>
        <InspectorControls key="setting">
          <div id="ckjaersig-controls">
            <fieldset>
              <legend className="blocks-base-control__label">
                {__("Title", "ckjaersig-blocks")}
              </legend>
              <PlainText
                value={attributes.title}
                onChange={onChangeTitle}
              ></PlainText>
            </fieldset>
            <fieldset>
              <legend className="blocks-base-control__label">
                {__("Background color", "ckjaersig-blocks")}
              </legend>
              <ColorPalette
                value={attributes.backgroundColor}
                onChange={onChangeBackgroundColor}
              ></ColorPalette>
            </fieldset>
          </div>
        </InspectorControls>
        <ExampleBlock
          title={attributes.title}
          backgroundColor={attributes.backgroundColor}
        >
          <RichText
            value={attributes.content}
            onChange={onChangeContent}
          ></RichText>
        </ExampleBlock>
      </div>
    );
  },

  /**
   * @see ./save.js
   */
  save: ({ attributes }) => {
    return (
      <ExampleBlock
        {...useBlockProps.save()}
        title={attributes.title}
        backgroundColor={attributes.backgroundColor}
      >
        <RichText.Content value={attributes.content}></RichText.Content>
      </ExampleBlock>
    );
  },
});
