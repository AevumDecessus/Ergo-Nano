function _board_with_border_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[33.475,-133.025],[33.475,-40.3602021]]).appendArc([40.8661368,-31.9328406],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([74.2044522,-27.5462201]).appendArc([74.3905105,-27.5096504],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([92.4586896,-22.7548664]).appendArc([94.6218828,-22.475],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([119.5897275,-22.475]).appendArc([121.0585233,-22.6028653],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([177.2010731,-32.4524355]).appendArc([177.4602725,-32.475],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([201.8625,-32.475]).appendArc([210.3625,-40.975],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([210.3625,-79.2965795]).appendArc([208.5478845,-84.5459255],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([180.2647954,-120.566282]).appendArc([178.3247146,-122.3690343],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([170.5349184,-127.6107294]).appendArc([170.2232583,-129.8193987],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([192.4250717,-156.2784898]).appendArc([191.3779266,-168.2542031],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([164.4904074,-190.8155105]).appendArc([152.5146941,-189.7683654],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([126.8890134,-159.2288681]).appendArc([126.4091969,-158.5998942],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([111.5880237,-137.1723888]).appendArc([110.3539025,-136.525],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([101.6718828,-136.525]).appendArc([101.2901428,-136.5743882],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([83.5413103,-141.2451336]).appendArc([81.3781172,-141.525],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([41.975,-141.525]).appendArc([33.475,-133.025],{"radius":8.5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.6] });
}


function _board_wall_extrude_5_6_outline_fn(){
    return new CSG.Path2D([[33.475,-133.025],[33.475,-40.3602021]]).appendArc([40.8661368,-31.9328406],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([74.2044522,-27.5462201]).appendArc([74.3905105,-27.5096504],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([92.4586896,-22.7548664]).appendArc([94.6218828,-22.475],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([119.5897275,-22.475]).appendArc([121.0585233,-22.6028653],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([177.2010731,-32.4524355]).appendArc([177.4602725,-32.475],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([201.8625,-32.475]).appendArc([210.3625,-40.975],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([210.3625,-79.2965795]).appendArc([208.5478845,-84.5459255],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([180.2647954,-120.566282]).appendArc([178.3247146,-122.3690343],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([170.5349184,-127.6107294]).appendArc([170.2232583,-129.8193987],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([192.4250717,-156.2784898]).appendArc([191.3779266,-168.2542031],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([164.4904074,-190.8155105]).appendArc([152.5146941,-189.7683654],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([126.8890134,-159.2288681]).appendArc([126.4091969,-158.5998942],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([111.5880237,-137.1723888]).appendArc([110.3539025,-136.525],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([101.6718828,-136.525]).appendArc([101.2901428,-136.5743882],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([83.5413103,-141.2451336]).appendArc([81.3781172,-141.525],{"radius":8.5,"clockwise":true,"large":false}).appendPoint([41.975,-141.525]).appendArc([33.475,-133.025],{"radius":8.5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[36.875,-133.025],[36.875,-40.3602021]]).appendArc([41.3096821,-35.3037852],{"radius":5.1,"clockwise":true,"large":false}).appendPoint([74.6479975,-30.9171647]).appendArc([75.2557877,-30.7977038],{"radius":4.9,"clockwise":false,"large":false}).appendPoint([93.3238302,-26.0429559]).appendArc([94.6218828,-25.875],{"radius":5.1,"clockwise":true,"large":false}).appendPoint([119.5897275,-25.875]).appendArc([120.471005,-25.9517192],{"radius":5.1,"clockwise":true,"large":false}).appendPoint([176.6135549,-35.8012894]).appendArc([177.4602725,-35.875],{"radius":4.9,"clockwise":false,"large":false}).appendPoint([201.8625,-35.875]).appendArc([206.9625,-40.975],{"radius":5.1,"clockwise":true,"large":false}).appendPoint([206.9625,-79.2965795]).appendArc([205.8737307,-82.4461871],{"radius":5.1,"clockwise":true,"large":false}).appendPoint([177.5906416,-118.4665435]).appendArc([176.4265931,-119.548195],{"radius":5.1,"clockwise":true,"large":false}).appendPoint([168.6367969,-124.78989]).appendArc([167.6187072,-132.0048767],{"radius":4.9,"clockwise":false,"large":false}).appendPoint([189.8209675,-158.4645003]).appendArc([189.1924487,-165.649652],{"radius":5.1,"clockwise":true,"large":false}).appendPoint([162.3043969,-188.2114063]).appendArc([155.1192452,-187.5828875],{"radius":5.1,"clockwise":true,"large":false}).appendPoint([129.4930268,-157.0427494]).appendArc([129.2054594,-156.6657495],{"radius":5.1,"clockwise":true,"large":false}).appendPoint([114.3838103,-135.2375562]).appendArc([110.3539025,-133.125],{"radius":4.9,"clockwise":false,"large":false}).appendPoint([101.6718828,-133.125]).appendArc([100.4248656,-133.2863348],{"radius":4.9,"clockwise":false,"large":false}).appendPoint([82.6760331,-137.9570801]).appendArc([81.3781172,-138.125],{"radius":5.1,"clockwise":true,"large":false}).appendPoint([41.975,-138.125]).appendArc([36.875,-133.025],{"radius":5.1,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 5.6] });
}


function _standoffs_extrude_4_outline_fn(){
    return CAG.circle({"center":[173.525,-96.475],"radius":4})
.union(
    CAG.circle({"center":[161.1892292,-159.579668],"radius":4})
).union(
    CAG.circle({"center":[116.525,-124.525],"radius":4})
).union(
    CAG.circle({"center":[116.525,-86.525],"radius":4})
).union(
    CAG.circle({"center":[59.525,-115.475],"radius":4})
).union(
    CAG.circle({"center":[178.2875,-58.525],"radius":4})
).union(
    CAG.circle({"center":[116.525,-48.525],"radius":4})
).union(
    CAG.circle({"center":[59.525,-58.525],"radius":4})
).extrude({ offset: [0, 0, 4] });
}


function _standoff_holes_extrude_4_outline_fn(){
    return CAG.circle({"center":[173.525,-96.475],"radius":2.25})
.union(
    CAG.circle({"center":[161.1892292,-159.579668],"radius":2.25})
).union(
    CAG.circle({"center":[116.525,-124.525],"radius":2.25})
).union(
    CAG.circle({"center":[116.525,-86.525],"radius":2.25})
).union(
    CAG.circle({"center":[59.525,-115.475],"radius":2.25})
).union(
    CAG.circle({"center":[178.2875,-58.525],"radius":2.25})
).union(
    CAG.circle({"center":[116.525,-48.525],"radius":2.25})
).union(
    CAG.circle({"center":[59.525,-58.525],"radius":2.25})
).extrude({ offset: [0, 0, 4] });
}




                function _xl_bottom_case_fn() {
                    

                // creating part 0 of case _xl_bottom
                let _xl_bottom__part_0 = _board_with_border_extrude_1_6_outline_fn();

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
            
            

                function _wall_case_fn() {
                    

                // creating part 0 of case _wall
                let _wall__part_0 = _board_wall_extrude_5_6_outline_fn();

                // make sure that rotations are relative
                let _wall__part_0_bounds = _wall__part_0.getBounds();
                let _wall__part_0_x = _wall__part_0_bounds[0].x + (_wall__part_0_bounds[1].x - _wall__part_0_bounds[0].x) / 2
                let _wall__part_0_y = _wall__part_0_bounds[0].y + (_wall__part_0_bounds[1].y - _wall__part_0_bounds[0].y) / 2
                _wall__part_0 = translate([-_wall__part_0_x, -_wall__part_0_y, 0], _wall__part_0);
                _wall__part_0 = rotate([0,0,0], _wall__part_0);
                _wall__part_0 = translate([_wall__part_0_x, _wall__part_0_y, 0], _wall__part_0);

                _wall__part_0 = translate([0,0,0], _wall__part_0);
                let result = _wall__part_0;
                
            
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
            
            

                function bottom_case_case_fn() {
                    

                // creating part 0 of case bottom_case
                let bottom_case__part_0 = _xl_bottom_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_0_bounds = bottom_case__part_0.getBounds();
                let bottom_case__part_0_x = bottom_case__part_0_bounds[0].x + (bottom_case__part_0_bounds[1].x - bottom_case__part_0_bounds[0].x) / 2
                let bottom_case__part_0_y = bottom_case__part_0_bounds[0].y + (bottom_case__part_0_bounds[1].y - bottom_case__part_0_bounds[0].y) / 2
                bottom_case__part_0 = translate([-bottom_case__part_0_x, -bottom_case__part_0_y, 0], bottom_case__part_0);
                bottom_case__part_0 = rotate([0,0,0], bottom_case__part_0);
                bottom_case__part_0 = translate([bottom_case__part_0_x, bottom_case__part_0_y, 0], bottom_case__part_0);

                bottom_case__part_0 = translate([0,0,0], bottom_case__part_0);
                let result = bottom_case__part_0;
                
            

                // creating part 1 of case bottom_case
                let bottom_case__part_1 = _wall_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_1_bounds = bottom_case__part_1.getBounds();
                let bottom_case__part_1_x = bottom_case__part_1_bounds[0].x + (bottom_case__part_1_bounds[1].x - bottom_case__part_1_bounds[0].x) / 2
                let bottom_case__part_1_y = bottom_case__part_1_bounds[0].y + (bottom_case__part_1_bounds[1].y - bottom_case__part_1_bounds[0].y) / 2
                bottom_case__part_1 = translate([-bottom_case__part_1_x, -bottom_case__part_1_y, 0], bottom_case__part_1);
                bottom_case__part_1 = rotate([0,0,0], bottom_case__part_1);
                bottom_case__part_1 = translate([bottom_case__part_1_x, bottom_case__part_1_y, 0], bottom_case__part_1);

                bottom_case__part_1 = translate([0,0,0], bottom_case__part_1);
                result = result.union(bottom_case__part_1);
                
            

                // creating part 2 of case bottom_case
                let bottom_case__part_2 = _case_standoffs_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_2_bounds = bottom_case__part_2.getBounds();
                let bottom_case__part_2_x = bottom_case__part_2_bounds[0].x + (bottom_case__part_2_bounds[1].x - bottom_case__part_2_bounds[0].x) / 2
                let bottom_case__part_2_y = bottom_case__part_2_bounds[0].y + (bottom_case__part_2_bounds[1].y - bottom_case__part_2_bounds[0].y) / 2
                bottom_case__part_2 = translate([-bottom_case__part_2_x, -bottom_case__part_2_y, 0], bottom_case__part_2);
                bottom_case__part_2 = rotate([0,0,0], bottom_case__part_2);
                bottom_case__part_2 = translate([bottom_case__part_2_x, bottom_case__part_2_y, 0], bottom_case__part_2);

                bottom_case__part_2 = translate([0,0,0], bottom_case__part_2);
                result = result.union(bottom_case__part_2);
                
            

                // creating part 3 of case bottom_case
                let bottom_case__part_3 = _case_standoff_holes_case_fn();

                // make sure that rotations are relative
                let bottom_case__part_3_bounds = bottom_case__part_3.getBounds();
                let bottom_case__part_3_x = bottom_case__part_3_bounds[0].x + (bottom_case__part_3_bounds[1].x - bottom_case__part_3_bounds[0].x) / 2
                let bottom_case__part_3_y = bottom_case__part_3_bounds[0].y + (bottom_case__part_3_bounds[1].y - bottom_case__part_3_bounds[0].y) / 2
                bottom_case__part_3 = translate([-bottom_case__part_3_x, -bottom_case__part_3_y, 0], bottom_case__part_3);
                bottom_case__part_3 = rotate([0,0,0], bottom_case__part_3);
                bottom_case__part_3 = translate([bottom_case__part_3_x, bottom_case__part_3_y, 0], bottom_case__part_3);

                bottom_case__part_3 = translate([0,0,0], bottom_case__part_3);
                result = result.subtract(bottom_case__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_case_fn();
            }

        