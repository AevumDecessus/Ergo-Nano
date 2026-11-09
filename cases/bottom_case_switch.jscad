function _outer_wall_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[177.2421977,-34],[204.0875,-34]]).appendArc([206.5875,-36.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([206.5875,-90.8671568]).appendArc([205.6964233,-92.7806264],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([179.025,-115.2070484]).appendPoint([179.025,-118.2866215]).appendPoint([204.1393059,-147.6634352]).appendArc([204.1541734,-150.8949269],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([175.7901963,-184.6977984]).appendArc([172.2681161,-185.0059405],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([138.1090921,-156.3431162]).appendPoint([112.2567424,-135.025]).appendPoint([101.2837532,-135.025]).appendPoint([82.5971566,-139.9425253]).appendArc([81.9603117,-140.025],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([37.475,-140.025]).appendArc([34.975,-137.525],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([34.975,-36.4135202]).appendArc([37.1488638,-33.9348845],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([74.5885082,-29.0086154]).appendPoint([93.403455,-24.0573137]).appendArc([94.0396883,-23.975],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([119.9814729,-23.975]).appendArc([120.4134717,-24.0126074],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([176.9569987,-33.9325245]).appendArc([177.2421977,-34],{"radius":2.5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.5] });
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
    new CSG.Path2D([[159.3275531,-147.0276825],[163.5407976,-150.5630144]]).appendArc([164.2452136,-150.501386],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([167.7805455,-146.2881415]).appendArc([167.7189171,-145.5837255],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([163.5056726,-142.0483936]).appendArc([162.8012566,-142.110022],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([159.2659247,-146.3232665]).appendArc([159.3275531,-147.0276825],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 1.5] });
}


function _standoffs_extrude_4_outline_fn(){
    return CAG.circle({"center":[197.5875,-85.1],"radius":3.35})
.union(
    CAG.circle({"center":[154.525,-96.475],"radius":3.35})
).union(
    CAG.circle({"center":[171.157272,-152.0260826],"radius":3.35})
).union(
    CAG.circle({"center":[59.525,-115.475],"radius":3.35})
).union(
    CAG.circle({"center":[154.525,-58.525],"radius":3.35})
).union(
    CAG.circle({"center":[59.525,-58.525],"radius":3.35})
).extrude({ offset: [0, 0, 4] });
}


function _standoff_holes_extrude_4_outline_fn(){
    return CAG.circle({"center":[197.5875,-85.1],"radius":2.25})
.union(
    CAG.circle({"center":[154.525,-96.475],"radius":2.25})
).union(
    CAG.circle({"center":[171.157272,-152.0260826],"radius":2.25})
).union(
    CAG.circle({"center":[59.525,-115.475],"radius":2.25})
).union(
    CAG.circle({"center":[154.525,-58.525],"radius":2.25})
).union(
    CAG.circle({"center":[59.525,-58.525],"radius":2.25})
).extrude({ offset: [0, 0, 4] });
}


function _case_wall_extrude_10_6_outline_fn(){
    return new CSG.Path2D([[177.2421977,-34],[204.0875,-34]]).appendArc([206.5875,-36.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([206.5875,-90.8671568]).appendArc([205.6964233,-92.7806264],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([179.025,-115.2070484]).appendPoint([179.025,-118.2866215]).appendPoint([204.1393059,-147.6634352]).appendArc([204.1541734,-150.8949269],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([175.7901963,-184.6977984]).appendArc([172.2681161,-185.0059405],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([138.1090921,-156.3431162]).appendPoint([112.2567424,-135.025]).appendPoint([101.2837532,-135.025]).appendPoint([82.5971566,-139.9425253]).appendArc([81.9603117,-140.025],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([37.475,-140.025]).appendArc([34.975,-137.525],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([34.975,-36.4135202]).appendArc([37.1488638,-33.9348845],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([74.5885082,-29.0086154]).appendPoint([93.403455,-24.0573137]).appendArc([94.0396883,-23.975],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([119.9814729,-23.975]).appendArc([120.4134717,-24.0126074],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([176.9569987,-33.9325245]).appendArc([177.2421977,-34],{"radius":2.5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[176.9213463,-35.7],[204.0875,-35.7]]).appendArc([204.8875,-36.5],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([204.8875,-90.8671568]).appendArc([204.6023555,-91.4794671],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([177.3962862,-114.3554413]).appendArc([177.325,-114.5085189],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([177.325,-118.8404055]).appendArc([177.3728799,-118.9702494],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([202.8471402,-148.7681106]).appendArc([202.8518978,-149.8021879],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([174.4879208,-183.6050595]).appendArc([173.3608551,-183.7036649],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([139.1969118,-155.0367129]).appendPoint([112.9226765,-133.3706959]).appendArc([112.7954357,-133.325],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([101.0896884,-133.325]).appendArc([101.0387896,-133.3315851],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([82.1641432,-138.2985972]).appendArc([81.9603117,-138.325],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([37.475,-138.325]).appendArc([36.675,-137.525],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([36.675,-36.4135202]).appendArc([37.3706364,-35.6203568],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([74.9044675,-30.6816948]).appendArc([74.9292753,-30.6768189],{"radius":0.2,"clockwise":false,"large":false}).appendPoint([93.8360937,-25.7013404]).appendArc([94.0396883,-25.675],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([119.9814729,-25.675]).appendArc([120.1197125,-25.6870344],{"radius":0.8,"clockwise":true,"large":false}).appendPoint([176.6632396,-35.6069514]).appendArc([176.9213463,-35.7],{"radius":0.8,"clockwise":true,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 10.6] });
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
                let _case_bottom__part_1 = _case_underglow_holes_case_fn();

                // make sure that rotations are relative
                let _case_bottom__part_1_bounds = _case_bottom__part_1.getBounds();
                let _case_bottom__part_1_x = _case_bottom__part_1_bounds[0].x + (_case_bottom__part_1_bounds[1].x - _case_bottom__part_1_bounds[0].x) / 2
                let _case_bottom__part_1_y = _case_bottom__part_1_bounds[0].y + (_case_bottom__part_1_bounds[1].y - _case_bottom__part_1_bounds[0].y) / 2
                _case_bottom__part_1 = translate([-_case_bottom__part_1_x, -_case_bottom__part_1_y, 0], _case_bottom__part_1);
                _case_bottom__part_1 = rotate([0,0,0], _case_bottom__part_1);
                _case_bottom__part_1 = translate([_case_bottom__part_1_x, _case_bottom__part_1_y, 0], _case_bottom__part_1);

                _case_bottom__part_1 = translate([0,0,0], _case_bottom__part_1);
                result = result.subtract(_case_bottom__part_1);
                
            

                // creating part 2 of case _case_bottom
                let _case_bottom__part_2 = _case_standoffs_heatset_case_fn();

                // make sure that rotations are relative
                let _case_bottom__part_2_bounds = _case_bottom__part_2.getBounds();
                let _case_bottom__part_2_x = _case_bottom__part_2_bounds[0].x + (_case_bottom__part_2_bounds[1].x - _case_bottom__part_2_bounds[0].x) / 2
                let _case_bottom__part_2_y = _case_bottom__part_2_bounds[0].y + (_case_bottom__part_2_bounds[1].y - _case_bottom__part_2_bounds[0].y) / 2
                _case_bottom__part_2 = translate([-_case_bottom__part_2_x, -_case_bottom__part_2_y, 0], _case_bottom__part_2);
                _case_bottom__part_2 = rotate([0,0,0], _case_bottom__part_2);
                _case_bottom__part_2 = translate([_case_bottom__part_2_x, _case_bottom__part_2_y, 0], _case_bottom__part_2);

                _case_bottom__part_2 = translate([0,0,0], _case_bottom__part_2);
                result = result.union(_case_bottom__part_2);
                
            

                // creating part 3 of case _case_bottom
                let _case_bottom__part_3 = _case_standoff_holes_case_fn();

                // make sure that rotations are relative
                let _case_bottom__part_3_bounds = _case_bottom__part_3.getBounds();
                let _case_bottom__part_3_x = _case_bottom__part_3_bounds[0].x + (_case_bottom__part_3_bounds[1].x - _case_bottom__part_3_bounds[0].x) / 2
                let _case_bottom__part_3_y = _case_bottom__part_3_bounds[0].y + (_case_bottom__part_3_bounds[1].y - _case_bottom__part_3_bounds[0].y) / 2
                _case_bottom__part_3 = translate([-_case_bottom__part_3_x, -_case_bottom__part_3_y, 0], _case_bottom__part_3);
                _case_bottom__part_3 = rotate([0,0,0], _case_bottom__part_3);
                _case_bottom__part_3 = translate([_case_bottom__part_3_x, _case_bottom__part_3_y, 0], _case_bottom__part_3);

                _case_bottom__part_3 = translate([0,0,0], _case_bottom__part_3);
                result = result.subtract(_case_bottom__part_3);
                
            
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
            
            

                function _case_standoffs_heatset_case_fn() {
                    

                // creating part 0 of case _case_standoffs_heatset
                let _case_standoffs_heatset__part_0 = _standoffs_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _case_standoffs_heatset__part_0_bounds = _case_standoffs_heatset__part_0.getBounds();
                let _case_standoffs_heatset__part_0_x = _case_standoffs_heatset__part_0_bounds[0].x + (_case_standoffs_heatset__part_0_bounds[1].x - _case_standoffs_heatset__part_0_bounds[0].x) / 2
                let _case_standoffs_heatset__part_0_y = _case_standoffs_heatset__part_0_bounds[0].y + (_case_standoffs_heatset__part_0_bounds[1].y - _case_standoffs_heatset__part_0_bounds[0].y) / 2
                _case_standoffs_heatset__part_0 = translate([-_case_standoffs_heatset__part_0_x, -_case_standoffs_heatset__part_0_y, 0], _case_standoffs_heatset__part_0);
                _case_standoffs_heatset__part_0 = rotate([0,0,0], _case_standoffs_heatset__part_0);
                _case_standoffs_heatset__part_0 = translate([_case_standoffs_heatset__part_0_x, _case_standoffs_heatset__part_0_y, 0], _case_standoffs_heatset__part_0);

                _case_standoffs_heatset__part_0 = translate([0,0,0], _case_standoffs_heatset__part_0);
                let result = _case_standoffs_heatset__part_0;
                
            
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
            
            

                function _wall_switch_plate_case_fn() {
                    

                // creating part 0 of case _wall_switch_plate
                let _wall_switch_plate__part_0 = _case_wall_extrude_10_6_outline_fn();

                // make sure that rotations are relative
                let _wall_switch_plate__part_0_bounds = _wall_switch_plate__part_0.getBounds();
                let _wall_switch_plate__part_0_x = _wall_switch_plate__part_0_bounds[0].x + (_wall_switch_plate__part_0_bounds[1].x - _wall_switch_plate__part_0_bounds[0].x) / 2
                let _wall_switch_plate__part_0_y = _wall_switch_plate__part_0_bounds[0].y + (_wall_switch_plate__part_0_bounds[1].y - _wall_switch_plate__part_0_bounds[0].y) / 2
                _wall_switch_plate__part_0 = translate([-_wall_switch_plate__part_0_x, -_wall_switch_plate__part_0_y, 0], _wall_switch_plate__part_0);
                _wall_switch_plate__part_0 = rotate([0,0,0], _wall_switch_plate__part_0);
                _wall_switch_plate__part_0 = translate([_wall_switch_plate__part_0_x, _wall_switch_plate__part_0_y, 0], _wall_switch_plate__part_0);

                _wall_switch_plate__part_0 = translate([0,0,0], _wall_switch_plate__part_0);
                let result = _wall_switch_plate__part_0;
                
            
                    return result;
                }
            
            

                function bottom_case_switch_case_fn() {
                    

                // creating part 0 of case bottom_case_switch
                let bottom_case_switch__part_0 = _case_bottom_case_fn();

                // make sure that rotations are relative
                let bottom_case_switch__part_0_bounds = bottom_case_switch__part_0.getBounds();
                let bottom_case_switch__part_0_x = bottom_case_switch__part_0_bounds[0].x + (bottom_case_switch__part_0_bounds[1].x - bottom_case_switch__part_0_bounds[0].x) / 2
                let bottom_case_switch__part_0_y = bottom_case_switch__part_0_bounds[0].y + (bottom_case_switch__part_0_bounds[1].y - bottom_case_switch__part_0_bounds[0].y) / 2
                bottom_case_switch__part_0 = translate([-bottom_case_switch__part_0_x, -bottom_case_switch__part_0_y, 0], bottom_case_switch__part_0);
                bottom_case_switch__part_0 = rotate([0,0,0], bottom_case_switch__part_0);
                bottom_case_switch__part_0 = translate([bottom_case_switch__part_0_x, bottom_case_switch__part_0_y, 0], bottom_case_switch__part_0);

                bottom_case_switch__part_0 = translate([0,0,0], bottom_case_switch__part_0);
                let result = bottom_case_switch__part_0;
                
            

                // creating part 1 of case bottom_case_switch
                let bottom_case_switch__part_1 = _wall_switch_plate_case_fn();

                // make sure that rotations are relative
                let bottom_case_switch__part_1_bounds = bottom_case_switch__part_1.getBounds();
                let bottom_case_switch__part_1_x = bottom_case_switch__part_1_bounds[0].x + (bottom_case_switch__part_1_bounds[1].x - bottom_case_switch__part_1_bounds[0].x) / 2
                let bottom_case_switch__part_1_y = bottom_case_switch__part_1_bounds[0].y + (bottom_case_switch__part_1_bounds[1].y - bottom_case_switch__part_1_bounds[0].y) / 2
                bottom_case_switch__part_1 = translate([-bottom_case_switch__part_1_x, -bottom_case_switch__part_1_y, 0], bottom_case_switch__part_1);
                bottom_case_switch__part_1 = rotate([0,0,0], bottom_case_switch__part_1);
                bottom_case_switch__part_1 = translate([bottom_case_switch__part_1_x, bottom_case_switch__part_1_y, 0], bottom_case_switch__part_1);

                bottom_case_switch__part_1 = translate([0,0,0], bottom_case_switch__part_1);
                result = result.union(bottom_case_switch__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_switch_case_fn();
            }

        