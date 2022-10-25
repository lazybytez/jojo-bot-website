export async function load({ data }) {
    // const response = await fetch('http://jsonplaceholder.typicode.com/users');
    // const components: Component = await response.json();

    const comps = [
        {
            name: 'Ping Pong',
            description: 'This Component does some pongs with pings.',
            commands: [
                {
                    name: 'test',
                    description: 'test',
                    usage: 'test'
                }
            ]
        },
        {
            name: 'Statistics',
            description: 'This Component shows bot statistics.',
            commands: [
                {
                    name: 'test',
                    description: 'test',
                    usage: 'test'
                }
            ]
        },
        {
            name: 'Events',
            description: 'This Component lets you create, view and manage custom Events.',
            commands: [
                {
                    name: 'test',
                    description: 'test',
                    usage: 'test'
                }
            ]
        }
    ];

    return {
        commandsCount: comps.length,
        components: comps
    };
}
