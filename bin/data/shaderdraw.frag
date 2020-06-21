#ifdef GL_ES
precision mediump float;
#endif

#define PROCESSING_COLOR_SHADER

uniform sampler2DRect fbtext;

void main()
{
	gl_FragColor=texture(fbtext, gl_FragCoord.xy);
}