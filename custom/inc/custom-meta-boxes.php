<?php 

add_action( 'cmb2_admin_init', 'cmb2_metaboxes' );
/**
 * Define the metabox and field configurations.
 */
function cmb2_metaboxes() {
    /**
     * Initiate the metabox
     */
    $cmb = new_cmb2_box( array(
        'id'            => 'test_metabox',
        'title'         => __( 'Test Metabox', 'cmb2' ),
        'object_types'  => array( 'page', ), // Post type
        'context'       => 'normal',
        'priority'      => 'high',
        'show_names'    => true
    ) );

    // Regular text field
    $cmb->add_field( array(
        'name'       => __( 'Test Text', 'cmb2' ),
        'desc'       => __( 'field description (optional)', 'cmb2' ),
        'id'         => 'text',
        'type'       => 'text'
    ) );

    // URL text field
    $cmb->add_field( array(
        'name' => __( 'Website URL', 'cmb2' ),
        'desc' => __( 'field description (optional)', 'cmb2' ),
        'id'   => 'url',
        'type' => 'text_url'
    ) );

    // Email text field
    $cmb->add_field( array(
        'name' => __( 'Test Text Email', 'cmb2' ),
        'desc' => __( 'field description (optional)', 'cmb2' ),
        'id'   => 'email',
        'type' => 'text_email'
    ) );

}