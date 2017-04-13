(function($){
   $.fn.multi_bg=function(option){
      var setting={
      };
      return this.each(function(){
        if (option){$.extend(setting,option);}
        jQuery(this).each(function () {
            if(jQuery(this).is('[data-background]')) {
                var attr_image = jQuery(this).attr('data-background');
                var parse_bg = jQuery(this).attr('data-bg-color');
                var parse_opacity = jQuery(this).attr('data-img-opacity');
                jQuery(this).css({'position':'relative', 'overflow':'hidden', 'background': '' + parse_bg + ''});
                if(jQuery(this).children('.child-bg').length) {}
                else {
                jQuery('<img class="row child-bg" src="'+ attr_image +'" style=" position: absolute; left: 0px; bottom: 0px; top: 0px; opacity: ' + parse_opacity + '; z-index: 1; min-width:calc(100% + 20px); min-height: 100%;" alt="">').prependTo(jQuery(this));
                jQuery(this).children('.child-bg').nextAll().css({"z-index": "2", "position": "relative"});
                }
                if(jQuery(this).is('[data-paralax]')) {
                        var paralax_el = jQuery(this).children('.child-bg');
                        var paralax_speed = jQuery(this).attr('data-paralax');
                        var this_offset = jQuery(paralax_el).offset().top;
                        var this_height = jQuery(paralax_el).height();
                        var top_point = this_offset - this_height / 2;
                        var break_point = this_offset + this_height / 2;
                        $(window).scroll(function() {
                        var scroll_position = jQuery(window).scrollTop();
                        if( scroll_position > top_point && scroll_position < break_point) {
                                if(jQuery(paralax_el).length) {
                                   paralax_el.css({'transform':'translateY(-'+ scroll_position * paralax_speed +'px)'});
                                   console.log(paralax_el.attr('class'));
                                }
                        } 
                        });
                }
            }
        });
      });
   };
})(jQuery);
