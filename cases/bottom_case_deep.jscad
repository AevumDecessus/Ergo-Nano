function _outer_wall_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[176.6508537,-34],[202.5875,-34]]).appendArc([206.5875,-38],{"radius":4,"clockwise":true,"large":false}).appendPoint([206.5875,-90.1686273]).appendArc([205.1617773,-93.2301786],{"radius":4,"clockwise":true,"large":false}).appendPoint([179.025,-115.2070483]).appendPoint([179.025,-118.6700158]).appendPoint([194.3148221,-160.3849252]).appendArc([193.1303032,-164.8256736],{"radius":4,"clockwise":true,"large":false}).appendPoint([161.2279362,-191.5949379]).appendArc([155.5921236,-191.1023172],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.9482101,-158.1575837]).appendArc([127.7222606,-157.8614131],{"radius":4,"clockwise":true,"large":false}).appendPoint([111.9265609,-135.025]).appendPoint([101.2837532,-135.025]).appendPoint([82.7842201,-139.8932982]).appendArc([81.7662468,-140.025],{"radius":4,"clockwise":true,"large":false}).appendPoint([38.975,-140.025]).appendArc([34.975,-136.025],{"radius":4,"clockwise":true,"large":false}).appendPoint([34.975,-37.7290808]).appendArc([38.453182,-33.7632636],{"radius":4,"clockwise":true,"large":false}).appendPoint([74.5878809,-29.0086981]).appendPoint([93.2157799,-24.1067019]).appendArc([94.2337532,-23.975],{"radius":4,"clockwise":true,"large":false}).appendPoint([119.8508912,-23.975]).appendArc([120.5420892,-24.0351719],{"radius":4,"clockwise":true,"large":false}).appendPoint([175.716198,-33.7148402]).appendArc([176.6508537,-34],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function _standoffs_extrude_8_outline_fn(){
    return CAG.circle({"center":[197.5875,-85.1],"radius":3.35})
.union(
    CAG.circle({"center":[154.525,-96.475],"radius":3.35})
).union(
    CAG.circle({"center":[161.1892292,-159.579668],"radius":3.35})
).union(
    CAG.circle({"center":[135.525,-129.525],"radius":3.35})
).union(
    CAG.circle({"center":[59.525,-115.475],"radius":3.35})
).union(
    CAG.circle({"center":[154.525,-58.525],"radius":3.35})
).union(
    CAG.circle({"center":[59.525,-58.525],"radius":3.35})
).extrude({ offset: [0, 0, 8] });
}


function _standoff_holes_extrude_4_outline_fn(){
    return CAG.circle({"center":[197.5875,-85.1],"radius":2.25})
.union(
    CAG.circle({"center":[154.525,-96.475],"radius":2.25})
).union(
    CAG.circle({"center":[161.1892292,-159.579668],"radius":2.25})
).union(
    CAG.circle({"center":[135.525,-129.525],"radius":2.25})
).union(
    CAG.circle({"center":[59.525,-115.475],"radius":2.25})
).union(
    CAG.circle({"center":[154.525,-58.525],"radius":2.25})
).union(
    CAG.circle({"center":[59.525,-58.525],"radius":2.25})
).extrude({ offset: [0, 0, 4] });
}


function _case_wall_extrude_9_6_outline_fn(){
    return new CSG.Path2D([[176.6508537,-34],[202.5875,-34]]).appendArc([206.5875,-38],{"radius":4,"clockwise":true,"large":false}).appendPoint([206.5875,-90.1686273]).appendArc([205.1617773,-93.2301786],{"radius":4,"clockwise":true,"large":false}).appendPoint([179.025,-115.2070483]).appendPoint([179.025,-118.6700158]).appendPoint([194.3148221,-160.3849252]).appendArc([193.1303032,-164.8256736],{"radius":4,"clockwise":true,"large":false}).appendPoint([161.2279362,-191.5949379]).appendArc([155.5921236,-191.1023172],{"radius":4,"clockwise":true,"large":false}).appendPoint([127.9482101,-158.1575837]).appendArc([127.7222606,-157.8614131],{"radius":4,"clockwise":true,"large":false}).appendPoint([111.9265609,-135.025]).appendPoint([101.2837532,-135.025]).appendPoint([82.7842201,-139.8932982]).appendArc([81.7662468,-140.025],{"radius":4,"clockwise":true,"large":false}).appendPoint([38.975,-140.025]).appendArc([34.975,-136.025],{"radius":4,"clockwise":true,"large":false}).appendPoint([34.975,-37.7290808]).appendArc([38.453182,-33.7632636],{"radius":4,"clockwise":true,"large":false}).appendPoint([74.5878809,-29.0086981]).appendPoint([93.2157799,-24.1067019]).appendArc([94.2337532,-23.975],{"radius":4,"clockwise":true,"large":false}).appendPoint([119.8508912,-23.975]).appendArc([120.5420892,-24.0351719],{"radius":4,"clockwise":true,"large":false}).appendPoint([175.716198,-33.7148402]).appendArc([176.6508537,-34],{"radius":4,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[176.2371354,-35.7],[202.5875,-35.7]]).appendArc([204.8875,-38],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([204.8875,-90.1686273]).appendArc([204.0677094,-91.9290193],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([177.9309321,-113.905889]).appendArc([177.325,-115.2070484],{"radius":1.7,"clockwise":false,"large":false}).appendPoint([177.325,-118.6700158]).appendArc([177.4288405,-119.2550584],{"radius":1.7,"clockwise":false,"large":false}).appendPoint([192.7186626,-160.9699677]).appendArc([192.0375642,-163.5233981],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([160.1347128,-190.2930689]).appendArc([156.8943991,-190.0095782],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([129.2502366,-157.064548]).appendArc([129.1203919,-156.8943408],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([113.3246922,-134.0579277]).appendArc([111.926561,-133.325],{"radius":1.7,"clockwise":false,"large":false}).appendPoint([101.2837532,-133.325]).appendArc([100.8511146,-133.3809733],{"radius":1.7,"clockwise":false,"large":false}).appendPoint([82.3515815,-138.2492714]).appendArc([81.7662468,-138.325],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([38.975,-138.325]).appendArc([36.675,-136.025],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([36.675,-37.7290808]).appendArc([38.6749547,-35.4487359],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([74.8102806,-30.6940878]).appendArc([75.0211466,-30.6526422],{"radius":1.7,"clockwise":false,"large":false}).appendPoint([93.6484185,-25.7507286]).appendArc([94.2337532,-25.675],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([119.8508912,-25.675]).appendArc([120.2483301,-25.7095989],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([175.4224388,-35.3892671]).appendArc([176.2371354,-35.7],{"radius":2.3,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 9.6] });
}




                function _case_bottom_deep_case_fn() {
                    

                // creating part 0 of case _case_bottom_deep
                let _case_bottom_deep__part_0 = _xl_bottom_case_fn();

                // make sure that rotations are relative
                let _case_bottom_deep__part_0_bounds = _case_bottom_deep__part_0.getBounds();
                let _case_bottom_deep__part_0_x = _case_bottom_deep__part_0_bounds[0].x + (_case_bottom_deep__part_0_bounds[1].x - _case_bottom_deep__part_0_bounds[0].x) / 2
                let _case_bottom_deep__part_0_y = _case_bottom_deep__part_0_bounds[0].y + (_case_bottom_deep__part_0_bounds[1].y - _case_bottom_deep__part_0_bounds[0].y) / 2
                _case_bottom_deep__part_0 = translate([-_case_bottom_deep__part_0_x, -_case_bottom_deep__part_0_y, 0], _case_bottom_deep__part_0);
                _case_bottom_deep__part_0 = rotate([0,0,0], _case_bottom_deep__part_0);
                _case_bottom_deep__part_0 = translate([_case_bottom_deep__part_0_x, _case_bottom_deep__part_0_y, 0], _case_bottom_deep__part_0);

                _case_bottom_deep__part_0 = translate([0,0,0], _case_bottom_deep__part_0);
                let result = _case_bottom_deep__part_0;
                
            

                // creating part 1 of case _case_bottom_deep
                let _case_bottom_deep__part_1 = _case_standoffs_deep_case_fn();

                // make sure that rotations are relative
                let _case_bottom_deep__part_1_bounds = _case_bottom_deep__part_1.getBounds();
                let _case_bottom_deep__part_1_x = _case_bottom_deep__part_1_bounds[0].x + (_case_bottom_deep__part_1_bounds[1].x - _case_bottom_deep__part_1_bounds[0].x) / 2
                let _case_bottom_deep__part_1_y = _case_bottom_deep__part_1_bounds[0].y + (_case_bottom_deep__part_1_bounds[1].y - _case_bottom_deep__part_1_bounds[0].y) / 2
                _case_bottom_deep__part_1 = translate([-_case_bottom_deep__part_1_x, -_case_bottom_deep__part_1_y, 0], _case_bottom_deep__part_1);
                _case_bottom_deep__part_1 = rotate([0,0,0], _case_bottom_deep__part_1);
                _case_bottom_deep__part_1 = translate([_case_bottom_deep__part_1_x, _case_bottom_deep__part_1_y, 0], _case_bottom_deep__part_1);

                _case_bottom_deep__part_1 = translate([0,0,0], _case_bottom_deep__part_1);
                result = result.union(_case_bottom_deep__part_1);
                
            

                // creating part 2 of case _case_bottom_deep
                let _case_bottom_deep__part_2 = _case_standoff_holes_case_fn();

                // make sure that rotations are relative
                let _case_bottom_deep__part_2_bounds = _case_bottom_deep__part_2.getBounds();
                let _case_bottom_deep__part_2_x = _case_bottom_deep__part_2_bounds[0].x + (_case_bottom_deep__part_2_bounds[1].x - _case_bottom_deep__part_2_bounds[0].x) / 2
                let _case_bottom_deep__part_2_y = _case_bottom_deep__part_2_bounds[0].y + (_case_bottom_deep__part_2_bounds[1].y - _case_bottom_deep__part_2_bounds[0].y) / 2
                _case_bottom_deep__part_2 = translate([-_case_bottom_deep__part_2_x, -_case_bottom_deep__part_2_y, 0], _case_bottom_deep__part_2);
                _case_bottom_deep__part_2 = rotate([0,0,0], _case_bottom_deep__part_2);
                _case_bottom_deep__part_2 = translate([_case_bottom_deep__part_2_x, _case_bottom_deep__part_2_y, 0], _case_bottom_deep__part_2);

                _case_bottom_deep__part_2 = translate([0,0,4], _case_bottom_deep__part_2);
                result = result.subtract(_case_bottom_deep__part_2);
                
            
                    return result;
                }
            
            

                function _xl_bottom_case_fn() {
                    

                // creating part 0 of case _xl_bottom
                let _xl_bottom__part_0 = _outer_wall_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let _xl_bottom__part_0_bounds = _xl_bottom__part_0.getBounds();
                let _xl_bottom__part_0_x = _xl_bottom__part_0_bounds[0].x + (_xl_bottom__part_0_bounds[1].x - _xl_bottom__part_0_bounds[0].x) / 2
                let _xl_bottom__part_0_y = _xl_bottom__part_0_bounds[0].y + (_xl_bottom__part_0_bounds[1].y - _xl_bottom__part_0_bounds[0].y) / 2
                _xl_bottom__part_0 = translate([-_xl_bottom__part_0_x, -_xl_bottom__part_0_y, 0], _xl_bottom__part_0);
                _xl_bottom__part_0 = rotate([0,0,0], _xl_bottom__part_0);
                _xl_bottom__part_0 = translate([_xl_bottom__part_0_x, _xl_bottom__part_0_y, 0], _xl_bottom__part_0);

                _xl_bottom__part_0 = translate([0,0,0], _xl_bottom__part_0);
                let result = _xl_bottom__part_0;
                
            
                    return result;
                }
            
            

                function _case_standoffs_deep_case_fn() {
                    

                // creating part 0 of case _case_standoffs_deep
                let _case_standoffs_deep__part_0 = _standoffs_extrude_8_outline_fn();

                // make sure that rotations are relative
                let _case_standoffs_deep__part_0_bounds = _case_standoffs_deep__part_0.getBounds();
                let _case_standoffs_deep__part_0_x = _case_standoffs_deep__part_0_bounds[0].x + (_case_standoffs_deep__part_0_bounds[1].x - _case_standoffs_deep__part_0_bounds[0].x) / 2
                let _case_standoffs_deep__part_0_y = _case_standoffs_deep__part_0_bounds[0].y + (_case_standoffs_deep__part_0_bounds[1].y - _case_standoffs_deep__part_0_bounds[0].y) / 2
                _case_standoffs_deep__part_0 = translate([-_case_standoffs_deep__part_0_x, -_case_standoffs_deep__part_0_y, 0], _case_standoffs_deep__part_0);
                _case_standoffs_deep__part_0 = rotate([0,0,0], _case_standoffs_deep__part_0);
                _case_standoffs_deep__part_0 = translate([_case_standoffs_deep__part_0_x, _case_standoffs_deep__part_0_y, 0], _case_standoffs_deep__part_0);

                _case_standoffs_deep__part_0 = translate([0,0,0], _case_standoffs_deep__part_0);
                let result = _case_standoffs_deep__part_0;
                
            
                    return result;
                }
            
            

                function _case_standoff_holes_case_fn() {
                    

                // creating part 0 of case _case_standoff_holes
                let _case_standoff_holes__part_0 = _standoff_holes_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _case_standoff_holes__part_0_bounds = _case_standoff_holes__part_0.getBounds();
                let _case_standoff_holes__part_0_x = _case_standoff_holes__part_0_bounds[0].x + (_case_standoff_holes__part_0_bounds[1].x - _case_standoff_holes__part_0_bounds[0].x) / 2
                let _case_standoff_holes__part_0_y = _case_standoff_holes__part_0_bounds[0].y + (_case_standoff_holes__part_0_bounds[1].y - _case_standoff_holes__part_0_bounds[0].y) / 2
                _case_standoff_holes__part_0 = translate([-_case_standoff_holes__part_0_x, -_case_standoff_holes__part_0_y, 0], _case_standoff_holes__part_0);
                _case_standoff_holes__part_0 = rotate([0,0,0], _case_standoff_holes__part_0);
                _case_standoff_holes__part_0 = translate([_case_standoff_holes__part_0_x, _case_standoff_holes__part_0_y, 0], _case_standoff_holes__part_0);

                _case_standoff_holes__part_0 = translate([0,0,0], _case_standoff_holes__part_0);
                let result = _case_standoff_holes__part_0;
                
            
                    return result;
                }
            
            

                function _wall_deep_case_fn() {
                    

                // creating part 0 of case _wall_deep
                let _wall_deep__part_0 = _case_wall_extrude_9_6_outline_fn();

                // make sure that rotations are relative
                let _wall_deep__part_0_bounds = _wall_deep__part_0.getBounds();
                let _wall_deep__part_0_x = _wall_deep__part_0_bounds[0].x + (_wall_deep__part_0_bounds[1].x - _wall_deep__part_0_bounds[0].x) / 2
                let _wall_deep__part_0_y = _wall_deep__part_0_bounds[0].y + (_wall_deep__part_0_bounds[1].y - _wall_deep__part_0_bounds[0].y) / 2
                _wall_deep__part_0 = translate([-_wall_deep__part_0_x, -_wall_deep__part_0_y, 0], _wall_deep__part_0);
                _wall_deep__part_0 = rotate([0,0,0], _wall_deep__part_0);
                _wall_deep__part_0 = translate([_wall_deep__part_0_x, _wall_deep__part_0_y, 0], _wall_deep__part_0);

                _wall_deep__part_0 = translate([0,0,0], _wall_deep__part_0);
                let result = _wall_deep__part_0;
                
            
                    return result;
                }
            
            

                function bottom_case_deep_case_fn() {
                    

                // creating part 0 of case bottom_case_deep
                let bottom_case_deep__part_0 = _case_bottom_deep_case_fn();

                // make sure that rotations are relative
                let bottom_case_deep__part_0_bounds = bottom_case_deep__part_0.getBounds();
                let bottom_case_deep__part_0_x = bottom_case_deep__part_0_bounds[0].x + (bottom_case_deep__part_0_bounds[1].x - bottom_case_deep__part_0_bounds[0].x) / 2
                let bottom_case_deep__part_0_y = bottom_case_deep__part_0_bounds[0].y + (bottom_case_deep__part_0_bounds[1].y - bottom_case_deep__part_0_bounds[0].y) / 2
                bottom_case_deep__part_0 = translate([-bottom_case_deep__part_0_x, -bottom_case_deep__part_0_y, 0], bottom_case_deep__part_0);
                bottom_case_deep__part_0 = rotate([0,0,0], bottom_case_deep__part_0);
                bottom_case_deep__part_0 = translate([bottom_case_deep__part_0_x, bottom_case_deep__part_0_y, 0], bottom_case_deep__part_0);

                bottom_case_deep__part_0 = translate([0,0,0], bottom_case_deep__part_0);
                let result = bottom_case_deep__part_0;
                
            

                // creating part 1 of case bottom_case_deep
                let bottom_case_deep__part_1 = _wall_deep_case_fn();

                // make sure that rotations are relative
                let bottom_case_deep__part_1_bounds = bottom_case_deep__part_1.getBounds();
                let bottom_case_deep__part_1_x = bottom_case_deep__part_1_bounds[0].x + (bottom_case_deep__part_1_bounds[1].x - bottom_case_deep__part_1_bounds[0].x) / 2
                let bottom_case_deep__part_1_y = bottom_case_deep__part_1_bounds[0].y + (bottom_case_deep__part_1_bounds[1].y - bottom_case_deep__part_1_bounds[0].y) / 2
                bottom_case_deep__part_1 = translate([-bottom_case_deep__part_1_x, -bottom_case_deep__part_1_y, 0], bottom_case_deep__part_1);
                bottom_case_deep__part_1 = rotate([0,0,0], bottom_case_deep__part_1);
                bottom_case_deep__part_1 = translate([bottom_case_deep__part_1_x, bottom_case_deep__part_1_y, 0], bottom_case_deep__part_1);

                bottom_case_deep__part_1 = translate([0,0,0], bottom_case_deep__part_1);
                result = result.union(bottom_case_deep__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_deep_case_fn();
            }

        