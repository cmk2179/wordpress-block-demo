# Demo of plugin with multiple blocks

Instead of using `@wordpress/create-block` to create blocks, I have made an attempt
to reuse dependencies across multiple blocks in a plugin, by leveraging the folder structure required by `@wordpress/scripts`.

## Getting started

- Install dependencies with `npm install`
- Create a new block or edit the existing block in `blocks/example-block`

## Developing

**Storybook**

- Create a story file and setup a story, see example in `blocks/example-block/components/example-block.stories.js` - for other supported file endings see `.storybook/main.js`
- Run storybook with `npm run storybook`

**Wordpress**

- Navigate to the block folder in the terminal and run `npx wp-scripts start`, this will create the build folder used for registrering the block in the `index.php` file
- Register the block in `index.php` - add the `register_block_type` call in `demo_block_init`

## Building

- Navigate to the block folder in the terminal and run `npx wp-scripts build`

## TODO

- Add a script to build all blocks
- Add a script to generate block registration code automatically and update `index.php`