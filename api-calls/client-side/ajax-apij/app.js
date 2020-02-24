$(document).ready( function() { 
    $('.gallery').each(function(){
        var noOfPhotos=0, tagsVar=0;
        noOfPhotos = $(this).attr("data-count");
        tagsVar =  $(this).attr("data-tags");
        $this = $(this);
        getImages(noOfPhotos, tagsVar, $this);
    });

    function getImages(noOfPhotos, tags, el){
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: tags,
            tagmode: "any",
            format: "json"
        },
        function(data) {
            $.each(data.items, function(i,item){
                var url = item.media.m;
                $img = $("<img/>").attr("src", url);
                $container = $('<div class="image-local">');
                $container.append($img).appendTo(el);
                if ( i == noOfPhotos-1 ) return false;
            });
        });
    }
    
});