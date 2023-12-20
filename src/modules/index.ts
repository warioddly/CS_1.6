import { scene } from "./scene";
import { renderer } from "./renderer";
import { camera } from "./camera";
import { clock } from "./clock";
import { stats } from "./stats";

export const game = {
    scene: scene,
    renderer: renderer,
    camera: camera,
    clock: clock,
    stats: stats,
    configs: {
        player: {
            speed: 0.1,
            jumpSpeed: 0.2,
        },
    },
    update: function (dt: number) {

        this.renderer.render( this.scene, this.camera );
        this.stats.update();

    }
}
