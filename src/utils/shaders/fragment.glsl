uniform sampler2D planetTexture;
varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    float intensity = 1.05 - dot(vertexNormal, vec3(0.0,0.0,1.0));
    vec3 atmosphere = vec3(1, 0.6, 0.9) * pow(intensity, 1.05);
    gl_FragColor = vec4(atmosphere + texture2D(planetTexture, vertexUV).xyz, 1.0);
}