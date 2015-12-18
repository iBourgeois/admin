$( document ).ready(function() {
    Waves.attach('.wave');
    Waves.attach('.wave-light', ['waves-light']);
    Waves.init();
    
    $('.nav').perfectScrollbar();
});
