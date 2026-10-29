function _pcb_outline_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[178.0171124,-37],[202.5875,-37]]).appendArc([204.5875,-39],{"radius":2,"clockwise":true,"large":false}).appendPoint([204.5875,-91.1686273]).appendArc([203.8746386,-92.699403],{"radius":2,"clockwise":true,"large":false}).appendPoint([177.7378614,-114.6762727]).appendArc([177.025,-116.2070484],{"radius":2,"clockwise":false,"large":false}).appendPoint([177.025,-118.6700158]).appendArc([177.1471653,-119.3583012],{"radius":2,"clockwise":false,"large":false}).appendPoint([192.4369874,-161.0732105]).appendArc([191.844728,-163.2935848],{"radius":2,"clockwise":true,"large":false}).appendPoint([159.9418765,-190.0632556]).appendArc([157.1242124,-189.816742],{"radius":2,"clockwise":true,"large":false}).appendPoint([129.4798924,-156.8715241]).appendArc([129.367121,-156.723681],{"radius":2,"clockwise":true,"large":false}).appendPoint([113.5714213,-133.8872678]).appendArc([111.926561,-133.025],{"radius":2,"clockwise":false,"large":false}).appendPoint([101.2837532,-133.025]).appendArc([100.7747666,-133.0908509],{"radius":2,"clockwise":false,"large":false}).appendPoint([82.2752334,-137.9591491]).appendArc([81.7662468,-138.025],{"radius":2,"clockwise":true,"large":false}).appendPoint([38.975,-138.025]).appendArc([36.975,-136.025],{"radius":2,"clockwise":true,"large":false}).appendPoint([36.975,-37.7290808]).appendArc([38.714091,-35.7461722],{"radius":2,"clockwise":true,"large":false}).appendPoint([74.849417,-30.9915241]).appendArc([75.0974946,-30.9427646],{"radius":2,"clockwise":false,"large":false}).appendPoint([93.7247666,-26.0408509]).appendArc([94.2337532,-25.975],{"radius":2,"clockwise":true,"large":false}).appendPoint([119.8508912,-25.975]).appendArc([120.1964902,-26.005086],{"radius":2,"clockwise":true,"large":false}).appendPoint([175.370599,-35.6847542]).appendArc([176.5210562,-36.3273341],{"radius":2,"clockwise":true,"large":false}).appendArc([178.0171124,-37],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function _screw_holes_extrude_1_5_outline_fn(){
    return CAG.circle({"center":[197.5875,-86.1],"radius":1.6})
.union(
    CAG.circle({"center":[173.525,-96.475],"radius":1.6})
).union(
    CAG.circle({"center":[161.1892292,-159.579668],"radius":1.6})
).union(
    CAG.circle({"center":[97.525,-129.525],"radius":1.6})
).union(
    CAG.circle({"center":[135.525,-129.525],"radius":1.6})
).union(
    CAG.circle({"center":[59.525,-115.475],"radius":1.6})
).union(
    CAG.circle({"center":[173.525,-58.525],"radius":1.6})
).union(
    CAG.circle({"center":[135.525,-34.475],"radius":1.6})
).union(
    CAG.circle({"center":[59.525,-58.525],"radius":1.6})
).extrude({ offset: [0, 0, 1.5] });
}




                function _pcb_bottom_case_fn() {
                    

                // creating part 0 of case _pcb_bottom
                let _pcb_bottom__part_0 = _pcb_outline_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let _pcb_bottom__part_0_bounds = _pcb_bottom__part_0.getBounds();
                let _pcb_bottom__part_0_x = _pcb_bottom__part_0_bounds[0].x + (_pcb_bottom__part_0_bounds[1].x - _pcb_bottom__part_0_bounds[0].x) / 2
                let _pcb_bottom__part_0_y = _pcb_bottom__part_0_bounds[0].y + (_pcb_bottom__part_0_bounds[1].y - _pcb_bottom__part_0_bounds[0].y) / 2
                _pcb_bottom__part_0 = translate([-_pcb_bottom__part_0_x, -_pcb_bottom__part_0_y, 0], _pcb_bottom__part_0);
                _pcb_bottom__part_0 = rotate([0,0,0], _pcb_bottom__part_0);
                _pcb_bottom__part_0 = translate([_pcb_bottom__part_0_x, _pcb_bottom__part_0_y, 0], _pcb_bottom__part_0);

                _pcb_bottom__part_0 = translate([0,0,0], _pcb_bottom__part_0);
                let result = _pcb_bottom__part_0;
                
            
                    return result;
                }
            
            

                function _pcb_plate_holes_case_fn() {
                    

                // creating part 0 of case _pcb_plate_holes
                let _pcb_plate_holes__part_0 = _screw_holes_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let _pcb_plate_holes__part_0_bounds = _pcb_plate_holes__part_0.getBounds();
                let _pcb_plate_holes__part_0_x = _pcb_plate_holes__part_0_bounds[0].x + (_pcb_plate_holes__part_0_bounds[1].x - _pcb_plate_holes__part_0_bounds[0].x) / 2
                let _pcb_plate_holes__part_0_y = _pcb_plate_holes__part_0_bounds[0].y + (_pcb_plate_holes__part_0_bounds[1].y - _pcb_plate_holes__part_0_bounds[0].y) / 2
                _pcb_plate_holes__part_0 = translate([-_pcb_plate_holes__part_0_x, -_pcb_plate_holes__part_0_y, 0], _pcb_plate_holes__part_0);
                _pcb_plate_holes__part_0 = rotate([0,0,0], _pcb_plate_holes__part_0);
                _pcb_plate_holes__part_0 = translate([_pcb_plate_holes__part_0_x, _pcb_plate_holes__part_0_y, 0], _pcb_plate_holes__part_0);

                _pcb_plate_holes__part_0 = translate([0,0,0], _pcb_plate_holes__part_0);
                let result = _pcb_plate_holes__part_0;
                
            
                    return result;
                }
            
            

                function bottom_plate_case_fn() {
                    

                // creating part 0 of case bottom_plate
                let bottom_plate__part_0 = _pcb_bottom_case_fn();

                // make sure that rotations are relative
                let bottom_plate__part_0_bounds = bottom_plate__part_0.getBounds();
                let bottom_plate__part_0_x = bottom_plate__part_0_bounds[0].x + (bottom_plate__part_0_bounds[1].x - bottom_plate__part_0_bounds[0].x) / 2
                let bottom_plate__part_0_y = bottom_plate__part_0_bounds[0].y + (bottom_plate__part_0_bounds[1].y - bottom_plate__part_0_bounds[0].y) / 2
                bottom_plate__part_0 = translate([-bottom_plate__part_0_x, -bottom_plate__part_0_y, 0], bottom_plate__part_0);
                bottom_plate__part_0 = rotate([0,0,0], bottom_plate__part_0);
                bottom_plate__part_0 = translate([bottom_plate__part_0_x, bottom_plate__part_0_y, 0], bottom_plate__part_0);

                bottom_plate__part_0 = translate([0,0,0], bottom_plate__part_0);
                let result = bottom_plate__part_0;
                
            

                // creating part 1 of case bottom_plate
                let bottom_plate__part_1 = _pcb_plate_holes_case_fn();

                // make sure that rotations are relative
                let bottom_plate__part_1_bounds = bottom_plate__part_1.getBounds();
                let bottom_plate__part_1_x = bottom_plate__part_1_bounds[0].x + (bottom_plate__part_1_bounds[1].x - bottom_plate__part_1_bounds[0].x) / 2
                let bottom_plate__part_1_y = bottom_plate__part_1_bounds[0].y + (bottom_plate__part_1_bounds[1].y - bottom_plate__part_1_bounds[0].y) / 2
                bottom_plate__part_1 = translate([-bottom_plate__part_1_x, -bottom_plate__part_1_y, 0], bottom_plate__part_1);
                bottom_plate__part_1 = rotate([0,0,0], bottom_plate__part_1);
                bottom_plate__part_1 = translate([bottom_plate__part_1_x, bottom_plate__part_1_y, 0], bottom_plate__part_1);

                bottom_plate__part_1 = translate([0,0,0], bottom_plate__part_1);
                result = result.subtract(bottom_plate__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_plate_case_fn();
            }

        