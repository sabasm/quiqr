import { Entity } from '../entities/entity.abstract';

export abstract class AbstractRepository<T extends Entity> {
  protected abstract entity: new () => T;

  async findAll(): Promise<T[]> {
    // Implementation for finding all entities
    throw new Error('Method not implemented');
  }

  async findById(id: string): Promise<T | null> {
    // Implementation for finding an entity by ID
    throw new Error('Method not implemented');
  }

  async create(data: Partial<T>): Promise<T> {
    // Implementation for creating a new entity
    throw new Error('Method not implemented');
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    // Implementation for updating an entity
    throw new Error('Method not implemented');
  }

  async delete(id: string): Promise<boolean> {
    // Implementation for deleting an entity
    throw new Error('Method not implemented');
  }
}


