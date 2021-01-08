import { Scene } from '../scene';

export class Loading extends Scene {
    constructor(game) {
        super(game);
        this.nextScene = "menu";
        console.log("Loading constructor")
    }

    render(time) {
        this.game.screen.fill('#000000');
        super.render(time);
    }
}