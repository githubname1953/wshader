#ifdef GL_ES
precision mediump float;
#endif

#define PROCESSING_COLOR_SHADER

uniform vec2 u_resolution;
uniform vec3 u_mouse;
uniform float u_time;
uniform float u_gc[4];

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
	vec2 xy = gl_FragCoord.xy;
	int gc = int(mod(xy.x,4));

    gl_FragColor = vec4(st.x,st.y,u_gc[gc],1.0);
}