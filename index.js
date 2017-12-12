const container = document.querySelector('#app');

import('./add.wasm').then(wasm => {
    console.log(wasm);
    const { add } = wasm.default; 

    container.innerHTML = `wasm: 2 + 3 = ` + add(2, 3);
})
