interface BaseRepositoryInterface<A> {
  getOne(key: string, value: string): A | undefined;
  getAll(): A[];
  getById(id: string): A | undefined;
  getBy(key: string, value: string): A[];
  create(item: A): A;
  delete(id: string): void;
  update(id: string, item: any): A;
}

export default BaseRepositoryInterface;
