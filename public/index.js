$(document).ready(function() {
    playBloopAgain();
});

function playBloop(){
    var pitch = $("#pitch").val();
    console.log(pitch);
    var bloop = new Wad({
        source  : 'bloop.wav',
        volume  : 0.5,   // Peak volume can range from 0 to an arbitrarily high number, but you probably shouldn't set it higher than 1.
        loop    : false, // If true, the audio will loop. This parameter only works for audio clips, and does nothing for oscillators. 
        pitch   : pitch,  // Set a default pitch on the constuctor if you don't want to set the pitch on play().
        detune  : 0,     // Set a default detune on the constructor if you don't want to set detune on play(). Detune is measured in cents. 100 cents is equal to 1 semitone.
        panning : -.5, 
        filter  : {
            type      : 'lowpass', // What type of filter is applied.
            frequency : pitch,       // The frequency, in hertz, to which the filter is applied.
            q         : 1,         // Q-factor.  No one knows what this does. The default value is 1. Sensible values are from 0 to 10.
            env       : {          // Filter envelope.
                frequency : pitch, // If this is set, filter frequency will slide from filter.frequency to filter.env.frequency when a note is triggered.
                attack    : 0.01  // Time in seconds for the filter frequency to slide from filter.frequency to filter.env.frequency
            }
        }
    });
    bloop.play();
    playBloopAgain();
}

function playBloopAgain(){
    setTimeout(function() { playBloop(); }, 252);
}

