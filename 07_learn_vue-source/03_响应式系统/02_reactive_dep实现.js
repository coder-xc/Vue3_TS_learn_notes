class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  addEffect(effect) {
    this.subscribers.add(effect);
  }

  notify() {
    this.subscribers.forEach(effect => {
      effect();
    })
  }
}



const info = { counter: 100 };

const dep = new Dep();

dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);

function doubleCounter() {
  console.log(info.counter * 2);
}

function powerCounter() {
  console.log(info.counter * info.counter);
}


info.counter++;

dep.notify();
