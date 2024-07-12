import type { ComponentContainer } from '@plusnew/core';
import type { props as IProps } from '@plusnew/core/src/interfaces/component';

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

export function getComponentPartial<
  props extends Partial<IProps & { children: any; }>,
  HostElement,
  HostTextElement
>(component: ComponentContainer<props, HostElement, HostTextElement>): ComponentContainer<Partial<props>, HostElement, HostTextElement> {
  return component as any;
}
