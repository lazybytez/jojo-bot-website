export type ComponentData = {
    commandsCount: number;
    components: Component[];
};

export type Component = {
    name: string;
    description: string;
    commands: Command[];
};

export type Command = {
    name: string;
    description: string;
    usage: string;
};
