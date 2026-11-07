function _pcb_outline_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[176.8316603,-36],[204.0875,-36]]).appendArc([204.5875,-36.5],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([204.5875,-90.8671568]).appendArc([204.4092847,-91.2498507],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([177.2032153,-114.1258249]).appendArc([177.025,-114.5085189],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([177.025,-118.9362539]).appendArc([177.0555413,-119.1083252],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([192.7993142,-162.0617394]).appendArc([192.6512493,-162.6168329],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([158.7928098,-191.027437]).appendArc([158.0883938,-190.9658086],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([129.435023,-156.8180508]).appendArc([129.4068301,-156.78109],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([113.1241053,-133.240567]).appendArc([112.7128903,-133.025],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([101.0896883,-133.025]).appendArc([100.9624416,-133.0414627],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([82.0875583,-138.0085373]).appendArc([81.9603117,-138.025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([37.475,-138.025]).appendArc([36.975,-137.525],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([36.975,-36.4135202]).appendArc([37.4097728,-35.9177931],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([74.9436038,-30.9791311]).appendArc([75.0056233,-30.9669413],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([93.9124417,-25.9914627]).appendArc([94.0396883,-25.975],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([119.9814729,-25.975]).appendArc([120.0678727,-25.9825215],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([176.6113997,-35.9024386]).appendArc([176.8316603,-36],{"radius":0.5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
}


function _screw_holes_extrude_1_5_outline_fn(){
    return CAG.circle({"center":[197.5875,-85.1],"radius":1.6})
.union(
    CAG.circle({"center":[154.525,-96.475],"radius":1.6})
).union(
    CAG.circle({"center":[161.1892292,-159.579668],"radius":1.6})
).union(
    CAG.circle({"center":[135.525,-129.525],"radius":1.6})
).union(
    CAG.circle({"center":[59.525,-115.475],"radius":1.6})
).union(
    CAG.circle({"center":[154.525,-58.525],"radius":1.6})
).union(
    CAG.circle({"center":[59.525,-58.525],"radius":1.6})
).extrude({ offset: [0, 0, 1.5] });
}


function _underglow_holes_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[47.25,-62.25],[52.75,-62.25]]).appendArc([53.25,-61.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([53.25,-56.25]).appendArc([52.75,-55.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47.25,-55.75]).appendArc([46.75,-56.25],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([46.75,-61.75]).appendArc([47.25,-62.25],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.union(
    new CSG.Path2D([[85.25,-57.25],[90.75,-57.25]]).appendArc([91.25,-56.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([91.25,-51.25]).appendArc([90.75,-50.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85.25,-50.75]).appendArc([84.75,-51.25],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([84.75,-56.75]).appendArc([85.25,-57.25],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[123.25,-57.25],[128.75,-57.25]]).appendArc([129.25,-56.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([129.25,-51.25]).appendArc([128.75,-50.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([123.25,-50.75]).appendArc([122.75,-51.25],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([122.75,-56.75]).appendArc([123.25,-57.25],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[161.25,-62.25],[166.75,-62.25]]).appendArc([167.25,-61.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([167.25,-56.25]).appendArc([166.75,-55.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([161.25,-55.75]).appendArc([160.75,-56.25],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([160.75,-61.75]).appendArc([161.25,-62.25],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[161.25,-119.25],[166.75,-119.25]]).appendArc([167.25,-118.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([167.25,-113.25]).appendArc([166.75,-112.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([161.25,-112.75]).appendArc([160.75,-113.25],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([160.75,-118.75]).appendArc([161.25,-119.25],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[123.25,-133.25],[128.75,-133.25]]).appendArc([129.25,-132.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([129.25,-127.25]).appendArc([128.75,-126.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([123.25,-126.75]).appendArc([122.75,-127.25],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([122.75,-132.75]).appendArc([123.25,-133.25],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[85.25,-133.25],[90.75,-133.25]]).appendArc([91.25,-132.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([91.25,-127.25]).appendArc([90.75,-126.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([85.25,-126.75]).appendArc([84.75,-127.25],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([84.75,-132.75]).appendArc([85.25,-133.25],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[47.25,-138.25],[52.75,-138.25]]).appendArc([53.25,-137.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([53.25,-132.25]).appendArc([52.75,-131.75],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([47.25,-131.75]).appendArc([46.75,-132.25],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([46.75,-137.75]).appendArc([47.25,-138.25],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[150.4071936,-152.6029956],[153.9425255,-156.8162401]]).appendArc([154.6469415,-156.8778685],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([158.860186,-153.3425366]).appendArc([158.9218144,-152.6381206],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([155.3864825,-148.4248761]).appendArc([154.6820665,-148.3632477],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([150.468822,-151.8985796]).appendArc([150.4071936,-152.6029956],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
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
            
            

                function _case_underglow_holes_case_fn() {
                    

                // creating part 0 of case _case_underglow_holes
                let _case_underglow_holes__part_0 = _underglow_holes_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let _case_underglow_holes__part_0_bounds = _case_underglow_holes__part_0.getBounds();
                let _case_underglow_holes__part_0_x = _case_underglow_holes__part_0_bounds[0].x + (_case_underglow_holes__part_0_bounds[1].x - _case_underglow_holes__part_0_bounds[0].x) / 2
                let _case_underglow_holes__part_0_y = _case_underglow_holes__part_0_bounds[0].y + (_case_underglow_holes__part_0_bounds[1].y - _case_underglow_holes__part_0_bounds[0].y) / 2
                _case_underglow_holes__part_0 = translate([-_case_underglow_holes__part_0_x, -_case_underglow_holes__part_0_y, 0], _case_underglow_holes__part_0);
                _case_underglow_holes__part_0 = rotate([0,0,0], _case_underglow_holes__part_0);
                _case_underglow_holes__part_0 = translate([_case_underglow_holes__part_0_x, _case_underglow_holes__part_0_y, 0], _case_underglow_holes__part_0);

                _case_underglow_holes__part_0 = translate([0,0,0], _case_underglow_holes__part_0);
                let result = _case_underglow_holes__part_0;
                
            
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
                
            

                // creating part 2 of case bottom_plate
                let bottom_plate__part_2 = _case_underglow_holes_case_fn();

                // make sure that rotations are relative
                let bottom_plate__part_2_bounds = bottom_plate__part_2.getBounds();
                let bottom_plate__part_2_x = bottom_plate__part_2_bounds[0].x + (bottom_plate__part_2_bounds[1].x - bottom_plate__part_2_bounds[0].x) / 2
                let bottom_plate__part_2_y = bottom_plate__part_2_bounds[0].y + (bottom_plate__part_2_bounds[1].y - bottom_plate__part_2_bounds[0].y) / 2
                bottom_plate__part_2 = translate([-bottom_plate__part_2_x, -bottom_plate__part_2_y, 0], bottom_plate__part_2);
                bottom_plate__part_2 = rotate([0,0,0], bottom_plate__part_2);
                bottom_plate__part_2 = translate([bottom_plate__part_2_x, bottom_plate__part_2_y, 0], bottom_plate__part_2);

                bottom_plate__part_2 = translate([0,0,0], bottom_plate__part_2);
                result = result.subtract(bottom_plate__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_plate_case_fn();
            }

        