$( document ).ready(function() {
    Waves.attach('.wave');
    Waves.attach('.wave-light', ['waves-light']);
    Waves.init();
    
    var container = document.getElementById('nav');
    Ps.initialize(container);
});
