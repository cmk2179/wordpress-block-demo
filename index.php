<?php
/**
 * Plugin Name:       demo blocks
 * Description:       Plugin that demonstrates a way to setup a plugin with multiple blocks
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Chris Opstrup <ckjaersig@gamil.com>
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       demo-blocks
 *
 * @package           demo-blocks
 */
function demo_block_init() {
	register_block_type( __DIR__ . '/blocks/example-block/build' );
}
add_action( 'init', 'demo_block_init' );
