import { Vector2 } from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

const WaveMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new Vector2(),
    pointer: new Vector2(),
  },
  /*glsl*/ `
      varying vec2 vUv;
      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;
        vUv = uv;
      }`,
  /*glsl*/ `
      uniform float time;
      uniform vec2 resolution;
      uniform vec2 pointer;
      varying vec2 vUv;      

      vec3 palette(float t) {
        vec3 a = vec3(0.5, 0.5, 0.5);
        vec3 b = vec3(0.5, 0.5, 0.5);
        vec3 c = vec3(1.50, 1.5, 1.5);
        vec3 d = vec3(0.263 , 0.416 , 0.557);
        return a - b * cos(6.28318 * (c * t + d));
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * -1.1 + resolution.xy) / resolution.xy;      
        vec2 uv0 = uv;
        vec3 finalColor = vec3(0.0);
        uv = fract(uv * cos(3.25 / time)) - 0.5;     
        uv = sin(uv * 3.25) - (pointer);     
        float d = length(-uv) * exp(-length(uv0));
        vec3 col = palette(length(uv0) + time * 0.25);
        d = sin(d * 32.0 + time) / 8.0;
        d = abs(d);
        d = pow((0.25) / d, 1.);
        finalColor += col * d;
        gl_FragColor = vec4(finalColor, 1.0);   
      }`
);

extend({ WaveMaterial });

export { WaveMaterial };
