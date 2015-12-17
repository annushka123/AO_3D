autowatch = 1;


//sketch = new JitterObject("jit.gl.sketch",dest);

function bang()
{
	messnamed("sketch_msg","reset");
	messnamed("sketch_msg","glcolor", 0., 1.,0.,1.);
	messnamed("sketch_msg", "glbegin");
	messnamed("sketch_msg", "line_loop");
	messnamed("sketch_msg", "glvertex", -0.5,-0.5);
	messnamed("sketch_msg", "glvertex", 0., 0.5);
	messnamed("sketch_msg", "glvertex", 0.5, -0.5);
	messnamed("sketch_msg", "glend");
	
}
