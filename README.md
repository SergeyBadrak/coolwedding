# coolwedding



<h1>HTML 5 Video Player with Google Analytics event tracking</h1>


<h4>HTML code of Player markup</h4>



    <h2 class="text-center">LOVE STORY</h2>

                <div class="row justify-content-center ">

                    <div class="col-12 col-lg-6 videos">
                        <a class="play_btn play_video" data-video-source="#video_17" href="#"></a>

                        <video id="video_17" preload="none" poster="video/Klip_AK-768x432.jpg">
                            <source src="video/3.mp4" type="video/mp4">
                        </video>
                        <h4>Ася + Андрей</h4>
                    </div>

                </div> 
                

  
  
  
  <h4>Add and initialize the jQuery and Video Player scripts</h4>
  
  
  ```
  <script src="js/jquery.min.js"></script>
  
  <script src="js/ui-video.js"></script>
      
  <script>
	$(document).ready(function() { 
  	$().uiPlayVideoFullScreen(
        {
            videoContainer: "videos",
            videoPlayed: "video_container-fix-h-played",
            PlayBtn: "play_video",
            HideBtn: "hide_video_btn"
        }
    );
	});
  </script>  
     
