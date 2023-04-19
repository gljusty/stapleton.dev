uniform vec3 starTexture;
varying vec3 starVertexNormal;
varying vec2 starVertexUV;


void main() {
    float intensity = 1.05 - dot(starVertexNormal, vec3(0.0,0.0,1.0));
    vec3 atmosphere = vec3(0.1, 0.6, 0.9) * pow(intensity, 1.5);
    gl_FragColor = vec4(starTexture, 1.0);
}