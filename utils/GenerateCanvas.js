export default (cameraId) => (`
    <canvas id='canvas_${cameraId}'></canvas>
    <script>
        loadPlayer({
            url: 'ws://' + location.host + '/api/stream?cameraId=${cameraId}',
            canvas: document.getElementById('canvas_${cameraId}')
        });
    </script>
`);