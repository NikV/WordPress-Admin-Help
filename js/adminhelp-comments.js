jQuery(function( $ ) {
    /**
     * Setup tooltips as objects in an array.
     * @param string slug How the AdminHelp class identifies the tooltip
     * @param array selector Array of css selectors for the items the tooltip
     * should be attached to
     * @param string content Content to be displayed in the tooltip
     */
    adminHelp.add([
        {
            slug: 'commentauthorcolumn',
            selector: [
                '.manage-column.column-author span:nth-of-type(1)'
            ],
            content: adminhelp_content.commentauthorcolumn
        }
    ]);
});