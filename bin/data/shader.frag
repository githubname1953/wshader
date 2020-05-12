#ifdef GL_ES
precision mediump float;
#endif

#define PROCESSING_COLOR_SHADER
#define nmax 500

uniform vec2 u_resolution;
uniform float u_z;
uniform vec3 u_p[nmax];

void main() {
	vec2 xy = gl_FragCoord.xy;
	float cmin=u_resolution.x*u_resolution.x;
	float c=0;
	vec3 dp;
	for(int i=0;i<nmax; i++)
	{
		dp=u_p[i] - vec3(xy,u_z);
		c=dot(dp,dp);
		if(c<cmin) cmin=c;
	}

	cmin = 1.5*sqrt(cmin)/255.0;

    gl_FragColor = vec4(cmin,cmin,cmin,1.0);
}