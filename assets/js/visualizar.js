//  uncomment if you want to re-add the visualizer 

// window.addEventListener('mousedown', function(e) {
//     const audioCtx = new AudioContext();
//     const analyser = audioCtx.createAnalyser();
    
//     const canvas = document.getElementById('canvas');
    
//     const canvasCtx = canvas.getContext('2d');
    
//     const g = audioCtx.createMediaElementSource(document.getElementById('audio'));
    
//     g.connect(analyser);
//     analyser.connect(audioCtx.destination);
    
//     analyser.fftSize = 2048;
    
//     const bufferLength = analyser.frequencyBinCount;
    
//     const dataArray = new Uint8Array(bufferLength);
    
//     canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    
//     function draw() {
//         requestAnimationFrame(draw);
    
//         analyser.getByteTimeDomainData(dataArray);
    
//         // fill transparent
//         canvasCtx.fillStyle = 'rgba(0, 0, 0, 0.2)';
//         canvasCtx.globalAlpha = 0.2;
//         canvasCtx.fillRect(0, 0, canvas.width, canvas.height, 0.2);
    
//         canvasCtx.lineWidth = 1;
//         let r = Math.random() * 233;
//         let g = Math.random() * 245;
//         canvasCtx.strokeStyle = 'rgb(' + r + ',' + g + ',' + g + ')';
    
//         canvasCtx.beginPath();
    
//         const sliceWidth = canvas.width * 1.0 / bufferLength;
//         let x = 0;
    
//         for (let i = 0; i < bufferLength; i++) {
        
//             const v = dataArray[i] / 128.0;
//             const y = v * canvas.height / 2;
        
//             if (i === 0) {
//                 canvasCtx.moveTo(x, y);
//             } else {
//                 canvasCtx.lineTo(x, y);
//             }
        
//             x += sliceWidth;
//         }
    
//         canvasCtx.lineTo(canvas.width, canvas.height / 2);
//         canvasCtx.stroke();
//     }
//     this.document.getElementById('audio').play();
//     this.document.getElementById('audio2').style.display = 'none';
//     draw();
// });