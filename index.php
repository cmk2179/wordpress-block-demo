<?php
/**
 * Plugin Name:       ckjaersig blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Chris Opstrup <ckjaersig@gamil.com>
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ckjaersig-blocks
 *
 * @package           ckjaersig-blocks
 */
function ckjaersig_block_init() {
	register_block_type( __DIR__ . '/blocks/example-block/build' );
}
add_action( 'init', 'ckjaersig_block_init' );
