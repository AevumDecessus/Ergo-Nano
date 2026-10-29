function _outer_wall_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[178.6289884,-33.5],[201.5875,-33.5]]).appendArc([207.0875,-39],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([207.0875,-91.1868846]).appendArc([205.1901078,-95.34275],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([180.525,-116.7242676]).appendPoint([180.525,-118.4037774]).appendPoint([195.7231982,-159.8687112]).appendArc([194.0944846,-165.9747403],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([162.1916331,-192.7444111]).appendArc([154.4430569,-192.0664986],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([126.7992747,-159.1219216]).appendArc([126.4886154,-158.7147122],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([111.1402317,-136.525]).appendPoint([101.4778179,-136.525]).appendPoint([83.16596,-141.34391]).appendArc([81.7662468,-141.525],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([38.975,-141.525]).appendArc([33.475,-136.025],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([33.475,-37.7290808]).appendArc([38.2575003,-32.2760822],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([74.2986393,-27.5338271]).appendPoint([92.83404,-22.6560901]).appendArc([92.8353817,-22.6557372],{"radius":3.5,"clockwise":true,"large":false}).appendArc([94.2337532,-22.475],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([119.8508912,-22.475]).appendArc([120.8012885,-22.5577364],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([175.9753972,-32.2374046]).appendArc([178.6289884,-33.5],{"radius":5.5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function _standoffs_extrude_4_outline_fn(){
    return CAG.circle({"center":[197.5875,-86.1],"radius":3.35})
.union(
    CAG.circle({"center":[173.525,-96.475],"radius":3.35})
).union(
    CAG.circle({"center":[161.1892292,-159.579668],"radius":3.35})
).union(
    CAG.circle({"center":[97.525,-129.525],"radius":3.35})
).union(
    CAG.circle({"center":[135.525,-129.525],"radius":3.35})
).union(
    CAG.circle({"center":[59.525,-115.475],"radius":3.35})
).union(
    CAG.circle({"center":[173.525,-58.525],"radius":3.35})
).union(
    CAG.circle({"center":[135.525,-34.475],"radius":3.35})
).union(
    CAG.circle({"center":[59.525,-58.525],"radius":3.35})
).extrude({ offset: [0, 0, 4] });
}


function _standoff_holes_extrude_4_outline_fn(){
    return CAG.circle({"center":[197.5875,-86.1],"radius":2.25})
.union(
    CAG.circle({"center":[173.525,-96.475],"radius":2.25})
).union(
    CAG.circle({"center":[161.1892292,-159.579668],"radius":2.25})
).union(
    CAG.circle({"center":[97.525,-129.525],"radius":2.25})
).union(
    CAG.circle({"center":[135.525,-129.525],"radius":2.25})
).union(
    CAG.circle({"center":[59.525,-115.475],"radius":2.25})
).union(
    CAG.circle({"center":[173.525,-58.525],"radius":2.25})
).union(
    CAG.circle({"center":[135.525,-34.475],"radius":2.25})
).union(
    CAG.circle({"center":[59.525,-58.525],"radius":2.25})
).extrude({ offset: [0, 0, 4] });
}


function _case_wall_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[178.6289884,-33.5],[201.5875,-33.5]]).appendArc([207.0875,-39],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([207.0875,-91.1868846]).appendArc([205.1901078,-95.34275],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([180.525,-116.7242676]).appendPoint([180.525,-118.4037774]).appendPoint([195.7231982,-159.8687112]).appendArc([194.0944846,-165.9747403],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([162.1916331,-192.7444111]).appendArc([154.4430569,-192.0664986],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([126.7992747,-159.1219216]).appendArc([126.4886154,-158.7147122],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([111.1402317,-136.525]).appendPoint([101.4778179,-136.525]).appendPoint([83.16596,-141.34391]).appendArc([81.7662468,-141.525],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([38.975,-141.525]).appendArc([33.475,-136.025],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([33.475,-37.7290808]).appendArc([38.2575003,-32.2760822],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([74.2986393,-27.5338271]).appendPoint([92.83404,-22.6560901]).appendArc([92.8353817,-22.6557372],{"radius":3.5,"clockwise":true,"large":false}).appendArc([94.2337532,-22.475],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([119.8508912,-22.475]).appendArc([120.8012885,-22.5577364],{"radius":5.5,"clockwise":true,"large":false}).appendPoint([175.9753972,-32.2374046]).appendArc([178.6289884,-33.5],{"radius":5.5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[178.0171124,-36.7],[201.5875,-36.7]]).appendArc([203.8875,-39],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([203.8875,-91.1868846]).appendArc([203.0940451,-92.924792],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([177.9114667,-114.7548909]).appendArc([177.325,-116.0394312],{"radius":1.7,"clockwise":false,"large":false}).appendPoint([177.325,-118.6700158]).appendArc([177.4288405,-119.2550584],{"radius":1.7,"clockwise":false,"large":false}).appendPoint([192.7186626,-160.9699677]).appendArc([192.0375642,-163.5233981],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([160.1347128,-190.2930689]).appendArc([156.8943991,-190.0095782],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([129.2502366,-157.064548]).appendArc([129.1203919,-156.8943408],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([113.3246922,-134.0579277]).appendArc([111.926561,-133.325],{"radius":1.7,"clockwise":false,"large":false}).appendPoint([101.2837532,-133.325]).appendArc([100.8511146,-133.3809733],{"radius":1.7,"clockwise":false,"large":false}).appendPoint([82.3515815,-138.2492714]).appendArc([81.7662468,-138.325],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([38.975,-138.325]).appendArc([36.675,-136.025],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([36.675,-37.7290808]).appendArc([38.6749547,-35.4487359],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([74.8102806,-30.6940878]).appendArc([75.0211466,-30.6526422],{"radius":1.7,"clockwise":false,"large":false}).appendPoint([93.6484185,-25.7507286]).appendArc([94.2337532,-25.675],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([119.8508912,-25.675]).appendArc([120.2483301,-25.7095989],{"radius":2.3,"clockwise":true,"large":false}).appendPoint([175.4224388,-35.3892671]).appendArc([176.7454646,-36.128234],{"radius":2.3,"clockwise":true,"large":false}).appendArc([178.0171124,-36.7],{"radius":1.7,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5.6] });
}




                function _case_bottom_case_fn() {
                    

                // creating part 0 of case _case_bottom
                let _case_bottom__part_0 = _xl_bottom_case_fn();

                // make sure that rotations are relative
                let _case_bottom__part_0_bounds = _case_bottom__part_0.getBounds();
                let _case_bottom__part_0_x = _case_bottom__part_0_bounds[0].x + (_case_bottom__part_0_bounds[1].x - _case_bottom__part_0_bounds[0].x) / 2
                let _case_bottom__part_0_y = _case_bottom__part_0_bounds[0].y + (_case_bottom__part_0_bounds[1].y - _case_bottom__part_0_bounds[0].y) / 2
                _case_bottom__part_0 = translate([-_case_bottom__part_0_x, -_case_bottom__part_0_y, 0], _case_bottom__part_0);
                _case_bottom__part_0 = rotate([0,0,0], _case_bottom__part_0);
                _case_bottom__part_0 = translate([_case_bottom__part_0_x, _case_bottom__part_0_y, 0], _case_bottom__part_0);

                _case_bottom__part_0 = translate([0,0,0], _case_bottom__part_0);
                let result = _case_bottom__part_0;
                
            

                // creating part 1 of case _case_bottom
                let _case_bottom__part_1 = _case_standoffs_case_fn();

                // make sure that rotations are relative
                let _case_bottom__part_1_bounds = _case_bottom__part_1.getBounds();
                let _case_bottom__part_1_x = _case_bottom__part_1_bounds[0].x + (_case_bottom__part_1_bounds[1].x - _case_bottom__part_1_bounds[0].x) / 2
                let _case_bottom__part_1_y = _case_bottom__part_1_bounds[0].y + (_case_bottom__part_1_bounds[1].y - _case_bottom__part_1_bounds[0].y) / 2
                _case_bottom__part_1 = translate([-_case_bottom__part_1_x, -_case_bottom__part_1_y, 0], _case_bottom__part_1);
                _case_bottom__part_1 = rotate([0,0,0], _case_bottom__part_1);
                _case_bottom__part_1 = translate([_case_bottom__part_1_x, _case_bottom__part_1_y, 0], _case_bottom__part_1);

                _case_bottom__part_1 = translate([0,0,0], _case_bottom__part_1);
                result = result.union(_case_bottom__part_1);
                
            

                // creating part 2 of case _case_bottom
                let _case_bottom__part_2 = _case_standoff_holes_case_fn();

                // make sure that rotations are relative
                let _case_bottom__part_2_bounds = _case_bottom__part_2.getBounds();
                let _case_bottom__part_2_x = _case_bottom__part_2_bounds[0].x + (_case_bottom__part_2_bounds[1].x - _case_bottom__part_2_bounds[0].x) / 2
                let _case_bottom__part_2_y = _case_bottom__part_2_bounds[0].y + (_case_bottom__part_2_bounds[1].y - _case_bottom__part_2_bounds[0].y) / 2
                _case_bottom__part_2 = translate([-_case_bottom__part_2_x, -_case_bottom__part_2_y, 0], _case_bottom__part_2);
                _case_bottom__part_2 = rotate([0,0,0], _case_bottom__part_2);
                _case_bottom__part_2 = translate([_case_bottom__part_2_x, _case_bottom__part_2_y, 0], _case_bottom__part_2);

                _case_bottom__part_2 = translate([0,0,0], _case_bottom__part_2);
                result = result.subtract(_case_bottom__part_2);
                
            
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
            
            

                function _case_standoffs_case_fn() {
                    

                // creating part 0 of case _case_standoffs
                let _case_standoffs__part_0 = _standoffs_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _case_standoffs__part_0_bounds = _case_standoffs__part_0.getBounds();
                let _case_standoffs__part_0_x = _case_standoffs__part_0_bounds[0].x + (_case_standoffs__part_0_bounds[1].x - _case_standoffs__part_0_bounds[0].x) / 2
                let _case_standoffs__part_0_y = _case_standoffs__part_0_bounds[0].y + (_case_standoffs__part_0_bounds[1].y - _case_standoffs__part_0_bounds[0].y) / 2
                _case_standoffs__part_0 = translate([-_case_standoffs__part_0_x, -_case_standoffs__part_0_y, 0], _case_standoffs__part_0);
                _case_standoffs__part_0 = rotate([0,0,0], _case_standoffs__part_0);
                _case_standoffs__part_0 = translate([_case_standoffs__part_0_x, _case_standoffs__part_0_y, 0], _case_standoffs__part_0);

                _case_standoffs__part_0 = translate([0,0,0], _case_standoffs__part_0);
                let result = _case_standoffs__part_0;
                
            
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
            
            

                function _wall_pcb_case_fn() {
                    

                // creating part 0 of case _wall_pcb
                let _wall_pcb__part_0 = _case_wall_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _wall_pcb__part_0_bounds = _wall_pcb__part_0.getBounds();
                let _wall_pcb__part_0_x = _wall_pcb__part_0_bounds[0].x + (_wall_pcb__part_0_bounds[1].x - _wall_pcb__part_0_bounds[0].x) / 2
                let _wall_pcb__part_0_y = _wall_pcb__part_0_bounds[0].y + (_wall_pcb__part_0_bounds[1].y - _wall_pcb__part_0_bounds[0].y) / 2
                _wall_pcb__part_0 = translate([-_wall_pcb__part_0_x, -_wall_pcb__part_0_y, 0], _wall_pcb__part_0);
                _wall_pcb__part_0 = rotate([0,0,0], _wall_pcb__part_0);
                _wall_pcb__part_0 = translate([_wall_pcb__part_0_x, _wall_pcb__part_0_y, 0], _wall_pcb__part_0);

                _wall_pcb__part_0 = translate([0,0,0], _wall_pcb__part_0);
                let result = _wall_pcb__part_0;
                
            
                    return result;
                }
            
            

                function bottom_case_pcb_case_fn() {
                    

                // creating part 0 of case bottom_case_pcb
                let bottom_case_pcb__part_0 = _case_bottom_case_fn();

                // make sure that rotations are relative
                let bottom_case_pcb__part_0_bounds = bottom_case_pcb__part_0.getBounds();
                let bottom_case_pcb__part_0_x = bottom_case_pcb__part_0_bounds[0].x + (bottom_case_pcb__part_0_bounds[1].x - bottom_case_pcb__part_0_bounds[0].x) / 2
                let bottom_case_pcb__part_0_y = bottom_case_pcb__part_0_bounds[0].y + (bottom_case_pcb__part_0_bounds[1].y - bottom_case_pcb__part_0_bounds[0].y) / 2
                bottom_case_pcb__part_0 = translate([-bottom_case_pcb__part_0_x, -bottom_case_pcb__part_0_y, 0], bottom_case_pcb__part_0);
                bottom_case_pcb__part_0 = rotate([0,0,0], bottom_case_pcb__part_0);
                bottom_case_pcb__part_0 = translate([bottom_case_pcb__part_0_x, bottom_case_pcb__part_0_y, 0], bottom_case_pcb__part_0);

                bottom_case_pcb__part_0 = translate([0,0,0], bottom_case_pcb__part_0);
                let result = bottom_case_pcb__part_0;
                
            

                // creating part 1 of case bottom_case_pcb
                let bottom_case_pcb__part_1 = _wall_pcb_case_fn();

                // make sure that rotations are relative
                let bottom_case_pcb__part_1_bounds = bottom_case_pcb__part_1.getBounds();
                let bottom_case_pcb__part_1_x = bottom_case_pcb__part_1_bounds[0].x + (bottom_case_pcb__part_1_bounds[1].x - bottom_case_pcb__part_1_bounds[0].x) / 2
                let bottom_case_pcb__part_1_y = bottom_case_pcb__part_1_bounds[0].y + (bottom_case_pcb__part_1_bounds[1].y - bottom_case_pcb__part_1_bounds[0].y) / 2
                bottom_case_pcb__part_1 = translate([-bottom_case_pcb__part_1_x, -bottom_case_pcb__part_1_y, 0], bottom_case_pcb__part_1);
                bottom_case_pcb__part_1 = rotate([0,0,0], bottom_case_pcb__part_1);
                bottom_case_pcb__part_1 = translate([bottom_case_pcb__part_1_x, bottom_case_pcb__part_1_y, 0], bottom_case_pcb__part_1);

                bottom_case_pcb__part_1 = translate([0,0,0], bottom_case_pcb__part_1);
                result = result.union(bottom_case_pcb__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_pcb_case_fn();
            }

        