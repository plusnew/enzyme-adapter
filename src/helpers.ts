import { Component } from 'plusnew';

export function getAwaitAllHandle() {
  let todoQueue: Promise<any>[] = [];

  async function done() {
    const currentQueue = todoQueue;
    todoQueue = [];

    await Promise.all(currentQueue);

    if (todoQueue.length > 0) {
      await done();
    }
  }
  return {
    done,
    callback: (promise: Promise<any>) => {
      todoQueue.push(promise);
    },
  };
}

export function getComponentPartial<props>(component: Component<props>): Component<Partial<props>> {
  return component as any;
}
