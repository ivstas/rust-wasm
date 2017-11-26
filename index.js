import loadWasm from './add.wasm';

const container = document.querySelector('#app');

loadWasm().then(loaded => {
    const { add } = loaded.instance.exports; 

    container.innerHTML = `wasm: 2 + 3 = ` + add(2, 3);
})
