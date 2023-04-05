import '@google/model-viewer';

const Model = () => (
  <div id="card" style={
    {
     gridColumn:'15/17',
     height:"50%",
     position:'relative',
     top:'10%',
       }
  }>
  <model-viewer
    src="/Astronaut.glb"
    ios-src=""
    poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
    alt="A 3D model of an astronaut"
    shadow-intensity="1"
    camera-controls
    disable-zoom
    show-controls
    interaction-prompt="none"
    
    auto-rotate

    touch-action="none"
    // camera-orbit="calc(-1.5rad + env(window-scroll-y) * 4rad) calc(0deg + env(window-scroll-y) * 180deg) calc(5m - env(window-scroll-y) * 10m)"
    
    // ar
  ></model-viewer>
</div>
)

export default Model;
