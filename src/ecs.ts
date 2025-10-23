export type Entity = number;

export interface ComponentStore<T> {
  has(entity: Entity): boolean;
  get(entity: Entity): T | undefined;
  set(entity: Entity, value: T): void;
  delete(entity: Entity): void;
  entries(): Iterable<[Entity, T]>;
}

class MapStore<T> implements ComponentStore<T> {
  private store = new Map<Entity, T>();

  has(entity: Entity): boolean {
    return this.store.has(entity);
  }

  get(entity: Entity): T | undefined {
    return this.store.get(entity);
  }

  set(entity: Entity, value: T): void {
    this.store.set(entity, value);
  }

  delete(entity: Entity): void {
    this.store.delete(entity);
  }

  *entries(): Iterable<[Entity, T]> {
    yield* this.store.entries();
  }
}

export class World {
  private nextEntity: Entity = 1;
  private freeList: Entity[] = [];
  private stores = new Map<string, ComponentStore<unknown>>();

  createEntity(): Entity {
    const id = this.freeList.pop();
    if (id !== undefined) {
      return id;
    }
    const entity = this.nextEntity;
    this.nextEntity += 1;
    return entity;
  }

  destroyEntity(entity: Entity): void {
    for (const store of this.stores.values()) {
      store.delete(entity);
    }
    this.freeList.push(entity);
  }

  registerComponent<T>(name: string): ComponentStore<T> {
    if (!this.stores.has(name)) {
      this.stores.set(name, new MapStore<T>());
    }
    return this.stores.get(name) as ComponentStore<T>;
  }

  getStore<T>(name: string): ComponentStore<T> {
    const store = this.stores.get(name);
    if (!store) {
      throw new Error(`Component ${name} non enregistré`);
    }
    return store as ComponentStore<T>;
  }
}
