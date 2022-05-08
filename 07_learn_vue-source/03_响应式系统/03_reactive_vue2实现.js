class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  addEffect(effect) {
    this.subscribers.add(effect);
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  notify() {
    this.subscribers.forEach(effect => {
      effect();
    });
  }
}
let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}

const targetMap = new WeakMap();
function getDep(target, key) {
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

// vue2对raw进行数据劫持
function reactive(raw) {
  Object.keys(raw).forEach(key => {
    const dep = getDep(raw, key);
    let value = raw[key];
    Object.defineProperty(raw, key, {
      get() {
        dep.depend();
        return value;
      },
      set(newValue) {
        if (val !== newValue) {
          value = newValue;
          dep.notify();
        }
      }
    });
  });
  return raw;
}

const info = reactive({ counter: 100, name: "xc" });
const foo = reactive({ height: 1.88 });

// watchEffect1
watchEffect(function () {
  console.log("watchEffect1：", info.counter * 2, info.name);
});
// watchEffect2
watchEffect(function () {
  console.log("watchEffect2：", info.counter * info.counter);
});
// watchEffect3
watchEffect(function () {
  console.log("watchEffect3：", info.counter + 10, info.name);
});
// watchEffect4
watchEffect(function () {
  console.log("watchEffect4：",foo.height);
});

// info.counter++;
// info.name = "lilei";
