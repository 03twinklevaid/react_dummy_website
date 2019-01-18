function show(elementId, self) {
    console.log('clicked');
    document.getElementById("sales-sec-container1").style.display="none";
    document.getElementById("sales-sec-container2").style.display="none";
    document.getElementById("sales-sec-container3").style.display="none";
    document.getElementById("sales-sec-container4").style.display="none";
    document.getElementById("sales-sec-container5").style.display="none";
    document.getElementById(elementId).style.display="block";
    for(button of document.getElementsByClassName('btm-hdr-btn')){
        console.log(button);
        button.className = 'btm-hdr-btn';
    }
    self.className='btm-hdr-btn active';
}