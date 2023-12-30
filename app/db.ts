"use server"

console.log('creating connnection') // ideally this should happen on startup, not when executing the test() function


export function execute() {
  console.log('using connection')
}

// console.log('closing connection')

globalThis.app.hooks.hook('app:created', () => console.log('app:created'))
globalThis.app.hooks.hook('app:dev:server:closing', () => console.log('app:dev:server:closing'))
globalThis.app.hooks.hook('app:dev:server:closed', () => console.log('app:dev:server:closed'))
globalThis.app.hooks.hook('app:dev:start', () => console.log('app:dev:start'))
globalThis.app.hooks.hook('app:dev:listener:creating', () => console.log('app:dev:listener:creating'))
globalThis.app.hooks.hook('app:dev:listener:created', () => console.log('app:dev:listener:created'))