(function ( $ ) {

$.fn.uiPlayVideoFullScreen = function( options ) {
	
//	----------------- Variables ------------------------
    var settings = $.extend({
        
        //  Set Default Setting
            videoContainer: "video_container-fix-h",
            videoPlayed: "video_container-fix-h-played",
            PlayBtn: "play_video",
            HideBtn: "hide_video_btn"
        
        }, options );
    
        
//  ******** Main Code for Video Plaer Start ********
    
    $(document).on('click', "." + settings.PlayBtn, function(e) {
        e.preventDefault();
        
      //  Pause all videos playback before played selected video
      $('body').find("video").each(function () {
          this.pause();
          $(this).attr('controls',false);
      });
      $('body').find("." + settings.HideBtn).removeClass(settings.HideBtn);
        
        
        // Hide Play Button for cuurent video
        $(this).addClass(settings.HideBtn);
        
        // Find video source
        var videoid = $(this).attr('data-video-source');
        var video = $(videoid).get(0);
        
        video.play();
        $(video).attr('controls',true);
        
//  ******** Main Code for Video Plaer End ********   
        
        
        
//   ********   Google Analitics Event Listener Start ********
        
        var a = true;
        var b = true;
        var c = true;
        
        var action_label = '';
        var timePlayback = '';
        var category = 'Videos';
        
        var title = $(this).parent().find("h4").html();
        
//      Find H2 tag        
        var section = $(this).closest(".row").prev().html();
        
        var fullName = section + ": " + title;  
        var videoFileName = $(video).children("source").attr("src");

        
        
    /* Start Video Play */
    $(videoid).bind("play", function() {
//        console.log("Start Video Play");
        sendToAnalitics(category, 'video played', fullName, timePlayback);
    });
     
    /* Video Paused */    
    $(videoid).bind("pause", function() {  
        sendToAnalitics(category, 'video paused', fullName, timePlayback);
//        console.log("paused");    
    }); 
        
    /* Video Finished, Thanks */
    $(videoid).bind("ended", function() {
        sendToAnalitics(category, 'watched 100%', fullName, timePlayback);
//        console.log("Finished 100%");
    });
        
    /* Video Play Progress  */
    $(videoid).bind("timeupdate", function() {
        var currentTime = this.currentTime;
        
                if (currentTime > (0.75 * (this.duration))) {
                    if (c) {
                        console.log("watched 75%");
                        sendToAnalitics(category, 'watched 75%', fullName, timePlayback);
                        c = false; 
                    }
                } 
        else if (currentTime > (0.50 * (this.duration))) {
                    if (b) {
                        console.log("watched 50%");
                        sendToAnalitics(category, 'watched 50%', fullName, timePlayback);
                        b = false; 
                    }
                } 
        else if (currentTime > (0.25 * (this.duration))) {
                    if (a) {
                        console.log("watched 25%");
                        sendToAnalitics(category, 'watched 25%', fullName, timePlayback); 
                        a = false;    
                    }
                }
    }); 
        
//   ********   Google Analitics Event Listener End ********        
        
        
        
//   *************   Send To Google Analytics Start *************
        
        function sendToAnalitics(category, action_label, fullName, timePlayback) {
            
            gtag('event', action_label, {
              'event_category': category,
              'event_label': fullName,
              'video_name': fullName,
              'time_playback': timePlayback  
            });
            
        }
        
//   *************   Send To Google Analytics End *************
        
        
        
        
        return false;
    });

    
};
    
}( jQuery ));