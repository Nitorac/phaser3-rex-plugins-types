declare module 'phaser3-rex-plugins/plugins/utils/eventemitter/EventEmitter' {
    import { EventEmitter as EE } from 'eventemitter3';

    export default class EventEmitter<EventTypes extends string | symbol = string | symbol> extends EE<EventTypes> {
        shutdown(): void;
        destroy(): void;
    }
}
