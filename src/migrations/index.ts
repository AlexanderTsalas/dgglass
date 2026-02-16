import * as migration_20260216_191358_initial from './20260216_191358_initial';

export const migrations = [
  {
    up: migration_20260216_191358_initial.up,
    down: migration_20260216_191358_initial.down,
    name: '20260216_191358_initial'
  },
];
