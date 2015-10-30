onmessage = function(event){
    var url = event.data;
	
	var fd = new FormData();
        fd.append("url", url);
               
    var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost/kanvas/update_views.php", true);
		
	    xhr.onload = function() {
            if (this.status == 200) {
                var resp = JSON.parse(this.response);
				
                if(resp.result < 2){
				    message = resp.result + " view";
				} else {
				    message = resp.result + " views";
				}
				postMessage(message);

            };
        };
	
    xhr.send(fd);
}