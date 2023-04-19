varying vec2 starVertexUV;
varying vec3 starVertexNormal;
uniform vec3 starTexture;
attribute float size;

void main() {
    starVertexUV = uv;
    starVertexNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1);
    vec3 scale = vec3(0,0,0);
    gl_PointSize = size * -mvPosition.z * 300.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}