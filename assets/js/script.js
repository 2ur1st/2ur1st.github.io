/**
 * created by 2ur1st
 */

jQuery(document).ready(function() {

    $(".tags-block span").hover(
        function() {
            $(this).removeClass('label-default').addClass('label-primary')
        }, function() {
            $(this).removeClass('label-primary').addClass('label-default')
        }
    );

    hljs.initHighlightingOnLoad();
	
	WRAPPER_VK = {
    	apiId: 5089377,
	    init: function() {
	        VK.init({
	            apiId: WRAPPER_VK.apiId,
	            onlyWidgets: true
	        });
	    }
	};
	WRAPPER_VK.init();
	VK.Widgets.Comments("vk_comments", {limit: 15, width: "auto", attach: "*"})
});



